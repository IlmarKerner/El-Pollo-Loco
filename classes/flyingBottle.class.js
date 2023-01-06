class FlyingBottle extends MovableObject {
    height = 70;
    width = 70;

    offset = {
        top: 0,
        bottom: 0,
        left: 20,
        right: 20
    }

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 200;
        this.x = x;
    }
}