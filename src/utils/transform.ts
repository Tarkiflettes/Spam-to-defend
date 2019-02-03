import { Container } from "pixi.js";
import { radianToDegree, degreeToRadian } from "./math";

export class Transform {

    public static moveForward(object: Container, speed: number): void {
        object.x = object.x + speed * Math.cos(object.rotation);
        object.y = object.y + speed * Math.sin(object.rotation);
    }

    public static rotate(object: Container, angle: number, dregree: boolean = false): void {
        object.rotation = dregree ? degreeToRadian(angle) : angle;
    }

    public static angleBetweenTwoObject(o1: Container, o2: Container, dregree: boolean = false): number {
        return dregree ? radianToDegree(Math.atan2(o2.y - o1.y, o2.x - o1.x)) : Math.atan2(o2.y - o1.y, o2.x - o1.x);
    }

    public static distanceBetweenTwoObject(o1: Container, o2: Container): number {
        var a = o1.x - o2.x;
        var b = o1.y - o2.y;
        return Math.sqrt(a * a + b * b);
    }

}