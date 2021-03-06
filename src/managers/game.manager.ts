import { GameView } from "../views/game.view"
import { PlayerManager } from "./player.manager"
import { AIManager } from "./ai.manager";
import { UIManager } from "./ui.manager";

export class GameManager {

    public currentView: GameView;
    public playerManager: PlayerManager;
    public aiManager: AIManager;
    public uiManager: UIManager;

    constructor() {
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
        this.currentView.coinsHandler.on(this.playerManager.addCoins.bind(this.playerManager));
        this.uiManager.pauseHandler.on(this.pause.bind(this));
        this.playerManager.trigger();
    }
    
    private pause() {
        this.currentView.pause();
        this.aiManager.pause();
    }

    private reset() {
        this.currentView.destroy();
        this.playerManager.destroy();
        this.aiManager.destroy();
        this.uiManager.destroy();
    }

}