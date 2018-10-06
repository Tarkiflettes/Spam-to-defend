import { Container, ticker } from "pixi.js"
import { Element } from "../models/Element"
import { Collision } from "../utils/Collision";
import { Castle } from "../models/DefenseElements/Castle";

export class GameView extends Container {

    private ticker: ticker.Ticker;
    private castle: Castle;

    constructor() {
        super();

        this.interactive = true;

        this.hitArea = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);

        this.castle = new Castle();
        this.castle.x = window.innerWidth / 2;
        this.castle.y = window.innerHeight / 2;
        this.addChild(this.castle);

        this.ticker = new ticker.Ticker();
        this.ticker.add(this.update.bind(this));
        this.ticker.start();
    }

    public destroy(): void {
    }

    private update(deltatime: number): void {
        for (let i = 0, len = this.children.length; i < len; i++) {
            let child = this.children[i] as Element;
            if (typeof child.update === "function") {
                child.update(deltatime);
            }
        }
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