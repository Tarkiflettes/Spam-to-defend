import { interaction } from "pixi.js"
import { DefenseEnum } from "../enums/DefenseEnum"
import { DefenseFactory } from "../factories/DefenseFactory";
import { Event } from "../Event/Event";
import { balancing } from "../options/Balancing";
import { NewDefense } from "../models/NewDefense";

export class PlayerManager {

    public coins: number;
    public readonly addDefenseHandler: Event;
    public readonly coinsHandler: Event;
    public readonly selectedItemHandler: Event;
    public selectedItem: DefenseEnum = DefenseEnum.Tower;

    constructor() {

        this.coins = balancing.coins;

        this.addDefenseHandler = new Event();
        this.coinsHandler = new Event();
        this.selectedItemHandler = new Event();

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

    public addCoins(amount: number): void {
        this.coins += amount;
        this.coinsHandler.trigger(this.coins);
    }

    public setDefense(x: number, y: number): void {
        let newDefense = DefenseFactory.CreateDefense(this.selectedItem);
        if (newDefense == undefined)
            return;
        if (newDefense.price > this.coins)
            return;

        this.addDefenseHandler.trigger(new NewDefense(newDefense, x, y));
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
        this.selectedItemHandler.trigger(this.selectedItem);
    }

    public trigger(): void {
        this.coinsHandler.trigger(this.coins);
        this.selectedItemHandler.trigger(this.selectedItem);
    }

}