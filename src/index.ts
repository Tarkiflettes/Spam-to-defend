import * as pixi from "pixi.js";
import { GameManager } from "./managers/GameManager"
import { options } from "./options/Options";
import "../assets/styles/style.css";

class Main {

    private stage: pixi.Container;
    private renderer: pixi.CanvasRenderer | pixi.WebGLRenderer;
    private gameManager: GameManager;

    constructor() {
        this.renderer = pixi.autoDetectRenderer(options.width, options.height,
            {
                backgroundColor: 0x1099bb,
                antialias: true
            });

        this.gameManager = new GameManager();
        this.stage = GameManager.currentView;

        document.body.appendChild(this.renderer.view);

        window.addEventListener("resize", this.onResize.bind(this));

        window.requestAnimationFrame(this.render.bind(this));
    }

    private render(): void {
        this.renderer.render(this.stage);
        window.requestAnimationFrame(this.render.bind(this));
    }

    private onResize(): void {
        this.renderer.resize(window.innerWidth, window.innerHeight);
    }

}

window.onload = () => onLoad();

function onLoad(): void {
    const main = new Main();
}