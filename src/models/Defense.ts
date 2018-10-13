import { Element } from "./Element";
import { Key } from "./Key";
import { random } from "../Utils/Math";
import { KeyFactory } from "../factories/KeyFactory";
import { balancing } from "../options/Balancing";

export abstract class Defense extends Element {

    public price: number;
    public timeToReload: number; // delayInMilliseconds
    protected key: Key;
    private canBeUsed: boolean = true;

    constructor() {
        super();

        let stats = balancing.element.defense;
        this.setmaxHealth(stats.maxHealth, true);
        this.price = stats.price;
        this.timeToReload = stats.timeToReload;

        this.key = KeyFactory.getKey(this.keydownHandler.bind(this), undefined);
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