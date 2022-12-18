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
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.throw();


    }

    throw () {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 1000 / 60);

        this.animate();
        if (this.otherDirection) {
            this.throwLeft();

        } else {
            // this.throwRight();
        }
    }

    throwLeft() {
        setInterval(() => {
            if (!this.collided) {
                this.x -= this.speedX;
                this.animation(this.IMAGES_BOTTLE);
            } else {
                this.splash();
            }
        }, 1000 / 25);
    }

    // throwRight() {
    //     setInterval(() => {
    //         if (!this.collided) {
    //             this.x += this.speedX;
    //             this.animation(this.IMAGES_BOTTLE);
    //         } else {
    //             this.splash();
    //         }
    //     }, 1000 / 25);
    // }

    // splash() {
    //     this.x += this.speedX;
    //     this.singleAnimation(this.IMAGES_DAMAGED_BOTTLE);
    // }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 150);
    }
}