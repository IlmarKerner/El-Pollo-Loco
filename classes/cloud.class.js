class Cloud extends MovableObject {
    y = 30;
    height = 300;
    width = 600;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = 200 + Math.random() * 700; // Zahl zwischen 200 und 700(bei der Funktion random ist eine Zahl nur zwischen 0 und 1)
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

    }
}