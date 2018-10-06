import { Defense } from "./Defense";

export class Tower extends Defense {

    constructor() {
        super();

        var rect = new PIXI.Graphics();
        rect.beginFill(0x709FE9, 1);
        rect.drawRect(20, 20, 100, 100);
    }

    public destroy(): void {
        super.destroy();
    }

    active(): void {
    }

}