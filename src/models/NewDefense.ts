import { Defense } from "./Defense";

export class NewDefense {

    public defense: Defense;
    public x: number;
    public y: number;

    constructor(defense: Defense, x: number, y: number) {
        this.defense = defense;
        this.x = x;
        this.y = y;
    }

}