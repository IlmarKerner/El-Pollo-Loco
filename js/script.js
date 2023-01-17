function fullscreen() {
    let fullscreen = document.getElementById('el-pollo-loco');
    enterFullscreen(fullscreen);
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
}