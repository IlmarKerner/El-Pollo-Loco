class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    coin = 0;
    bottle = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isInAir() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                // this.walking_sound.pause();
            }

        }, 1000 / 60);
    }

    isInAir() {
        if ((this instanceof ThrowBottle)) { // geworfene objekte sollen immer fallen
            return true;
        } else {
            return this.y < 180;
        }
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;

    };

    playAnimation(images) {
        let i = this.currentImage % images.length; //let i = 0 % 6; (Modulu)
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 20;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    hit() {
        this.energy -= 1;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    coinHit() {
        this.coin += 1;
        if (this.coin <= 0) {
            this.coin = 0
        } else {
            this.lastCoinHit = new Date().getTime();
        }
    }

    bottleHit() {
        this.bottle += 1;
        if (this.bottle <= 0) {
            this.bottle = 0;
        } else {
            this.lastBottleHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Differenz in Millisekunden
        timepassed = timepassed / 1000; //Teilung durch 1000 ergibt Sekunden
        return timepassed < 0.1;
    }
}