import { Element } from "./Element";
import { Transform } from "../utils/Transform";

export class Enemy extends Element {

    public force: number = 1;
    public speed: number = 2;

    constructor() {
        super();

        let size = 10;
        var circle = new PIXI.Graphics();
        circle.beginFill(0x000000, 1);
        circle.drawCircle(-size / 4, -size / 4, size);

        this.addChild(circle);

        Transform.rotate(this, 90)
    }

    public destroy(): void {
        super.destroy();
    }

    public update(deltatime: number): void {
        super.update(deltatime);
        Transform.moveForward(this, this.speed);
    }

}