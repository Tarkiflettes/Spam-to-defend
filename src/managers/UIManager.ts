import { Container } from "pixi.js";
import { options } from "../utils/options";
import { GameManager } from "./GameManager";

export class UIManager extends Container {

    private time: PIXI.Text;
    private coins: PIXI.Text;

    constructor() {
        super();

        this.time = new PIXI.Text('00:00:00');
        this.time.anchor.set(0.5, 0);
        this.time.x = options.width / 2;
        this.time.y = 0;
        this.addChild(this.time);

        this.coins = new PIXI.Text(String(GameManager.playerManager.coins));
        this.coins.anchor.set(0, 1);
        this.coins.x = 0;
        this.coins.y = options.height;
        this.addChild(this.coins);

        GameManager.playerManager.coinsHandler.on(this.onCoinsChange.bind(this));
    }

    public destroy(): void {
    }

    private onCoinsChange() {
        this.coins.text = String(GameManager.playerManager.coins);
    }

}