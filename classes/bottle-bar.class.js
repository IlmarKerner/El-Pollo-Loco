class Bottlebar extends DrawableObject {

    percent_bottle = 0;

    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/salsa_bottle.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 0;
        this.y = 30;
        this.width = 40;
        this.height = 40;
        this.setPercentBottles(0);
    }

    setPercentBottles(percent_bottle) {
        this.percent_bottle = percent_bottle;
        let path = this.IMAGES_BOTTLE[this.bottleIndex()];
        this.img = this.imageCache[path];
    }

    bottleIndex() {
        if (this.percent_bottle == 5) {
            return 0;
        } else if (this.percent_bottle == 4) {
            return 0;
        } else if (this.percent_bottle == 3) {
            return 0;
        } else if (this.percent_bottle == 2) {
            return 0;
        } else if (this.percent_bottle == 1) {
            return 0;
        } else {
            return 0;
        }
    }
}