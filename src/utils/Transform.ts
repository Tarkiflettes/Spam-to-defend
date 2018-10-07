import { Container } from "pixi.js";

export class Transform {

    public static moveForward(object: Container, speed: number): void {
        object.x = object.x + speed * Math.cos(object.rotation);
        object.y = object.y + speed * Math.sin(object.rotation);
    }

    public static  rotate(object: Container, degree: number): void {
        object.rotation = degree * Math.PI / 180;
    }

}