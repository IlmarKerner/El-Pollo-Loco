class Coin extends MovableObject {
    height = 70;
    width = 70;
    // y = 100;

    offset = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
    }

    IMAGES_WALKING = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 100 + Math.random() * 4000;
        this.y = 100 + Math.random() * 150;
        this.animate();
    }

    animate() {
        let coinInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 150);
        intervalIDs.push(coinInterval);
    }
}