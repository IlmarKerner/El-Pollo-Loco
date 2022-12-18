class Bottlebar extends DrawableObject {

    percent_bottle = 0;

    IMAGES_BOTTLE = [
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
        this.x = 160;
        this.y = 0;
        this.width = 150;
        this.height = 30;
        this.setPercentBottles(0);
    }

    setPercentBottles(percent_bottle) {
        this.percent_bottle = percent_bottle;
        let path = this.IMAGES_BOTTLE[this.bottleIndex()];
        this.img = this.imageCache[path];
    }

    bottleIndex() {
        if (this.percent_bottle == 5) {
            return 5;
        } else if (this.percent_bottle == 4) {
            return 4;
        } else if (this.percent_bottle == 3) {
            return 3;
        } else if (this.percent_bottle == 2) {
            return 2;
        } else if (this.percent_bottle == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}