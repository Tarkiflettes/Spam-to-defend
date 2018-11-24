import { Element } from "../Element";
import { GameManager } from "../../managers/GameManager";
import { Transform } from "../../utils/Transform";
import { balancing } from "../../options/Balancing";

export class Bullet extends Element {

    private force: number;
    private speed: number;
    
    constructor() {
        super();

        let stats = balancing.element.defense.tower.bullet;
        this.force = stats.force;
        this.speed = stats.speed;

        let size = 5;
        var rect = new PIXI.Graphics();
        rect.beginFill(0xe74c3c, 1);
        rect.drawRect(-size / 2, -size / 2, size, size);

        this.addChild(rect);
    }

    public destroy(): void {
        super.destroy();
    }

    draw(): void {
    }

    public start(): void {
    }

    public update(deltatime: number): void {
        Transform.moveForward(this, this.speed * deltatime);

        let enemy = this.getParent().collideEnemy(this);
        if (enemy !== undefined) {
            enemy.takeDamage(this.force);
            this.dieHandler.trigger();
            this.parent.removeChild(this);
        }
    }

}