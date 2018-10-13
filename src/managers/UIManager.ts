import { Container } from "pixi.js";
import { options } from "../options/Options";
import { GameManager } from "./GameManager";
import { DefenseItem } from "../ui/DefenseItem";
import { DefenseEnum } from "../enums/DefenseEnum";

export class UIManager extends Container {

    private time: PIXI.Text;
    private coins: PIXI.Text;
    private defenseItems: DefenseItem[];

    constructor() {
        super();

        this.time = new PIXI.Text('00:00:00');
        this.time.anchor.set(0.5, 0);
        this.time.x = options.width / 2;
        this.time.y = 0;
        this.addChild(this.time);

        this.coins = new PIXI.Text(String(GameManager.playerManager.coins));
        this.coins.anchor.set(1, 1);
        this.coins.x = options.width;
        this.coins.y = options.height;
        this.addChild(this.coins);

        this.defenseItems = new Array();
        this.setDefenseItems();
        this.onselectedItemChange();

        GameManager.playerManager.coinsHandler.on(this.onCoinsChange.bind(this));
        GameManager.playerManager.selectedItemHandler.on(this.onselectedItemChange.bind(this));
    }

    public destroy(): void {
    }

    private setDefenseItems(): void {
        let currentX = 0;
        for (let item in DefenseEnum) {
            if (!isNaN(Number(item)))
                continue;
            let newItem = new DefenseItem();
            newItem.x = currentX;
            newItem.y = options.height;
            currentX += newItem.width;
            this.defenseItems.push(newItem);
            this.addChild(newItem);
        }
    }

    private onCoinsChange(): void {
        this.coins.text = String(GameManager.playerManager.coins);
    }

    private onselectedItemChange() {
        for (let i = 0; i < this.defenseItems.length; i++) {
            let item = this.defenseItems[i];
            item.unselect();
        }
        this.defenseItems[GameManager.playerManager.selectedItem].select();
    }

}