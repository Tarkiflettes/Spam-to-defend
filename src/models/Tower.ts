import { Defense } from "./Defense";

export class Tower extends Defense {

    constructor() {
        super();

        var rect = new PIXI.Graphics();
        rect.beginFill(0x709FE9, 1);
        rect.drawRect(-10, -10, 20, 20);

        this.addChild(rect);
    }

    public destroy(): void {
        super.destroy();
    }

    active(): void {
    }

}