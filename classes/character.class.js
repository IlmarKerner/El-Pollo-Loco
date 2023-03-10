class Character extends MovableObject {
    world;
    speed = 7.5;
    y = 75;
    backgroundSound = false;

    offset = {
        top: 120,
        bottom: 10,
        left: 40,
        right: 30,
    }

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ]

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ]

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ]

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ]

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ]

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.applyGravity();
    }


    animate() {
        let characterReactionInterval = setInterval(() => { //move character
            // this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                if (!mutedSound) {
                    walking_sound.play();
                }
                this.otherDirection = false;
            } else {
                walking_sound.pause();
            }
            if (this.world.keyboard.LEFT && this.x > -600) {
                this.moveLeft();
                if (!mutedSound) {
                    walking_sound.play();
                }
                this.otherDirection = true;
            }
            if (this.world.keyboard.SPACE && !this.isInAir()) {
                this.jump();
                if (!mutedSound) {
                    jumping_sound.play();
                }
            }
            this.world.camera_x = -this.x + 80;
        }, 1000 / 40);

        let characterAnimationInterval = setInterval(() => { //walk Animation
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                if (!mutedSound) {
                    audio_lose.play();
                }
                if (this.backgroundSound) {
                    audio_background.pause();
                    audio_bossAttack.pause();
                }
                this.backgroundSound = true;
                stopGame();
                setTimeout(() => {
                    endscreen();
                }, 500);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT)
                if (!mutedSound) {
                    audio_hurt.play();
                }
            } else if (this.isInAir()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 100);
        intervalIDs.push(characterAnimationInterval, characterReactionInterval);
    }
}