class ThrowBottle extends MovableObject {
    collided = false;

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

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_DAMAGED_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.throw(this.x, this.y);
    }

    throw () {
        this.speedY = 30;
        this.speedX = 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
            this.speedY -= 1;
        }, 1000 / 60);

        if (this.hitEndboss()) {
            this.splashBottle();
            console.log('klappt');
        } else {
            this.animate();
        };



        // if (this.hitChicken() && this.hitEndboss()) {
        //     this.splashBottle();
        // }
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 1000 / 40);
    }

    splashBottle() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_DAMAGED_BOTTLE);
        }, 100);
    }
}