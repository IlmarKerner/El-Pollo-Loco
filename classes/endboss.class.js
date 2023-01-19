class Endboss extends MovableObject {

    bossEnergy = 30;
    width = 300;
    height = 500;
    y = -30;
    world;
    firstContact = false;
    bossFirstAttack = false;
    bossSecondAttack = false;
    bossDeadtimer = 0;
    hurtBoss = 0;
    hurtBossSecondTime = 0;
    backgroundSound = false;

    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    IMAGES_ALLERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ]

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ]

    IMAGES_HURT_BOSS = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ]

    IMAGES_DEAD_BOSS = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ]

    constructor(world) {

        super().loadImage(this.IMAGES_ALLERT[0]);
        this.loadImages(this.IMAGES_ALLERT);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT_BOSS);
        this.loadImages(this.IMAGES_DEAD_BOSS);
        this.speed = 15;
        this.x = 4500;
        this.world = world;
        setTimeout(() => {
            this.animate();
        }, 3000);

    }
    animate() {
        let bossInterval = setInterval(() => {
            let distanceLeft = this.x - this.world.character.x; // distanceLeft entspricht der Distanz, wenn der Character links vom Boss ist
            let distanceRight = this.world.character.x - this.x; // distanceRight entspricht der Distanz, wenn der Character rechts vom Boss ist
            this.handleSound(distanceLeft, distanceRight);
            if (this.bossEnergy == 30) {
                this.movementAtEnergy30(distanceLeft, distanceRight);
            }
            if (this.bossEnergy == 20) {
                this.movementAtEnergy20(distanceLeft, distanceRight);
            }
            if (this.bossEnergy == 10) {
                this.movementAtEnergy10(distanceLeft, distanceRight);
            }
            if (this.bossEnergy == 0 && this.bossDeadtimer < 15) {
                this.endbossDead();
            }
        }, 100);
        intervalIDs.push(bossInterval);
    }

    handleSound(distanceLeft, distanceRight) {
        if (distanceLeft < 1000 || distanceLeft < 1000 && this.bossFirstAttack) {
            if (!mutedSound) {
                audio_background.pause();
                audio_bossAttack.play();
            }
        }
        if (distanceLeft > 1500 || distanceRight > 1500 && this.bossFirstAttack) {
            if (!mutedSound) {
                audio_background.play();
                audio_bossAttack.pause();
            }
        }
    }

    movementAtEnergy30(distanceLeft, distanceRight) {
        if (distanceLeft < 500 && distanceLeft > 200) {
            this.playAnimation(this.IMAGES_WALK);
            this.moveLeft();
        }
        if (distanceRight < 500 && distanceRight > 500) {
            this.playAnimation(this.IMAGES_WALK);
            this.moveRight();
            this.otherDirection = true;
        }
        if (distanceLeft < 300 && distanceLeft > -50) { // Wenn der Character links vom Boss ist und innerhalb von 400px
            this.firstContact = true;
            this.moveLeft(); // Bewegen in Richtung des Characters
            this.playAnimation(this.IMAGES_ATTACK);
            this.otherDirection = false;
        } else if (distanceRight < 500 && distanceRight > 0) { // Wenn der Character rechts vom Boss ist und innerhalb von 400px
            this.firstContact = true;
            this.moveRight(); // Bewegen in Richtung des Characters
            this.playAnimation(this.IMAGES_ATTACK);
            this.otherDirection = true;
        }
    }

    movementAtEnergy20(distanceLeft, distanceRight) {
        if (!this.bossFirstAttack && this.hurtBoss < 10) {
            this.speed = 0;
            this.playAnimation(this.IMAGES_HURT_BOSS);
            if (this.hurtBoss == 7) {
                this.bossFirstAttack = true;
            }
        } else
        if (distanceLeft < 800 && distanceLeft > 200 && this.bossFirstAttack && this.hurtBoss >= 10) {
            this.playAnimation(this.IMAGES_WALK);
            this.moveLeft();
        }
        if (distanceRight < 800 && distanceRight > 200 && this.hurtBoss >= 10) {
            this.playAnimation(this.IMAGES_WALK);
            this.moveRight();
            this.otherDirection = true;
        }
        if (distanceLeft < 200 && distanceLeft > -50 && this.hurtBoss >= 10) { // Wenn der Character links vom Boss ist und innerhalb von 400px
            this.moveLeft(); // Bewegen in Richtung des Characters
            this.playAnimation(this.IMAGES_ATTACK);
            this.otherDirection = false;
        } else if (distanceRight < 200 && distanceRight > 0 && this.hurtBoss >= 10) { // Wenn der Character rechts vom Boss ist und innerhalb von 400px
            this.moveRight(); // Bewegen in Richtung des Characters
            this.playAnimation(this.IMAGES_ATTACK);
            this.otherDirection = true;
        }
        this.speed = 30;
        this.hurtBoss++;
    }

    movementAtEnergy10(distanceLeft, distanceRight) {
        if (!this.bossSecondAttack && this.hurtBossSecondTime < 10) {
            this.speed = 0;
            this.playAnimation(this.IMAGES_HURT_BOSS);
            if (this.hurtBossSecondTime == 7) {
                this.bossSecondAttack = true;
            }
        } else
        if (distanceLeft < 600 && distanceLeft > 200 && this.bossSecondAttack == true) {
            this.playAnimation(this.IMAGES_WALK);
            this.moveLeft();
        }
        if (distanceRight < 500 && distanceRight > 500) {
            this.playAnimation(this.IMAGES_WALK);
            this.moveRight();
            this.otherDirection = true;
        }
        if (distanceLeft < 300 && distanceLeft > -50) { // Wenn der Character links vom Boss ist und innerhalb von 400px
            this.moveLeft(); // Bewegen in Richtung des Characters
            this.playAnimation(this.IMAGES_ATTACK);
            this.otherDirection = false;
        } else if (distanceRight < 500 && distanceRight > 0) { // Wenn der Character rechts vom Boss ist und innerhalb von 400px
            this.moveRight(); // Bewegen in Richtung des Characters
            this.playAnimation(this.IMAGES_ATTACK);
            this.otherDirection = true;
        }
        this.speed = 40;
        this.hurtBossSecondTime++;
    }

    endbossDead() {
        this.speed = 0;
        this.playAnimation(this.IMAGES_DEAD_BOSS);
        this.bossDeadtimer++;
        if (!mutedSound) {
            audio_win.play();
        }
        if (this.backgroundSound) {
            audio_background.pause();
            audio_bossAttack.pause();
        }
        this.backgroundSound = true;
        stopGame();
    }
}