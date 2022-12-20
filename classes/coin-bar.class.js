class Coinbar extends DrawableObject {
    percent_coins = 0;

    IMAGES_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x = 250;
        this.y = 0;
        this.width = 120;
        this.height = 30;
        this.setPercentCoins(0);
    }

    setPercentCoins(percent_coins) {
        this.percent_coins = percent_coins;
        let path = this.IMAGES_COINS[this.coinIndex()];
        this.img = this.imageCache[path];
    }

    coinIndex() {
        if (this.percent_coins == 5) {
            return 5;
        } else if (this.percent_coins == 4) {
            return 4;
        } else if (this.percent_coins == 3) {
            return 3;
        } else if (this.percent_coins == 2) {
            return 2;
        } else if (this.percent_coins == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}