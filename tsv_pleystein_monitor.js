function getSponsorId() {
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('sponsorId')) {
        return this.getNextSponsorParam(urlParams.get('sponsorId'));
    } else {
        return '1'
    }
}

function getNextSponsorParam(currentSponsorId) {
    if (currentSponsorId === '1') {
        return '2';
    } else {
        return '1';
    }
}
