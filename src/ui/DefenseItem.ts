import { Container } from "pixi.js";

export class DefenseItem extends Container {

    private rect: PIXI.Graphics;
    private lineColor: number = 0x34495e;
    private selectedLineColor: number = 0xe74c3c;
    // #e74c3c
    constructor() {
        super();

        this.rect = new PIXI.Graphics();
        this.rect.beginFill(0x34495e, 0.4);
        this.rect.lineStyle(2, this.lineColor, 1);
        this.rect.drawRect(0, -50, 50, 50);

        this.addChild(this.rect);
    }

    public destroy(): void {
    }

    public select(): void {
        this.rect.clear();
        this.rect.beginFill(0x34495e, 0.4);
        this.rect.lineStyle(2, this.selectedLineColor, 1);
        this.rect.drawRect(0, -50, 50, 50);
    }

    public unselect(): void {
        this.rect.clear();
        this.rect.beginFill(0x34495e, 0.4);
        this.rect.lineStyle(2, this.lineColor, 1);
        this.rect.drawRect(0, -50, 50, 50);
    }

}