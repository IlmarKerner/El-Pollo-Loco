class Endboss extends MovableObject {

    width = 300;
    height = 500;
    y = -30;
    world;
    firstContact = false;

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
        this.speed = 10;
        this.x = 4000;
        this.world = world;
        setTimeout(() => {
            this.animate();
        }, 3000);

    }

    angryBoss = true;

    animate() {
        let i = 0;
        setInterval(() => {
            if (i < 10) {
                this.playAnimation(this.IMAGES_ALLERT)
            }
            if (this.world.character.x > 200) {
                this.bossReactToCharacterDistance();
            }
        }, 150);
    }

    bossReactToCharacterDistance() {
        let i = 0;
        this.bossAttack = false;

        setInterval(() => {
            if (i < 10 && this.world.character.x > 100) {

                this.moveLeft();
                this.playAnimation(this.IMAGES_WALK);
                this.playAnimation(this.IMAGES_ATTACK);
                this.otherDirection = false;
                this.bossAttack = true
            }
            // else if (this.world.character.x > -500) {
            //     this.playAnimation(this.IMAGES_WALK);
            //     this.moveRight();
            //     this.otherDirection = true;
            //     this.playAnimation(this.IMAGES_ATTACK);
            //     this.bossAttack = false;
            // }
            // if (this.world.character.x < 30 && !this.bossIsDead()) {
            //     this.playAnimation(this.IMAGES_ATTACK);
            // }
            // if (this.bossEnergy == 20 && !this.angryBoss && !this.bossIsDead()) {
            //     this.playAnimation(this.IMAGES_HURT_BOSS);
            //     setTimeout(() => {
            //         this.moveLeft();
            //         this.playAnimation(this.IMAGES_ATTACK)
            //     }, 1500);
            // } else if (this.bossEnergy == 10 && !this.angryBoss && !this.bossIsDead()) {
            //     this.playAnimation(this.IMAGES_HURT_BOSS);
            //     this.speed = 0;
            //     setTimeout(() => {
            //         this.speed = 30;
            //         this.moveRight();
            //         this.otherDirectionEndboss();
            //         this.playAnimation(this.IMAGES_WALK);
            //         this.playAnimation(this.IMAGES_ATTACK);
            //         this.angryBoss = false;
            //     }, 1500);
            // }

            i++;
            if (this.world.character.x > 2800 && !this.firstContact && !this.bossIsDead()) {
                this.firstContact = true;
                i = 0;
            }

            if (this.bossEnergy == 0) {
                this.speed = 0;
                this.playAnimation(this.IMAGES_DEAD_BOSS);
            }
        }, 150);
    }

    otherDirectionEndboss() {
        this.otherDirection = true;
    }

    animateBossAllert() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ALLERT);
        }, 150);
    }

    animateBossWalk() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 150);
    }

    animateBossAttack() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ATTACK);
        }, 150);
    }

    animateHurtBoss() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HURT_BOSS);
        }, 150);
    }

    animateDeadBoss() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD_BOSS);
        }, 150);
    }
}