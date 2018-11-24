import { Element } from "./Element";
import { Transform } from "../utils/Transform";
import { GameManager } from "../managers/GameManager";
import { Defense } from "./Defense";
import { Castle } from "./DefenseElements/Castle";
import { balancing } from "../options/Balancing";
import * as particles from 'pixi-particles';

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

        let size = 10;
        var circle = new PIXI.Graphics();
        circle.beginFill(0x000000, 1);
        circle.drawCircle(-size / 4, -size / 4, size);

        this.addChild(circle);
    }

    public destroy(): void {
        super.destroy();
    }

    draw(): void {
    }
    
    public start(): void {
        // let castle = this.getParent().castle;
        // if (castle != undefined) {
        //     let angleToCastle = Transform.angleBetweenTwoObject(this, castle);
        //     Transform.rotate(this, angleToCastle)
        // }
    }

    public update(deltatime: number): void {
        // var defense = this.getParent().collideDefense(this);
        // if (defense == undefined)
        //     Transform.moveForward(this, this.speed * deltatime);
        // else
        //     this.attack(defense);
    }

    private attack(defense: Defense | Castle): void {
        if (!this.canAttack)
            return;

        let myEmitter = new particles.Emitter(this, undefined, undefined);
        
        this.canAttack = false;
        defense.takeDamage(this.force);
        setTimeout(() => this.canAttack = true, this.timeToReload);
    }

}