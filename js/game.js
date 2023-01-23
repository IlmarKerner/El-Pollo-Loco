let canvas;
let world;
let keyboard = new Keyboard();
let intervalIDs = [];
let gameIsFinish = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    setTimeout(() => {
            document.getElementById('shot').classList.remove('d-none')
        },
        300);
    setTimeout(() => {
            document.getElementById('startscreen').classList.add('d-none');
        },
        2000);
    mobileButtons();
    document.getElementById('gameplay').classList.add('d-none');
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 68) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 65) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 83) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 69) {
        keyboard.E = true;
    }

    if (e.keyCode == 13) {
        keyboard.ENTER = true;
    }

    if (e.keyCode == 27) {
        keyboard.ESC = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 68) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 65) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 83) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 69) {
        keyboard.E = false;
    }

    if (e.keyCode == 13) {
        keyboard.ENTER = false;
    }
    if (e.keyCode == 27) {
        keyboard.ESC = false;
    }
});

function mobileButtons() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
        document.getElementById('btnLeft').classList.add('filter-invert');
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
        document.getElementById('btnLeft').classList.remove('filter-invert');
    });

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
        document.getElementById('btnRight').classList.add('filter-invert');
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
        document.getElementById('btnRight').classList.remove('filter-invert');
    });

    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
        document.getElementById('btnJump').classList.add('filter-invert');
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
        document.getElementById('btnJump').classList.remove('filter-invert');
    });

    document.getElementById('btnThrowBottle').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.E = true;
        document.getElementById('btnThrowBottle').classList.add('filter-invert');
    });

    document.getElementById('btnThrowBottle').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.E = false;
        document.getElementById('btnThrowBottle').classList.remove('filter-invert');
    });
}

function stopGame() {
    setTimeout(() => {
        for (let i = 0; i < intervalIDs.length; i++) {
            const id = intervalIDs[i];
            clearInterval(id);
        }
    }, 500);
}

function startIntervals() {
    intervalIDs.forEach((id) => {
        setInterval(id);
    });
}