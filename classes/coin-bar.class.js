class Coinbar extends DrawableObject {
    number_of_coins = 0;

    NUMBER_COINS = [
        'img/11_numbers/number-0.png',
        'img/11_numbers/number-1.png',
        'img/11_numbers/number-2.png',
        'img/11_numbers/number-3.png',
        'img/11_numbers/number-4.png',
        'img/11_numbers/number-5.png',
        'img/11_numbers/number-6.png',
        'img/11_numbers/number-7.png',
        'img/11_numbers/number-8.png',
        'img/11_numbers/number-9.png',
        'img/11_numbers/number-10.png',
        'img/11_numbers/number-11.png',
        'img/11_numbers/number-12.png',
        'img/11_numbers/number-13.png',
        'img/11_numbers/number-14.png',
        'img/11_numbers/number-15.png',
        'img/11_numbers/number-16.png',
        'img/11_numbers/number-17.png',
        'img/11_numbers/number-18.png',
        'img/11_numbers/number-19.png',
        'img/11_numbers/number-20.png',
    ]

    constructor() {
        super();
        this.loadImages(this.NUMBER_COINS);
        this.x = 40;
        this.y = 70;
        this.width = 20;
        this.height = 20;
        this.setPercentCoins(0);
    }

    setPercentCoins(number_of_coins) {
        this.number_of_coins = number_of_coins;
        let path = this.NUMBER_COINS[this.coinIndex()];
        this.img = this.imageCache[path];
    }

    coinIndex() {
        return this.number_of_coins;
    }
}