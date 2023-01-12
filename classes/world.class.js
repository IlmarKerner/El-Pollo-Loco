class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    cooldownTime = false;
    hitEndboss = false;
    characterGetHitet = false;
    characterGetHitetByEndboss = false;

    healthbar = new StatusBar();
    coinbar = new Coinbar();
    bottlebar = new Bottlebar();
    throwBottle = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.level.endboss[0].world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisionsWithCoins();
            this.checkThorwObjectsRight();
            this.checkThorwObjectsLeft();
            this.checkCollisionsWithBottles();
            this.checkCollisionsWithFlyingBottles();
            // this.endscreen();
            this.hitEnemy();
            this.hitEnemyFromTheTop();
            this.hitLittleChicken();
            this.hitLittleChickenFromTheTop();
            this.hitBosschicken();
        }, 100);
        setInterval(() => {
            this.checkCollisionsWithChicken();
            this.checkCollisionsWithEndboss();
            this.checkCollisionsWithLitteChicken();
        }, 500);
    }


    // wirft die Flachen nach Rechts
    checkThorwObjectsRight() {
        if (this.keyboard.E && this.character.bottle > 0 && this.cooldownTime == false) {
            this.audio_throw_bottle.play();
            let bottle = new ThrowBottle(this.character.x + 50, this.character.y + 100, this.character.otherDirection);
            this.throwBottle.push(bottle);
            this.bottlebar.setPercentBottles(this.character.bottle -= 1);
            this.cooldownTime = true;
            this.otherDirection = true;
            setTimeout(() => {
                this.cooldownTime = false;
            }, 1000);
        }
    }

    // wirft die Flaschen nach Links
    checkThorwObjectsLeft() {
        if (this.keyboard.E && this.character.bottle > 0 && this.cooldownTime == false) {
            this.audio_throw_bottle.play();
            let bottle = new ThrowBottle(this.character.x + 0, this.character.y + 100);
            this.throwBottle.push(bottle);
            this.bottlebar.setPercentBottles(this.character.bottle -= 1);
            this.cooldownTime = true;
            this.otherDirection = false;
            setTimeout(() => {
                this.cooldownTime = false;
            }, 1000);
        }
    }

    checkCollisionsWithChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isInAir() && this.characterGetHitet == false) {
                this.character.hit();
                this.healthbar.setPercentHealth(this.character.energy);
                this.characterGetHitet = true;
            }
        });
    }

    checkCollisionsWithLitteChicken() {
        this.level.littlechicken.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isInAir() && this.characterGetHitet == false) {
                this.character.hit();
                this.healthbar.setPercentHealth(this.character.energy);
                this.characterGetHitet = true;
            }
        });
    }

    checkCollisionsWithEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss) && this.characterGetHitetByEndboss == false) {
                this.character.hit();
                this.character.hitCharacterWithEndbossAndChicken();
                this.healthbar.setPercentHealth(this.character.energy);
                this.characterGetHitetByEndboss = true;
            }
        });
    }

    checkCollisionsWithCoins() {
        this.level.coins.forEach((coin, i) => {
            if (this.character.isColliding(coin)) {
                this.character.coinHit();
                this.coinbar.setPercentCoins(this.character.coin);
                this.level.coins.splice(i, 1);
                this.audio_coin.play();
            }
        });
    }

    checkCollisionsWithBottles() {
        this.level.bottles.forEach((bottle, i) => {
            if (this.character.isColliding(bottle)) {
                this.character.bottleHit();
                this.bottlebar.setPercentBottles(this.character.bottle);
                this.level.bottles.splice(i, 1);
                this.audio_bottle.play();
            }
        });
    }

    checkCollisionsWithFlyingBottles() {
        this.level.flyingBottles.forEach((bottle, i) => {
            if (this.character.isColliding(bottle)) {
                this.character.bottleHit();
                this.bottlebar.setPercentBottles(this.character.bottle);
                this.level.flyingBottles.splice(i, 1);
                this.audio_bottle.play();
            }
        });
    }

    hitEnemy() {
        this.level.enemies.forEach((enemies, i) => {
            this.throwBottle.forEach((throwBottle) => {
                if (throwBottle.isColliding(enemies)) {
                    enemies.hitChicken();
                    this.audio_hit_bottle.play();
                    setTimeout(() => {
                        this.level.enemies.splice(i, 1);
                    }, 500);
                }
            });
        });
    }

    hitEnemyFromTheTop() {
        this.level.enemies.forEach((enemies, i) => {
            if (this.character.isColliding(enemies) && this.character.isInAir()) {
                enemies.hitChicken();
                this.character.jump();
                setTimeout(() => {
                    this.level.enemies.splice(i, 1);
                }, 500);
            }
        });
    }

    hitLittleChicken() {
        this.level.littlechicken.forEach((littlechicken, i) => {
            this.throwBottle.forEach((throwBottle) => {
                if (throwBottle.isColliding(littlechicken)) {
                    littlechicken.hitLittleChicken();
                    this.audio_hit_bottle.play();
                    setTimeout(() => {
                        this.level.littlechicken.splice(i, 1);
                    }, 500);
                }
            });
        });
    }

    hitLittleChickenFromTheTop() {
        this.level.littlechicken.forEach((littlechicken, i) => {
            if (this.character.isColliding(littlechicken) && this.character.isInAir()) {
                littlechicken.hitLittleChicken();
                this.character.jump();
                setTimeout(() => {
                    this.level.littlechicken.splice(i, 1);
                }, 500);
            }
        });
    }

    hitBosschicken() {
        this.level.endboss.forEach((endboss) => {
            this.throwBottle.forEach((throwBottle) => {
                if (throwBottle.isColliding(endboss) && this.hitEndboss == false) {
                    this.hitEndboss = true;
                    endboss.hitEndboss();
                    this.audio_hit_bottle.play();
                    setTimeout(() => {
                        this.hitEndboss = false;
                    }, 1000);
                }
            });
        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthbar);
        this.addToMap(this.coinbar);
        this.addToMap(this.bottlebar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.flyingBottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.endboss);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.littlechicken);

        this.addObjectsToMap(this.throwBottle);
        // this.addObjectsToMap(this.splashBottle);
        this.ctx.translate(-this.camera_x, 0);
        self = this;
        requestAnimationFrame(function() {
            self.draw()
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}