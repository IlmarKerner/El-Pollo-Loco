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
        if (this.number_of_coins == 0) {
            return 0;
        } else if (this.number_of_coins == 1) {
            return 1;
        } else if (this.number_of_coins == 2) {
            return 2;
        } else if (this.number_of_coins == 3) {
            return 3;
        } else if (this.number_of_coins == 4) {
            return 4;
        } else if (this.number_of_coins == 5) {
            return 5;
        } else if (this.number_of_coins == 6) {
            return 6;
        } else if (this.number_of_coins == 7) {
            return 7;
        } else if (this.number_of_coins == 8) {
            return 8;
        } else if (this.number_of_coins == 9) {
            return 9;
        } else if (this.number_of_coins == 10) {
            return 10;
        } else if (this.number_of_coins == 11) {
            return 11;
        } else if (this.number_of_coins == 12) {
            return 12;
        } else if (this.number_of_coins == 13) {
            return 13;
        } else if (this.number_of_coins == 14) {
            return 14;
        } else if (this.number_of_coins == 15) {
            return 15;
        } else if (this.number_of_coins == 16) {
            return 16;
        } else if (this.number_of_coins == 17) {
            return 17;
        } else if (this.number_of_coins == 18) {
            return 18;
        } else if (this.number_of_coins == 19) {
            return 19;
        } else if (this.number_of_coins == 20) {
            return 20;
        }
    }
}