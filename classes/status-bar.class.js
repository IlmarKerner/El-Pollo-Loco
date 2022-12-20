class StatusBar extends DrawableObject {

    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png'
    ]

    percent_health = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 10;
        this.y = 0;
        this.width = 120;
        this.height = 30;
        this.setPercentHealth(100);

    }

    setPercentHealth(percent_health) {
        this.percent_health = percent_health; // => 0 und 5 ermitteln
        let path = this.IMAGES_HEALTH[this.healthIndex()];
        this.img = this.imageCache[path];
    }

    healthIndex() {
        if (this.percent_health == 100) {
            return 0;
        } else if (this.percent_health > 80) {
            return 1;
        } else if (this.percent_health > 60) {
            return 2;
        } else if (this.percent_health > 40) {
            return 3;
        } else if (this.percent_health > 20) {
            return 4;
        } else {
            return 5;
        }
    }
}