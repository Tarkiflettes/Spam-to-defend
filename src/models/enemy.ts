import { Element } from "./element";
import { Transform } from "../utils/transform";
import { Defense } from "./defense";
import { balancing } from "../options/balancing";
import * as particles from 'pixi-particles';
import { Container } from "pixi.js";
import { Castle } from "./defense-elements/Castle";

export class Enemy extends Element {

    public force: number;
    public speed: number;
    public timeToReload: number; // delayInMilliseconds
    private canAttack: boolean = true;

    constructor() {
        super();

        let stats = balancing.element.enemy;
        this.setmaxHealth(stats.maxHealth, true);
        this.force = stats.force;
        this.speed = stats.speed;
        this.timeToReload = stats.timeToReload;
    }

    public destroy(): void {
        super.destroy();
    }

    draw(): void {
        this.addChild(Enemy.getDesign());
    }
    
    public start(): void {
        let castle = this.getParent().castle;
        if (castle != undefined) {
            let angleToCastle = Transform.angleBetweenTwoObject(this, castle);
            Transform.rotate(this, angleToCastle)
        }
    }

    public update(deltatime: number): void {
        var defense = this.getParent().collideDefense(this);
        if (defense == undefined)
            Transform.moveForward(this, this.speed * deltatime);
        else
            this.attack(defense);
    }

    private attack(defense: Defense | Castle): void {
        if (!this.canAttack)
            return;

        let myEmitter = new particles.Emitter(this, undefined, undefined);
        
        this.canAttack = false;
        defense.takeDamage(this.force);
        setTimeout(() => this.canAttack = true, this.timeToReload);
    }
    
    public static getDesign(): Container {
        let container = new Container();

        let size = 10;
        var circle = new PIXI.Graphics();
        circle.beginFill(0x000000, 1);
        circle.drawCircle(-size / 4, -size / 4, size);
        container.addChild(circle);

        return container;
    }

}