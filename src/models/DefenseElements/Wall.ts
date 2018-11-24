import { Defense } from "../Defense";
import { GameManager } from "../../managers/GameManager";
import { balancing } from "../../options/Balancing";
import { Enemy } from "../Enemy";

export class Wall extends Defense {

    public force: number;

    constructor() {
        super();

        let stats = balancing.element.defense.wall;
        this.setmaxHealth(stats.maxHealth, true);
        this.price = stats.price;
        this.timeToReload = stats.timeToReload;
        this.force = stats.force;
    }

    public destroy(): void {
        super.destroy();
    }

    draw(): void {
        let color = 0xf1c40f;
        let size = 20;

        var rect = new PIXI.Graphics();
        rect.beginFill(color, 1);
        rect.drawRect(-size / 8, -size / 2, size * 4, size);
        this.addChild(rect);

        super.draw();
        
        this.keyText.anchor.set(0.5);
        this.keyText.x = size * 2;
    }
    
    active(): void {
        let enemiesList = this.getParent().collideEnemies(this);
        for (let i = 0; i < enemiesList.length; i++) {
            let enemy = enemiesList[i];
            enemy.takeDamage(this.force);
        }
    }

    public start(): void {
    }

    public update(deltatime: number): void {
    }

}