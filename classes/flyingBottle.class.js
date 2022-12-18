class FlyingBottle extends MovableObject {
    height = 70;
    width = 70;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 200;
        this.x = x;
    }
}