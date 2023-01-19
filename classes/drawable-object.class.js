class DrawableObject {
    x = 30;
    y = 180;
    width = 130;
    height = 250;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image(); //ist wie das img-tag -> this.img = document.getElementById('image'); <img id="image">
        this.img.src = path;
    }

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.log('Konnte nicht geladen werden', this.img.src)
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}