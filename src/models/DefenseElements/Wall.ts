import { Defense } from "../Defense";
import { GameManager } from "../../managers/GameManager";

export class Wall extends Defense {

    public force: number = 50;

    constructor() {
        super();

        let size = 20;
        var rect = new PIXI.Graphics();
        rect.beginFill(0xf1c40f, 1);
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
        let enemiesList = GameManager.currentView.collideEnemies(this);
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