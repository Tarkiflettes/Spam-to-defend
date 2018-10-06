import { GameView } from "../views/GameView"
import { PlayerManager } from "./PlayerManager"
import { AIManager } from "./AIManager";

export class GameManager {

    public static currentView: GameView;
    public playerManager: PlayerManager;
    public aiManager: AIManager;

    constructor() {
        GameManager.currentView = new GameView();
        this.playerManager = new PlayerManager();
        this.aiManager = new AIManager();
    }

    public destroy(): void {
    }

}