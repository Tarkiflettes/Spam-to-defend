import { Element } from "./Element";
import { Transform } from "../utils/Transform";
import { GameManager } from "../managers/GameManager";
import { Defense } from "./Defense";
import { Castle } from "./DefenseElements/Castle";

export class Enemy extends Element {

    public force: number = 1;
    public speed: number = 2;
    public timeToReload = 5 * 1000; // delayInMilliseconds
    private canAttack: boolean = true;

    constructor() {
        super();

        let size = 10;
        var circle = new PIXI.Graphics();
        circle.beginFill(0x000000, 1);
        circle.drawCircle(-size / 4, -size / 4, size);

        this.addChild(circle);
    }

    public destroy(): void {
        super.destroy();
    }

    public start(): void {
        let angleToCastle = Transform.angleBetweenTwoObject(this, GameManager.currentView.castle);
        Transform.rotate(this, angleToCastle)
    }

    public update(deltatime: number): void {
        var defense = GameManager.currentView.collideDefense(this);
        if (defense == undefined)
            Transform.moveForward(this, this.speed * deltatime);
        else
            this.attack(defense);
    }

    private attack(defense: Defense | Castle): void {
        if (!this.canAttack)
            return;
        this.canAttack = false;
        defense.takeDamage(this.force);
        setTimeout(() => this.canAttack = true, this.timeToReload);
    }

}