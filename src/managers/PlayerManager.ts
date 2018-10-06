import { interaction } from "pixi.js"
import { GameManager } from "./GameManager"
import { DefenseEnum } from "../enums/DefenseEnum"
import { DefenseFactory } from "../factories/DefenseFactory";

export class PlayerManager {

    private selectedItem: DefenseEnum = DefenseEnum.Tower;
    private coins: number;

    constructor() {
        this.coins = 0;
        GameManager.currentView.on("mousedown", this.onMouseDown.bind(this));
    }

    public destroy(): void {
    }

    public onMouseDown(event: interaction.InteractionEvent) {
        this.setDefense(event.data.global.x, event.data.global.y);
    }

    public setDefense(x: number, y: number) {
        let newDefense = DefenseFactory.CreateDefense(this.selectedItem);
        GameManager.currentView.addDefense(newDefense, x, y);
    }

}