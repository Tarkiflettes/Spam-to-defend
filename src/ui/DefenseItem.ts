import { Container } from "pixi.js";

export class DefenseItem extends Container {

    constructor() {
        super();

        var rect = new PIXI.Graphics();
        rect.beginFill(0x2c3e50, 1);
        rect.lineStyle(2, 0x0000FF, 1);
        rect.drawRect(0, -50, 50, 50);

        this.addChild(rect);
    }

    public destroy(): void {
    }

}