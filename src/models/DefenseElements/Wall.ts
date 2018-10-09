import { Defense } from "../Defense";
import { Element } from "../Element"

export class Wall extends Defense {

    constructor() {
        super();

        let size = 20;
        var rect = new PIXI.Graphics();
        rect.beginFill(0xf1c40f, 1);
        rect.drawRect(-size/2, -size/2, size, size);

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
    }

}