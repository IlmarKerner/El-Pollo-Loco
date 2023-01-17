class Coinimage extends DrawableObject {
    IMAGE_COIN = [
        'img/8_coin/coin_2.png',
    ]

    height = 70;
    width = 70;

    constructor() {
        super();
        this.loadImages(this.IMAGE_COIN);
        this.x = 0;
        this.y = 60;
    }

}