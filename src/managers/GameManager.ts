import { GameView } from "../views/GameView"
import { PlayerManager } from "./PlayerManager"
import { AIManager } from "./AIManager";
import { UIManager } from "./UIManager";
import { Enemy } from "../models/Enemy";

export class GameManager {

    public currentView: GameView;
    public playerManager: PlayerManager;
    public aiManager: AIManager;
    public uiManager: UIManager;

    public constructor() {
        this.currentView = new GameView();
        this.playerManager = new PlayerManager();
        this.aiManager = new AIManager();
        this.uiManager = new UIManager();
        this.currentView.setUI(this.uiManager);
        this.setHandlers();
        let enemy = new Enemy();
        enemy.x = 0;
        enemy.y = 0;
        enemy.start();
        this.currentView.addEnemy(enemy);
    }

    public destroy(): void {
    }

    private setHandlers(): void {
        console.log("koukou "+this.playerManager.coins);
        this.currentView.on("mousedown", this.playerManager.onMouseDown.bind(this.playerManager));
        this.playerManager.coinsHandler.on(this.uiManager.onCoinsChange.bind(this.uiManager));
        this.playerManager.selectedItemHandler.on(this.uiManager.onselectedItemChange.bind(this).uiManager);
        this.playerManager.addDefenseHandler.on(this.currentView.addNewDefense.bind(this.currentView));
        this.aiManager.addEnemyHandler.on(this.currentView.addEnemy.bind(this.currentView));
    }
    
    private reset() {
        this.currentView.destroy();
        this.playerManager.destroy();
        this.aiManager.destroy();
        this.uiManager.destroy();
    }

}