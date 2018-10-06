import { Element } from "./Element";
import { Key } from "./Key";

export abstract class Defense extends Element {

    private key: Key;
    static usedKeys: Key[];

    constructor() {
        super();
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