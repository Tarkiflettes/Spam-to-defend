import { DefenseEnum } from "../enums/defense.enum"
import { Defense } from "../models/defense"
import { KeyFactory } from "./key.factory";
import { Tower } from "../models/defense-elements/tower";
import { Generator } from "../models/defense-elements/generator";
import { Wall } from "../models/defense-elements/wall";
import { Worker } from "../models/defense-elements/worker";

export class DefenseFactory {

    public static CreateDefense(defenseType: DefenseEnum): Defense | undefined {

        if (!KeyFactory.keyAvailable())
            return undefined;

        if (defenseType === DefenseEnum.Tower) {
            return new Tower();
        } else if (defenseType === DefenseEnum.Generator) {
            return new Generator();
        } else if (defenseType === DefenseEnum.Worker) {
            return new Worker();
        } else if (defenseType === DefenseEnum.Wall) {
            return new Wall();
        }

        return undefined;
    }

}