import { Container, ticker } from "pixi.js"
import { Element } from "../models/Element"
import { Collision } from "../utils/Collision";
import { Castle } from "../models/DefenseElements/Castle";
import { Enemy } from "../models/Enemy";
import { Defense } from "../models/Defense";
import { Transform } from "../utils/Transform";
import { options } from "../utils/options";
import { UIManager } from "../managers/UIManager";

export class GameView extends Container {

    public castle: Castle | undefined;
    public defense: Defense[];
    public enemies: Enemy[];
    public uiManager: UIManager | undefined;
    private ticker: ticker.Ticker;

    constructor() {
        super();

        this.interactive = true;

        this.hitArea = new PIXI.Rectangle(0, 0, options.width, options.height);

        this.defense = [];
        this.enemies = [];

        this.castle = new Castle();
        this.castle.x = window.innerWidth / 2;
        this.castle.y = window.innerHeight / 2;
        this.addElement(this.castle);

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
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i] as Element;
            if (child !== undefined && typeof child.update === "function") {
                child.update(deltatime);
            }
        }
    }

    public collideDefense(enemy: Enemy): Defense | Castle | undefined {
        if (this.castle !== undefined && Collision.boxesIntersect(this.castle, enemy))
            return this.castle;
        for (let i = 0; i < this.defense.length; i++) {
            let defense = this.defense[i];
            if (Collision.boxesIntersect(defense, enemy))
                return defense;
        }
        return undefined;
    }

    public collideEnemy(defense: Defense): Enemy | undefined {
        for (let i = 0; i < this.enemies.length; i++) {
            let enemy = this.enemies[i];
            if (Collision.boxesIntersect(defense, enemy))
                return enemy;
        }
        return undefined;
    }

    public collideEnemies(defense: Defense): Enemy[] {
        let enemiesList = new Array();
        for (let i = 0; i < this.enemies.length; i++) {
            let enemy = this.enemies[i];
            if (Collision.boxesIntersect(defense, enemy))
                enemiesList.push(enemy);
        }
        return enemiesList;
    }

    public addDefense(defense: Defense, x: number, y: number): boolean {
        defense.x = x;
        defense.y = y;

        if (this.checkChildrenContainsPoint(defense))
            return false;

        this.addElement(defense);
        this.defense.push(defense);
        return true;
    }

    public addEnemy(enemy: Enemy): void {
        this.enemies.push(enemy);
        this.addElement(enemy);
    }

    private addElement(element: Element): void {
        this.addChild(element);
        element.dieHandler.on(this.removeElement.bind(this));
    }

    private removeElement(element: Element): void {
        if (element instanceof Castle) {
            let castle = element as Castle;
            this.castle = undefined;
            // end game
        } else if (element instanceof Defense) {
            let defense = element as Defense;
            let index = this.defense.indexOf(defense);
            if (index > -1)
                this.defense.splice(index, 1);
        } else if (element instanceof Enemy) {
            let enemy = element as Enemy;
            let index = this.enemies.indexOf(enemy);
            if (index > -1)
                this.enemies.splice(index, 1);
        }
        this.removeChild(element);
        element.destroy();
    }

    private checkChildrenContainsPoint(element: Element): boolean {
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            if (child !== this.uiManager && Collision.boxesIntersect(child, element))
                return true;
        }
        return false;
    }

    public nearestEnemy(element: Element, range: number = Number.MAX_VALUE): Enemy | undefined {
        let nearestEnemy: Enemy | undefined = undefined;
        let nearestDistance: number = -1;
        for (let i = 0; i < this.enemies.length; i++) {
            let enemy = this.enemies[i];
            let distance = Transform.distanceBetweenTwoObject(element, enemy);
            if (range >= distance && (nearestEnemy === undefined || distance < nearestDistance)) {
                nearestEnemy = enemy;
                nearestDistance = distance;
            }
        }
        return nearestEnemy;
    }

    nearestDefenseList(element: Element, range: number = Number.MAX_VALUE): Defense[] {
        let defenseList = new Array();
        for (let i = 0; i < this.defense.length; i++) {
            let defense = this.defense[i];
            let distance = Transform.distanceBetweenTwoObject(element, defense);
            if (distance <= range)
                defenseList.push(defense);
        }
        return defenseList;
    }

    public setUI(uiManager: UIManager): void {
        this.uiManager = uiManager;
        this.addChild(this.uiManager);
    }

}