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

    if (_currentSponsorId >= 7) {
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
