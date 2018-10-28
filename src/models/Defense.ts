import { Element } from "./Element";
import { Key } from "./Key";
import { random } from "../Utils/Math";
import { KeyFactory } from "../factories/KeyFactory";
import { balancing } from "../options/Balancing";

export abstract class Defense extends Element {

    public price: number;
    public timeToReload: number; // delayInMilliseconds
    protected key!: Key;
    protected keyText!: PIXI.Text;
    private canBeUsed: boolean = true;

    constructor() {
        super();

        let stats = balancing.element.defense;
        this.setmaxHealth(stats.maxHealth, true);
        this.price = stats.price;
        this.timeToReload = stats.timeToReload;
    }

    draw(): void {
        this.key = KeyFactory.getKey(this.keydownHandler.bind(this), undefined);

        var style = new PIXI.TextStyle({
            fontSize: 20,
            stroke: '#ffffff',
            strokeThickness: 5,
        })
        this.keyText = new PIXI.Text(this.key.char, style);
        this.addChild(this.keyText)
    }

    public destroy(): void {
        super.destroy();
        KeyFactory.freeKey(this.key);
    }

    abstract active(): void;

    private keydownHandler(): void {
        if (!this.canBeUsed)
            return;
        this.canBeUsed = false;
        this.active();
        setTimeout(() => this.canBeUsed = true, this.timeToReload);
    }

    private randomLetter(): string {
        return String.fromCharCode(random(65, 90));
    }

}