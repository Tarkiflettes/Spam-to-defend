import { Defense } from "../Defense";
import { GameManager } from "../../managers/GameManager";
import { Enemy } from "../Enemy";
import { Transform } from "../../utils/Transform";

export class Tower extends Defense {

    public range: number = 200;
    private target: Enemy | undefined;

    constructor() {
        super();

        this.life = 2;
        let size = 20;
        var rect = new PIXI.Graphics();
        rect.beginFill(0xe74c3c, 1);
        rect.drawRect(-size / 2, -size / 2, size, size);

        var style = new PIXI.TextStyle({
            fontSize: 10,
        })
        var key = new PIXI.Text(this.key.char, style);
        key.x = -5;
        key.y = -5;

        rect.addChild(key)

        this.addChild(rect);
    }

    public destroy(): void {
        super.destroy();
    }

    active(): void {
    }

    public start(): void {
    }

    public update(deltatime: number): void {
        if (this.target !== undefined) {
            this.aimTheTarget();
        } else {
            this.target = GameManager.currentView.nearestEnemy(this, this.range);
        }
    }

    private aimTheTarget(): void {
        if (this.target === undefined)
            return;
        let angleToCastle = Transform.angleBetweenTwoObject(this, this.target);
        Transform.rotate(this, angleToCastle)
    }

}