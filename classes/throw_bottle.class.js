class ThrowBottle extends MovableObject {
    collided = false;
    world;
    bottleAnimation = false;

    offset = {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    }

    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    IMAGES_DAMAGED_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_DAMAGED_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.otherDirection = otherDirection;
        if (this.otherDirection == false) {
            this.throwRight();
        } else {
            this.throwLeft();
        }
        this.animate();
    }

    throwRight() {
        this.speedY = 20;
        this.speedX = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 1000 / 60);
        this.otherDirection = false;
    }


    throwLeft() {
        this.speedY = 20;
        this.speedX = -10;
        this.applyGravity();
        setInterval(() => {
            this.x -= 10;
        }, 1000 / 60);
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 1000 / 20);

    }

    splashBottle() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_DAMAGED_BOTTLE);
        }, 100);
    }
}