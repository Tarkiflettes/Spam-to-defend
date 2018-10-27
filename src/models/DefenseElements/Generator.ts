import { Defense } from "../Defense";
import { GameManager } from "../../managers/GameManager";
import { balancing } from "../../options/Balancing";
import { Transform } from "../../utils/Transform";

export class Generator extends Defense {

    public coins: number;

    constructor() {
        super();

        let stats = balancing.element.defense.generator;
        this.setmaxHealth(stats.maxHealth, true);
        this.price = stats.price;
        this.timeToReload = stats.timeToReload;
        this.coins = stats.coins;
    }

    public destroy(): void {
        super.destroy();
    }

    public draw(): void {
        let color = 0x1f5fc7;
        let bodyColor = 0x11356e;
        let size = 20;

        var rect = new PIXI.Graphics();
        rect.beginFill(color, 1);
        rect.drawRect(-size * 3 / 2, -size / 2, size * 3, size);
        Transform.rotate(rect, 45, true);
        this.addChild(rect);

        var rect = new PIXI.Graphics();
        rect.beginFill(color, 1);
        rect.drawRect(-size * 3 / 2, -size / 2, size * 3, size);
        Transform.rotate(rect, -45, true);
        this.addChild(rect);

        var circle = new PIXI.Graphics();
        circle.beginFill(bodyColor, 1);
        circle.drawCircle(0, 0, size);
        this.addChild(circle);

        this.keyText.anchor.set(0.5);
    }

    active(): void {
        GameManager.playerManager.addCoins(this.coins);
    }

    public start(): void {
    }

    public update(deltatime: number): void {
    }

}