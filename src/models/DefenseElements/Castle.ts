import { Element } from "../Element";
import { balancing } from "../../options/Balancing";

export class Castle extends Element {

    constructor() {
        super();

        let stats = balancing.element.castle;
        this.setmaxHealth(stats.maxHealth, true);
    }

    public destroy(): void {
        super.destroy();
    }

    draw(): void {
        let color = 0x1b2631;
        let bodyColor = 0x2c3e50;
        let size = 100;

        var rect = new PIXI.Graphics();
        rect.beginFill(bodyColor, 1);
        rect.drawRect(-size / 2, -size / 2, size, size);
        this.addChild(rect);

        var rect = new PIXI.Graphics(); // left top
        rect.beginFill(color, 1);
        rect.drawRect(-size / 2, - size / 2, size / 6, size / 6);
        this.addChild(rect);

        var rect = new PIXI.Graphics(); // left middle
        rect.beginFill(color, 1);
        rect.drawRect(-size / 2, 0 - (size / (6 * 2)), size / 6, size / 6);
        this.addChild(rect);

        var rect = new PIXI.Graphics(); // left bottom
        rect.beginFill(color, 1);
        rect.drawRect(-size / 2, size / 2 - (size / 6), size / 6, size / 6);
        this.addChild(rect);

        var rect = new PIXI.Graphics(); // right top
        rect.beginFill(color, 1);
        rect.drawRect(size / 2 - (size / 6), - size / 2, size / 6, size / 6);
        this.addChild(rect);

        var rect = new PIXI.Graphics(); // right middle
        rect.beginFill(color, 1);
        rect.drawRect(size / 2 - (size / 6), - size / (6 * 2), size / 6, size / 6);
        this.addChild(rect);

        var rect = new PIXI.Graphics(); // right bottom
        rect.beginFill(color, 1);
        rect.drawRect(size / 2 - (size / 6), size / 2 - (size / 6), size / 6, size / 6);
        this.addChild(rect);

        var rect = new PIXI.Graphics(); // middle top
        rect.beginFill(color, 1);
        rect.drawRect(- size / (6 * 2), - size / 2, size / 6, size / 6);
        this.addChild(rect);

        var rect = new PIXI.Graphics(); // middle bottom
        rect.beginFill(color, 1);
        rect.drawRect(- size / (6 * 2), size / 2 - (size / 6), size / 6, size / 6);
        this.addChild(rect);
    }

    public start(): void {
    }

    public update(deltatime: number): void {
    }

}