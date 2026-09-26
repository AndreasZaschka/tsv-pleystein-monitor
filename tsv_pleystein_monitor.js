function getSponsorId() {
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('sponsorId')) {
        return this.getNextSponsorParam(urlParams.get('sponsorId'));
    } else {
        return '1'
    }
}

function getNextSponsorParam(currentSponsorId) {

    var _currentSponsorId = parseInt(currentSponsorId);

    if (isNaN(_currentSponsorId) || _currentSponsorId < 1 || _currentSponsorId >= 8) {
        return '1';
    } else {
        return (_currentSponsorId + 1).toString();
    }
}

function showAllLeagues() {
    const now = new Date();
    const dayOfWeek = now.getDay();

    // if day is sunday, then game day..
    if (dayOfWeek === 0) {

        const periodStart = new Date();
        periodStart.setHours(16, 0, 0);
        const periodEnd = new Date();
        periodEnd.setHours(19, 0, 0);

        if (now >= periodStart && now < periodEnd) {
            console.log("its game day :D");
            return true;
        }
    }

    // if day is wednesday or friday, then training..
    if (dayOfWeek === 3 || dayOfWeek === 5) {

        const periodStart = new Date();
        periodStart.setHours(19, 0, 0);
        const periodEnd = new Date();
        periodEnd.setHours(20, 0, 0);

        if (now >= periodStart && now < periodEnd) {
            console.log("its training :D");
            return true;
        }
    }

    return false;
}

// Fremdes HTML (CORS-Proxy / Verbandsseiten) ist nicht vertrauenswürdig: nur Text übernehmen.
function textOf(node) {
    return node ? node.textContent.replace(/\s+/g, ' ').trim() : '';
}

// Baut eine fremde Tabelle nur aus Struktur + Text neu auf (keine Attribute, Links, Bilder, Handler).
function sanitizeTable(sourceTable) {
    const table = document.createElement('table');
    const tHead = table.createTHead();
    const tBody = table.createTBody();

    for (const sourceRow of sourceTable.rows) {
        const section = sourceRow.parentElement.tagName === 'THEAD' ? tHead : tBody;
        const tr = section.insertRow();

        for (const sourceCell of sourceRow.cells) {
            const cell = document.createElement(sourceCell.tagName === 'TH' ? 'th' : 'td');
            cell.textContent = textOf(sourceCell);
            if (sourceCell.colSpan > 1) cell.colSpan = sourceCell.colSpan;
            if (sourceCell.rowSpan > 1) cell.rowSpan = sourceCell.rowSpan;
            tr.appendChild(cell);
        }
    }

    return table;
}
