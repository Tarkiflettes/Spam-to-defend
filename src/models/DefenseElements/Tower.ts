import { Defense } from "../Defense";

export class Tower extends Defense {

    constructor() {
        super();

        var rect = new PIXI.Graphics();
        rect.beginFill(0xe74c3c, 1);
        rect.drawRect(-10, -10, 20, 20);

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

}