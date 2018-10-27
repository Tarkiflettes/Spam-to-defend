import { Defense } from "../Defense";
import { GameManager } from "../../managers/GameManager";
import { balancing } from "../../options/Balancing";

export class Worker extends Defense {

    public regenerationHealth: number;
    public range: number;

    constructor() {
        super();

        let stats = balancing.element.defense.worker;
        this.setmaxHealth(stats.maxHealth, true);
        this.price = stats.price;
        this.timeToReload = stats.timeToReload;
        this.regenerationHealth = stats.regenerationHealth;
        this.range = stats.range;
    }

    public destroy(): void {
        super.destroy();
    }

    draw(): void {
        let color = 0x8e44ad;
        let size = 7;
        let space = 4;

        var circle = new PIXI.Graphics();
        circle.beginFill(color, 1);
        circle.drawCircle(size * space, size, size);
        this.addChild(circle);

        var circle = new PIXI.Graphics();
        circle.beginFill(color, 1);
        circle.drawCircle(-size * space, 0, size);
        this.addChild(circle);

        var circle = new PIXI.Graphics();
        circle.beginFill(color, 1);
        circle.drawCircle(0, size * space, size);
        this.addChild(circle);
        
        this.keyText.anchor.set(0.5);
    }

    active(): void {
        let defenseList = GameManager.currentView.nearestDefenseList(this, this.range);
        for (let i = 0; i < defenseList.length; i++) {
            let defense = defenseList[i];
            defense.addHealth(this.regenerationHealth);
        }
    }

    public start(): void {
    }

    public update(deltatime: number): void {
    }

}