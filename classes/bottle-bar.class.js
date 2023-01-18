class Bottlebar extends DrawableObject {

    number_of_bottles = 0;

    IMAGES_BOTTLE = [
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
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 40;
        this.y = 40;
        this.width = 20;
        this.height = 20;
        this.setPercentBottles(0);
    }

    setPercentBottles(number_of_bottles) {
        this.number_of_bottles = number_of_bottles;
        let path = this.IMAGES_BOTTLE[this.bottleIndex()];
        this.img = this.imageCache[path];
    }

    bottleIndex() {
        if (this.number_of_bottles == 0) {
            return 0;
        } else if (this.number_of_bottles == 1) {
            return 1;
        } else if (this.number_of_bottles == 2) {
            return 2;
        } else if (this.number_of_bottles == 3) {
            return 3;
        } else if (this.number_of_bottles == 4) {
            return 4;
        } else if (this.number_of_bottles == 5) {
            return 5;
        } else if (this.number_of_bottles == 6) {
            return 6;
        } else if (this.number_of_bottles == 7) {
            return 7;
        } else if (this.number_of_bottles == 8) {
            return 8;
        } else if (this.number_of_bottles == 9) {
            return 9;
        } else if (this.number_of_bottles == 10) {
            return 10;
        } else if (this.number_of_bottles == 11) {
            return 11;
        } else if (this.number_of_bottles == 12) {
            return 12;
        } else if (this.number_of_bottles == 13) {
            return 13;
        } else if (this.number_of_bottles == 14) {
            return 14;
        } else if (this.number_of_bottles == 15) {
            return 15;
        } else if (this.number_of_bottles == 16) {
            return 16;
        } else if (this.number_of_bottles == 17) {
            return 17;
        } else if (this.number_of_bottles == 18) {
            return 18;
        } else if (this.number_of_bottles == 19) {
            return 19;
        } else if (this.number_of_bottles == 20) {
            return 20;
        }
    }
}