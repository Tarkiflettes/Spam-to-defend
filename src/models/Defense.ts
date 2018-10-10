import { Element } from "./Element";
import { Key } from "./Key";
import { random } from "../Utils/Math";
import { KeyFactory } from "../factories/KeyFactory";

export abstract class Defense extends Element {

    public price: number = 10;
    public timeToReload = 5 * 1000; // delayInMilliseconds
    protected key: Key;
    private canBeUsed: boolean = true;

    constructor() {
        super();

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