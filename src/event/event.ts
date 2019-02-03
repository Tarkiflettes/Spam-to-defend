
export class Event {

    private handlers: ((data?: any) => any)[] = new Array();

    public on(handler: (data?: any) => any): void {
        this.handlers.push(handler);
    }

    public off(handler: (data?: any) => any): void {
        let index = this.handlers.indexOf(handler);
        if (index > -1)
            this.handlers.splice(index, 1);
    }

    public trigger(data?: any) {
        for (let i = 0; i < this.handlers.length; i++) {
            this.handlers[i](data);
        }
    }

}