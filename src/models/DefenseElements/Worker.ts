import { Defense } from "../Defense";
import { GameManager } from "../../managers/GameManager";

export class Worker extends Defense {

    public regenerationHealth: number = 5;
    public range: number = 50;

    constructor() {
        super();

        let size = 20;
        var rect = new PIXI.Graphics();
        rect.beginFill(0x8e44ad, 1);
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