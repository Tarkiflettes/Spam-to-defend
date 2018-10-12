
export class Key {

    public char: string;
    public code: number;
    public isDown: boolean = false;
    public isUp: boolean = true;

    public press: any = undefined;
    public release: any = undefined;

    constructor(code: string, press: any, release: any) {
        this.char = code.charAt(0)
        this.code = code.charCodeAt(0);
        this.press = press;
        this.release = release;
        window.addEventListener(
            "keydown", this.keydownHandler.bind(this), false
        );
        window.addEventListener(
            "keyup", this.keyupHandler.bind(this), false
        );
    }

    private keydownHandler(event: any): void {
        if (event.key === this.char) {
            if (this.isUp && this.press && !typeof this.press !== undefined) this.press();
            this.isDown = true;
            this.isUp = false;
        }
        event.preventDefault();
    }

    private keyupHandler(event: any): void {
        if (event.key === this.char) {
            if (this.isDown && this.release && !typeof this.release !== undefined) this.release();
            this.isDown = false;
            this.isUp = true;
        }
        event.preventDefault();
    }

}