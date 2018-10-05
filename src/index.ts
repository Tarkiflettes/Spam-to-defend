import * as pixi from "pixi.js";

class Main {

    private stage: pixi.Container;
    private renderer: pixi.CanvasRenderer | pixi.WebGLRenderer;

    constructor() {
        this.renderer = pixi.autoDetectRenderer(340, 480, { backgroundColor: 0x1099bb });
        this.stage = new pixi.Container();

        document.body.appendChild(this.renderer.view);
    }

    public render() {
        this.renderer.render(this.stage);
        window.requestAnimationFrame(this.render);
    }

}

const main = new Main();
main.render();