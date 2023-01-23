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
        return this.number_of_bottles;
    }
}