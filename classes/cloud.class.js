class Cloud extends MovableObject {
    y = 30;
    height = 300;
    width = 600;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = 50 + Math.random() * 6000; // Zahl zwischen 200 und 700(bei der Funktion random ist eine Zahl nur zwischen 0 und 1)
        this.animate();
    }

    animate() {
        let cloudInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        intervalIDs.push(cloudInterval)
    }
}