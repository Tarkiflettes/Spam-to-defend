import { GameView } from "../views/GameView"
import { PlayerManager } from "./PlayerManager"

export class GameManager {

    public static currentView: GameView;
    public playerManager: PlayerManager;

    constructor() {
        GameManager.currentView = new GameView();
        this.playerManager = new PlayerManager();
    }

    public destroy(): void {
    }

}