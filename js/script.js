function fullscreen() {
    let fullscreen = document.getElementById('el-pollo-loco');
    enterFullscreen(fullscreen);
    document.getElementById('leaveFullscreen').classList.remove('d-none');
    document.getElementById('fullscreen').classList.add('d-none');
    document.getElementById('startscreen').classList.add('fullscreen-mode');
    document.getElementById('startscreen').classList.remove('start');
    document.getElementById('leaveFullscreen').classList.add('filter-invert');
    document.getElementById('gameplay').classList.add('filter-invert');
    document.getElementById('canvas').style = "height: auto";
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

function leaveFullscreen() {
    let leaveFullscreen = document.getElementById('el-pollo-loco');
    exitFullscreen(leaveFullscreen);
    document.getElementById('leaveFullscreen').classList.add('d-none');
    document.getElementById('fullscreen').classList.remove('d-none');
    document.getElementById('startscreen').classList.remove('fullscreen-mode');
    document.getElementById('startscreen').classList.add('start');
    document.getElementById('leaveFullscreen').classList.remove('filter-invert');
    document.getElementById('gameplay').classList.remove('filter-invert');
    document.getElementById('canvas').style = "height: 100%";
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitRequestFullscreen) {
        document.webkitRequestFullscreen();
    }
}

function showGameplay() {
    document.getElementById('gameplayWindow').classList.remove('d-none');
}

function goBack() {
    document.getElementById('gameplayWindow').classList.add('d-none');
    startIntervals();
}

function endscreen() {
    document.getElementById('endscreen').classList.remove('d-none');
    document.getElementById('mobileButtons').classList.add('d-none');
}

function restartGame() {
    window.location.reload();
    document.getElementById('endscreen').classList.add('d-none');
}