import { Container } from "pixi.js"
import { Element } from "../models/Element"
import { Collision } from "../utils/Collision";

export class GameView extends Container {

    constructor() {
        super();

        this.interactive = true;

        this.hitArea = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);
    }

    public destroy(): void {
    }

    public addDefense(element: Element, x: number, y: number): boolean {
        element.x = x;
        element.y = y;

        if (this.checkChildrenContainsPoint(element))
            return false;

        this.addChild(element);
        return true;
    }

    private checkChildrenContainsPoint(element: Element): boolean {
        for (let i = 0, len = this.children.length; i < len; i++) {
            let child = this.children[i];
            if (Collision.boxesIntersect(child, element))
                return true;
        }
        return false;
    }

}