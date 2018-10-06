
export class Key {

    public code: number;
    public isDown: boolean = false;
    public isUp: boolean = true;

    public press: any = undefined;
    public release: any = undefined;

    constructor(code: string, press: any, release: any) {
        this.code = code.charCodeAt(0);
        this.press = press;
        this.release = release;
        window.addEventListener(
            "keydown", this.keydownHandler, false
        );
        window.addEventListener(
            "keyup", this.keyupHandler, false
        );
    }

    private keydownHandler(event: any): void {
        if (event.keyCode === this.code) {
            if (this.isUp && this.press && !typeof this.press !== undefined) this.press();
            this.isDown = true;
            this.isUp = false;
        }
        event.preventDefault();
    }

    private keyupHandler(event: any): void {
        if (event.keyCode === this.code) {
            if (this.isDown && this.release && !typeof this.release !== undefined) this.release();
            this.isDown = false;
            this.isUp = true;
        }
        event.preventDefault();
    }

}