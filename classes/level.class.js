class Level {
    enemies;
    littlechicken;
    clouds;
    backgroundObjects;
    bottles;
    flyingBottles;
    coins;
    endboss;
    level_end_x = 700 * 7;

    constructor(enemies, littlechicken, endboss, clouds, backgroundObjects, bottles, flyingBottles, coins) {
        this.enemies = enemies;
        this.littlechicken = littlechicken;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.flyingBottles = flyingBottles;
        this.coins = coins;
    }
}