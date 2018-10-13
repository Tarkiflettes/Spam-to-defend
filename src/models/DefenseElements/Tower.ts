import { Defense } from "../Defense";
import { GameManager } from "../../managers/GameManager";
import { Enemy } from "../Enemy";
import { Transform } from "../../utils/Transform";
import { Bullet } from "./Bullet";
import { balancing } from "../../options/Balancing";

export class Tower extends Defense {

    public range: number;
    private target: Enemy | undefined;

    constructor() {
        super();

        let stats = balancing.element.defense.tower;
        this.setmaxHealth(stats.maxHealth, true);
        this.price = stats.price;
        this.timeToReload = stats.timeToReload;
        this.range = stats.range;
        
        this.setmaxHealth(2, true);

        let size = 20;
        var rect = new PIXI.Graphics();
        rect.beginFill(0xe74c3c, 1);
        rect.drawRect(-size / 2, -size / 2, size, size);

        var style = new PIXI.TextStyle({
            fontSize: 10,
        });
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
        let bullet = new Bullet();
        bullet.x = this.x;
        bullet.y = this.y;
        bullet.rotation = this.rotation;
        this.parent.addChild(bullet);
    }

    public start(): void {
    }

    public update(deltatime: number): void {
        if (this.target !== undefined) {
            this.aimTheTarget();
        } else {
            this.target = GameManager.currentView.nearestEnemy(this, this.range);
            if (this.target !== undefined)
                this.target.dieHandler.on(this.removeTarget.bind(this));
        }
    }

    private removeTarget(): void {
        this.target = undefined;
    }

    private aimTheTarget(): void {
        if (this.target === undefined)
            return;
        let angleToCastle = Transform.angleBetweenTwoObject(this, this.target);
        Transform.rotate(this, angleToCastle)
    }

}