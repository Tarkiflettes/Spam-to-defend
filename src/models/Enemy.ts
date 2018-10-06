import { Element } from "./Element";

export class Enemy extends Element {

    public force: number = 1;
    public speed: number = 1;

    constructor() {
        super();
        
        let size = 10;
        var circle = new PIXI.Graphics();
        circle.beginFill(0x000000, 1);
        circle.drawCircle(-size/4, -size/4, size);

        this.addChild(circle);
    }

    public destroy(): void {
        super.destroy();
    }

    public update(deltatime: number): void {
        super.update(deltatime);
        this.x += 1;
    }

}