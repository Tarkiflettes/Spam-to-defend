import { Element } from "../Element";
import { balancing } from "../../options/Balancing";

export class Castle extends Element {

    constructor() {
        super();
        
        let stats = balancing.element.castle;
        this.setmaxHealth(stats.maxHealth, true);

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