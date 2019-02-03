import { Container } from "pixi.js";
import { options } from "../options/options";
import { DefenseItem } from "../ui/defense-item";
import { DefenseEnum } from "../enums/defense.enum";
import { Event } from "../event/event";

export class UIManager extends Container {

    private button: PIXI.Graphics;
    private time: PIXI.Text;
    private coins: PIXI.Text;
    private defenseItems: DefenseItem[];
    public readonly pauseHandler: Event;

    constructor() {
        super();

        this.pauseHandler = new Event();

        this.time = new PIXI.Text('00:00:00');
        this.time.anchor.set(0.5, 0);
        this.time.x = options.width / 2;
        this.time.y = 0;
        this.addChild(this.time);

        this.coins = new PIXI.Text("0");
        this.coins.anchor.set(1, 1);
        this.coins.x = options.width;
        this.coins.y = options.height;
        this.addChild(this.coins);

        this.button = new PIXI.Graphics();
        this.button.beginFill(0x34495e, 0.4);
        this.button.lineStyle(2, 0x34495e, 1);
        this.button.drawRect(0, 0, 50, 50);
        this.button.interactive = true;
        this.button.buttonMode = true;
        this.button
        .on('pointerdown', this.pause.bind(this))
        .on('pointerup', () => {})
        .on('pointerupoutside', () => {})
        .on('pointerover', () => {})
        .on('pointerout', () => {});
        this.addChild(this.button);
        
        this.defenseItems = new Array();
        this.setDefenseItems();
    }

    public destroy(): void {
    }

    private pause(): void {
        this.pauseHandler.trigger();
    }

    public setTime(time: string): void {
        this.removeChild(this.time);
        this.time = new PIXI.Text(time);
        this.time.anchor.set(0.5, 0);
        this.time.x = options.width / 2;
        this.time.y = 0;
        this.addChild(this.time);
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

    public onCoinsChange(coins: number): void {
        this.coins.text = String(coins);
    }

    public onselectedItemChange(selectedItem: DefenseEnum) {
        for (let i = 0; i < this.defenseItems.length; i++) {
            let item = this.defenseItems[i];
            item.unselect();
        }
        this.defenseItems[selectedItem].select();
    }

}