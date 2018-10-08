
export function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Converts from degrees to radians.
export function degreeToRadian(degree: number): number {
    return degree * Math.PI / 180;
}

// Converts from radians to degrees.
export function radianToDegree(radian: number): number {
    return radian * 180 / Math.PI;
}