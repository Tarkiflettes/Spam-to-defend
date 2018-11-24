import { GameView } from "../views/GameView"
import { PlayerManager } from "./PlayerManager"
import { AIManager } from "./AIManager";
import { UIManager } from "./UIManager";

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
        this.aiManager.start();
    }

    public destroy(): void {
    }

    private setHandlers(): void {
        this.currentView.on("mousedown", this.playerManager.onMouseDown.bind(this.playerManager));
        this.playerManager.coinsHandler.on(this.uiManager.onCoinsChange.bind(this.uiManager));
        this.playerManager.selectedItemHandler.on(this.uiManager.onselectedItemChange.bind(this.uiManager));
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