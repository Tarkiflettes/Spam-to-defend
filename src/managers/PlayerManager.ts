import { interaction } from "pixi.js"
import { GameManager } from "./GameManager"
import { DefenseEnum } from "../enums/DefenseEnum"
import { DefenseFactory } from "../factories/DefenseFactory";

export class PlayerManager {

    private selectedItem: DefenseEnum = DefenseEnum.Tower;
    private coins: number;

    constructor() {
        this.coins = 1000;

        GameManager.currentView.on("mousedown", this.onMouseDown.bind(this));
        
        window.addEventListener(
            "keydown", this.keydownHandler.bind(this), false
        );
    }

    public destroy(): void {
        window.removeEventListener("keydown", this.keydownHandler);
    }

    public onMouseDown(event: interaction.InteractionEvent): void {
        this.setDefense(event.data.global.x, event.data.global.y);
    }

    public setDefense(x: number, y: number): void {
        let newDefense = DefenseFactory.CreateDefense(this.selectedItem);
        if (newDefense.price > this.coins)
            return
        let result = GameManager.currentView.addDefense(newDefense, x, y);
        if (result)
            this.coins -= newDefense.price;
    }

    private keydownHandler(event: any): void {
        if (event.keyCode === 49) { // 1 | &
            this.selectedItem = DefenseEnum.Tower;
        } else if (event.keyCode === 50) { // 2 | é
            this.selectedItem = DefenseEnum.Generator;
        } else if (event.keyCode === 51) { // 3 | "
            this.selectedItem = DefenseEnum.Worker;
        } else if (event.keyCode === 52) { // 4 | '
            this.selectedItem = DefenseEnum.Wall;
        }
        event.preventDefault();
    }

}