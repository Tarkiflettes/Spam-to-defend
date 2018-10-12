import { GameView } from "../views/GameView"
import { PlayerManager } from "./PlayerManager"
import { AIManager } from "./AIManager";
import { UIManager } from "./UIManager";

export class GameManager {

    public static currentView: GameView;
    public static playerManager: PlayerManager;
    public aiManager: AIManager;
    public uiManager: UIManager;

    constructor() {
        GameManager.currentView = new GameView();
        GameManager.playerManager = new PlayerManager();
        this.aiManager = new AIManager();
        this.uiManager = new UIManager();
        GameManager.currentView.setUI(this.uiManager);
    }

    public destroy(): void {
    }

}