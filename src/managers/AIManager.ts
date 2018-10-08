import { GameManager } from "./GameManager"
import { Enemy } from "../models/Enemy";
import { options } from "../utils/options";
import { random } from "../Utils/Math";

export class AIManager {

    constructor() {
        var interval = setInterval(this.spawnIA.bind(this), 1000);
        // this.spawnIA();
    }

    public destroy(): void {
    }

    private randomSpawn(): void {
        let spawn = random(0, 20);
        if (spawn != 0)
            return;
        this.spawnIA();
    }

    private spawnIA(): void {

        let enemy = new Enemy();
        let side = random(0, 3); // 0: top | 1: right | 2: bottom | 3: left
        switch (side) {
            case 0:
                enemy.x = random(0, options.width);
                enemy.y = 0;
                break;
            case 1:
                enemy.x = options.width;
                enemy.y = random(0, options.height);
                break;
            case 2:
                enemy.x = random(0, options.width);
                enemy.y = options.height;
                break;
            case 3:
                enemy.x = 0;
                enemy.y = random(0, options.height);
                break;
            default:
                break;
        }
        enemy.start();
        GameManager.currentView.addEnemy(enemy);
    }

}