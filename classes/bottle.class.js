class Bottle extends MovableObject {

    height = 70;
    width = 70;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 360;
        this.x = x;
    }
}