import { Container } from "pixi.js"
import { Element } from "../models/Element"

export class GameView extends Container {

    constructor() {
        super();

        this.interactive = true;

        this.hitArea = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);
    }

    public destroy(): void {
    }

    public addDefense(element: Element, x: number, y: number): void {
        element.x = x;
        element.y = y;
        this.addChild(element);
    }

}