import { Key } from "../models/key";
import { random } from "../utils/math";

export class KeyFactory {

    private static availableKey: string[] = "abcdefghijklmnopqrstuvwxyz".split('');
    private static usedKeys: Key[] = new Array();

    public static getKey(press: any, release: any): Key {
        let key = new Key(this.randomLetter(), press, release);
        let index = this.availableKey.indexOf(key.char);
        if (index > -1)
            this.availableKey.splice(index, 1);
        this.usedKeys.push(key);
        return key;
    }

    public static freeKey(key: Key): void {
        key.press = undefined;
        key.release = undefined;
        let index = this.usedKeys.indexOf(key);
        if (index > -1)
            this.usedKeys.splice(index, 1);
        this.availableKey.push(key.char);
    }

    public static keyAvailable(): boolean {
        return this.availableKey.length > 0;
    }

    private static randomLetter(): string {
        return this.availableKey[random(0, this.availableKey.length - 1)];
    }

}