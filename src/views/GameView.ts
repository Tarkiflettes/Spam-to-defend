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

    public addDefense(element: Element, x: number, y: number): boolean {
        if (this.checkChildrenContainsPoint(x, y))
            return false;
        element.x = x;
        element.y = y;
        this.addChild(element);
        return true;
    }

    private checkChildrenContainsPoint(x: number, y: number): boolean {
        this.children.forEach(function (child) {
            if (child.hitArea !== undefined && child.hitArea !== null && child.hitArea.contains(x, y))
                return true;
        });
        return false;
    }

}