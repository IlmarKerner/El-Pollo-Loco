let canvas;
let world;
let keyboard = new Keyboard();

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

    if (e.keyCode == 83) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 69) {
        keyboard.E = true;
    }

    if (e.keyCode == 13) {
        keyboard.ENTER = true;
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
});