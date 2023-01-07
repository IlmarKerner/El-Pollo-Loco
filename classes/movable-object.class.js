class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    coin = 0;
    bottle = 0;
    chickenEnergy = 10;
    bossEnergy = 30;
    walking_sound = new Audio('audio/walk.mp3');
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }

    applyGravity() {
        setInterval(() => {
            if (this.isInAir() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
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
        if (!this.isDead()) {
            this.x += this.speed;
        }
    }

    moveLeft() {
        if (!this.isDead()) {
            this.x -= this.speed;
        }
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

    // isColliding(mo) {
    //     return this.x + this.width > mo.x &&
    //         this.y + this.height > mo.y &&
    //         this.x < mo.x + mo.width &&
    //         this.y < mo.y + mo.height;
    // }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    hit() {
        this.energy -= 10;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitChicken() {
        this.chickenEnergy -= 10;
        if (this.chickenEnergy <= 0) {
            this.chickenEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitEndboss() {
        this.bossEnergy -= 10;
        if (this.bossEnergy <= 0) {
            this.bossEnergy = 0;
        } else if (this.bossEnergy > 0) {
            this.lastHit = new Date().getTime();
        }

    }

    hitCharacterWithEndbossAndChicken() {
        this.bossEnergy -= 5;
        if (this.bossEnergy <= 0) {
            this.bossEnergy = 0;
        } else if (this.bossEnergy > 0) {
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

    // bossReactToCharacterDistance() {
    //     if (!this.isDead() && this.world.character.x <= 500 && !this.isHurt()) {
    //         this.firstContact = true;
    //     }
    // }
}