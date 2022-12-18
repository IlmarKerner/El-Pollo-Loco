class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    flyingBottles;
    coins;
    level_end_x = 700 * 4;

    constructor(enemies, clouds, backgroundObjects, bottles, flyingBottles, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.flyingBottles = flyingBottles;
        this.coins = coins;
    }
}