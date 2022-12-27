class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    healthbar = new StatusBar();
    coinbar = new Coinbar();
    bottlebar = new Bottlebar();
    throwBottle = [];
    audio_coin = new Audio('../audio/coin.mp3');
    audio_bottle = new Audio('../audio/bottle.mp3');
    audio_throw_bottle = new Audio('../audio/flyingBottles.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run(); //vorher "checkCollisions()"
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisionsWithCoins();
            this.checkCollisions();
            this.checkThorwObjects();
            this.checkCollisionsWithBottles();
            this.checkCollisionsWithFlyingBottles();
        }, 100);
    }

    checkThorwObjects() {
        if (this.keyboard.E) {
            this.audio_throw_bottle.play();
            let bottle = new ThrowBottle(this.character.x + 50, this.character.y + 100);
            this.throwBottle.push(bottle);
            this.bottlebar.setPercentBottles(this.character.bottle -= 1);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.healthbar.setPercentHealth(this.character.energy);
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
                console.log(this.character.bottle)
                this.audio_bottle.play();
            }
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
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwBottle);
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
        // try {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
        // } catch (e) {
        //     console.warn('Error loading Image', e)
        //     console.log('konnte nicht geladen werden',
        //         mo.img.src)
        // }
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