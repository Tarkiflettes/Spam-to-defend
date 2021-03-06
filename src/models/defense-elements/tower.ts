import { Defense } from "../defense";
import { Enemy } from "../enemy";
import { Transform } from "../../utils/transform";
import { Bullet } from "./bullet";
import { balancing } from "../../options/balancing";
import { Container } from "pixi.js";

export class Tower extends Defense {

    public range: number;
    private target: Enemy | undefined;

    constructor() {
        super();

        let stats = balancing.element.defense.tower;
        this.setmaxHealth(stats.maxHealth, true);
        this.price = stats.price;
        this.timeToReload = stats.timeToReload;
        this.range = stats.range;
    }

    public destroy(): void {
        super.destroy();
    }

    draw(): void {
        this.addChild(Tower.getDesign());

        super.draw();
        
        this.keyText.anchor.set(0.5);
    }

    active(): void {
        let bullet = new Bullet();
        bullet.x = this.x;
        bullet.y = this.y;
        bullet.rotation = this.rotation;
        this.parent.addChild(bullet);
    }

    public start(): void {
    }

    public update(deltatime: number): void {
        if (this.target !== undefined) {
            this.aimTheTarget();
        } else {
            this.target = this.getParent().nearestEnemy(this, this.range);
            if (this.target !== undefined)
                this.target.dieHandler.on(this.removeTarget.bind(this));
        }
    }

    private removeTarget(): void {
        this.target = undefined;
    }

    private aimTheTarget(): void {
        if (this.target === undefined)
            return;
        let angleToCastle = Transform.angleBetweenTwoObject(this, this.target);
        Transform.rotate(this, angleToCastle);
        Transform.rotate(this.keyText, -angleToCastle)
    }

    public static getDesign(): Container {
        let container = new Container();

        let color = 0xe74c3c;
        let bodyColor = 0xb62616;
        let size = 40;

        var rect = new PIXI.Graphics();
        rect.beginFill(bodyColor, 1);
        rect.drawRoundedRect(-size / 2, -size / 2, size, size, 10);
        container.addChild(rect);

        var rect = new PIXI.Graphics();
        rect.beginFill(color, 1);
        rect.drawRect(size / 2, -size / 4, size / 2, size / 2);
        container.addChild(rect);

        return container;
    }

}