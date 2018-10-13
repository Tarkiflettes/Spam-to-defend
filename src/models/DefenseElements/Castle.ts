import { Element } from "../Element";

export class Castle extends Element {

    constructor() {
        super();

        // this.setmaxHealth(1, true);
        
        let size = 50;
        var rect = new PIXI.Graphics();
        rect.beginFill(0x2c3e50, 1);
        rect.drawRect(-size / 2, -size / 2, size, size);

        this.addChild(rect);
    }

    public destroy(): void {
        super.destroy();
    }

    public start(): void {
    }
    
    public update(deltatime: number): void {
    }

}