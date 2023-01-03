class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    flyingBottles;
    coins;
    endboss;
    level_end_x = 700 * 4;

    constructor(enemies, endboss, clouds, backgroundObjects, bottles, flyingBottles, coins) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.flyingBottles = flyingBottles;
        this.coins = coins;

    }
}