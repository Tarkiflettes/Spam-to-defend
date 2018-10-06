import { Element } from "./Element";
import { Key } from "./Key";

export abstract class Defense extends Element {

    protected key: Key;
    protected price: number = 10;
    static usedKeys: Key[];

    constructor() {
        super();
        if (Defense.usedKeys === undefined)
            Defense.usedKeys = new Array();

        this.key = new Key(this.randomLetter(), this.keydownHandler, undefined);
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
        this.active();
    }

    private randomLetter(): string {
        return String.fromCharCode(Math.floor(Math.random() * 25) + 65);
    }

}