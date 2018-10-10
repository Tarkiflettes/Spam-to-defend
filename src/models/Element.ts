import { Container } from "pixi.js"
import { Event } from "../Event/Event";

export abstract class Element extends Container {

    public readonly dieHandler: Event;
    protected life: number = 100;

    constructor() {
        super();

        this.dieHandler = new Event();
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
        this.dieHandler.trigger(this);
    }

    public abstract start(): void;

    public abstract update(deltatime: number): void;

}