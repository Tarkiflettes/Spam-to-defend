import { Container } from "pixi.js"

export abstract class Element extends Container {

    protected life: number = 100;

    constructor() {
        super();

        this.interactive = true;
    }

    public destroy(): void {
        super.destroy();
    }

    public takeDamage(amount: number): void {
        if (amount < 0) amount = 0;
        this.life -= amount;
        if (this.life <= 0)
            this.die();
    }

    private die(): void {
    }

    public abstract start(): void;

    public abstract update(deltatime: number): void;

}