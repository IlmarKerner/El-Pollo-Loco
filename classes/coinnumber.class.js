class Coinimage extends DrawableObject {
    IMAGE_COIN = [
        'img/8_coin/coin_2.png',
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGE_COIN);
        this.x = 0;
        this.y = 60;
        this.height = 40;
        this.width = 40;
        this.setCoin(0);
    }

    coin = 0;

    setCoin(coin) {
        this.coin = coin;
        let path = this.IMAGE_COIN[0]
        this.img = this.imageCache[path];
    }
}