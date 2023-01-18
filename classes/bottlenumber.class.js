class Bottleimage extends DrawableObject {
    IMAGE_BOTTLE = [
        'img/6_salsa_bottle/salsa_bottle.png',
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGE_BOTTLE);
        this.x = 0;
        this.y = 30;
        this.height = 40;
        this.width = 40;
        this.setBottle(0);
    }

    bottle = 0;

    setBottle(bottle) {
        this.bottle = bottle;
        let path = this.IMAGE_BOTTLE[0]
        this.img = this.imageCache[path];
    }
}