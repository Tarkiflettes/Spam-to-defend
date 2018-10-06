import { Container } from "pixi.js"

export abstract class Element extends Container {

    private life: number = 100;

    constructor() {
        super();
    }

    public destroy(): void {
        super.destroy();
    }
    
}