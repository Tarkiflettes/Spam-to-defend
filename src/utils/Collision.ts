import { DisplayObject } from "pixi.js";

export class Collision {

    public static boxesIntersect(a: DisplayObject, b: DisplayObject): boolean {
        var ab = a.getBounds();
        var bb = b.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }

}