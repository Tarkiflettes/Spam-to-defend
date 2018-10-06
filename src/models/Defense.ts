import { Element } from "./Element";
import { Key } from "./Key";

export abstract class Defense extends Element {

    static usedKeys: Key[];

    public price: number = 10;
    public timeToReload = 5 * 1000; // delayInMilliseconds
    protected key: Key;
    private canBeUsed: boolean = true;

    constructor() {
        super();
        if (Defense.usedKeys === undefined)
            Defense.usedKeys = new Array();

        this.key = new Key(this.randomLetter(), this.keydownHandler.bind(this), undefined);
        Defense.usedKeys.push(this.key);
    }

    public destroy(): void {
        super.destroy();
        const index = Defense.usedKeys.indexOf(this.key, 0);
        if (index > -1) {
            Defense.usedKeys.splice(index, 1);
        }
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
        return String.fromCharCode(Math.floor(Math.random() * 25) + 65);
    }

}