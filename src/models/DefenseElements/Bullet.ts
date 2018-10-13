import { Element } from "../Element";
import { GameManager } from "../../managers/GameManager";
import { Transform } from "../../utils/Transform";

export class Bullet extends Element {

    private force: number;
    private speed: number;
    
    constructor() {
        super();

        this.force = 2;
        this.speed = 10;

        let size = 5;
        var rect = new PIXI.Graphics();
        rect.beginFill(0xe74c3c, 1);
        rect.drawRect(-size / 2, -size / 2, size, size);

        this.addChild(rect);
    }

    public destroy(): void {
        super.destroy();
    }

    public start(): void {
    }

    public update(deltatime: number): void {
        Transform.moveForward(this, this.speed * deltatime);

        let enemy = GameManager.currentView.collideEnemy(this);
        if (enemy !== undefined) {
            enemy.takeDamage(this.force);
            this.dieHandler.trigger();
            this.parent.removeChild(this);
        }
    }

}