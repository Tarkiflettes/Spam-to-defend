import { Container } from "pixi.js"
import { Event } from "../event/event";
import { balancing } from "../options/balancing";
import { GameView } from "../views/game.view";

export abstract class Element extends Container {

    public readonly dieHandler: Event;
    protected maxHealth: number;
    private health: number;

    constructor() {
        super();

        let stats = balancing.element;
        this.maxHealth = stats.maxHealth;
        
        this.health = this.maxHealth;
        this.dieHandler = new Event();
        this.interactive = true;
        
        this.draw();
    }

    public destroy(): void {
        super.destroy();
    }

    abstract draw(): void;

    public addHealth(amount: number): void {
        this.health += amount;
        if (this.health > this.maxHealth) this.health = this.maxHealth;
    }

    public takeDamage(amount: number): void {
        if (amount < 0) amount = 0;
        this.health -= amount;
        if (this.health <= 0)
            this.die();
    }

    public setmaxHealth(amount: number, reload: boolean = false): void {
        this.maxHealth = amount;
        if (reload)
            this.health = this.maxHealth;
    }

    private die(): void {
        this.dieHandler.trigger(this);
    }

    protected getParent(): GameView {
        return this.parent as GameView;
    }

    public abstract start(): void;

    public abstract update(deltatime: number): void;

}