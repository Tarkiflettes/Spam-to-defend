import { Container, ticker } from "pixi.js"
import { Element } from "../models/Element"
import { Collision } from "../utils/Collision";
import { Castle } from "../models/DefenseElements/Castle";
import { Enemy } from "../models/Enemy";
import { Defense } from "../models/Defense";

export class GameView extends Container {

    public castle: Castle;
    public defense: Defense[];
    public enemies: Enemy[];
    private ticker: ticker.Ticker;

    constructor() {
        super();

        this.interactive = true;

        this.hitArea = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);

        this.defense = [];
        this.enemies = [];

        this.castle = new Castle();
        this.castle.x = window.innerWidth / 2;
        this.castle.y = window.innerHeight / 2;
        this.addChild(this.castle);

        this.ticker = new ticker.Ticker();
        this.ticker.add(this.update.bind(this));
        this.ticker.start();

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

    public collideDefense(enemy: Enemy): Defense | Castle | undefined {
        if (Collision.boxesIntersect(this.castle, enemy))
            return this.castle;
        for (let i = 0, len = this.defense.length; i < len; i++) {
            let defense = this.defense[i];
            if (Collision.boxesIntersect(defense, enemy))
                return defense;
        }
        return undefined;
    }

    public collideEnemy(defense: Defense): Enemy | undefined {
        for (let i = 0, len = this.enemies.length; i < len; i++) {
            let enemy = this.enemies[i];
            if (Collision.boxesIntersect(defense, enemy))
                return enemy;
        }
        return undefined;
    }

    public addDefense(defense: Defense, x: number, y: number): boolean {
        defense.x = x;
        defense.y = y;

        if (this.checkChildrenContainsPoint(defense))
            return false;

        this.addChild(defense);
        this.defense.push(defense);
        return true;
    }

    public addEnemy(enemy: Enemy): void {
        this.enemies.push(enemy);
        this.addChild(enemy);
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