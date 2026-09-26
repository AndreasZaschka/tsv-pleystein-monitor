"""Lädt die Ergebnisseiten serverseitig und legt schlanke HTML-Fragmente unter data/ ab.

Die Monitor-Seiten laden diese Dateien vom eigenen Origin, damit kein öffentlicher
CORS-Proxy mehr nötig ist. Schlägt ein Abruf fehl oder fehlt ein erwartetes Element,
bricht das Skript ab, ohne die vorhandenen Dateien zu überschreiben.
"""
import sys
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup

DATA_DIR = Path(__file__).resolve().parent.parent / 'data'
KEEP_ATTRS = {'class', 'colspan', 'rowspan'}
DROP_TAGS = ['script', 'style', 'svg', 'img', 'input', 'button', 'iframe', 'object', 'embed', 'form']


def fetch(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'tsv-pleystein-monitor (+https://github.com/AndreasZaschka/tsv-pleystein-monitor)'})
    with urllib.request.urlopen(request, timeout=60) as response:
        if response.status != 200:
            raise RuntimeError(f'{url}: HTTP {response.status}')
        return BeautifulSoup(response.read(), 'html.parser')


def select(soup, selector, url):
    element = soup.select_one(selector)
    if element is None:
        raise RuntimeError(f'{url}: "{selector}" nicht gefunden')
    return element


def clean(element):
    for tag in element.find_all(DROP_TAGS):
        tag.decompose()
    for link in element.find_all('a'):
        link.unwrap()
    for tag in [element, *element.find_all(True)]:
        tag.attrs = {k: v for k, v in tag.attrs.items() if k in KEEP_ATTRS}
    return str(element)


def volleyball():
    url = 'https://volleyball.bayern/ergebnisse/erwachsene/oberpfalz/wettbewerb-44657'
    soup = fetch(url)
    title = clean(select(soup, '.bvv-portal-results-liga h2', url))
    games = clean(select(soup, '#paarungenrunde0 .d-md-block table', url))
    table = clean(select(soup, '#tabellenrunde0 table', url))
    return {
        'volleyball.html': '<div class="bvv-portal-results-liga">' + title
                           + '<div id="paarungenrunde0"><div class="d-md-block">' + games + '</div></div>'
                           + '<div id="tabellenrunde0">' + table + '</div></div>\n',
    }


def skaterhockey():
    url_games = 'https://www.briv-online.de/liga/443/spielplan/'
    url_table = 'https://www.briv-online.de/liga/443/tabelle/'
    games_page = fetch(url_games)
    table_page = fetch(url_table)
    title = clean(select(games_page, '#content h1', url_games))
    games = clean(select(games_page, 'table.spielplan', url_games))
    table = clean(select(table_page, 'table.tabelle', url_table))
    return {
        'skaterhockey-spielplan.html': '<div id="content">' + title + '</div>' + games + '\n',
        'skaterhockey-tabelle.html': table + '\n',
    }


def main():
    failed = False
    for source in (volleyball, skaterhockey):
        try:
            files = source()
        except Exception as error:
            print(f'FEHLER {source.__name__}: {error}', file=sys.stderr)
            failed = True
            continue
        for name, content in files.items():
            (DATA_DIR / name).write_text(content, encoding='utf-8')
            print(f'{name}: {len(content)} Bytes')
    return 1 if failed else 0


if __name__ == '__main__':
    sys.exit(main())
