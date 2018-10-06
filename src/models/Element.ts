import { Container, interaction } from "pixi.js"

export abstract class Element extends Container {

    private life: number = 100;

    constructor() {
        super();

        this.interactive = true;
    }

    public destroy(): void {
        super.destroy();
    }

    public update(deltatime: number): void {
    }

}