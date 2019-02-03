import { Enemy } from "../models/enemy";
import { balancing } from "../options/balancing";
import { options } from "../options/options";
import { random } from "../utils/math";
import { Event } from "../event/event";

export class AIManager {

    public readonly addEnemyHandler: Event;
    private interval: number | undefined;

    constructor() {
        this.addEnemyHandler = new Event();
    }

    public destroy(): void {
    }

    public start(): void {
        this.interval = setInterval(this.spawnIA.bind(this), balancing.ia.interval);
        // this.spawnIA();
    }

    pause(): any {
        if (this.interval !== undefined)
            clearInterval(this.interval);
    }

    private randomSpawn(): void {
        let spawn = random(0, balancing.ia.random);
        if (spawn != 0) {
            return;
        }
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
        this.addEnemyHandler.trigger(enemy);
        enemy.start();
    }

}