import { Element } from "./Element";

export class Enemy extends Element {

    public force: number = 1;
    public speed: number = 1;

    constructor() {
        super();
    }

    public destroy(): void {
        super.destroy();
    }

    

}