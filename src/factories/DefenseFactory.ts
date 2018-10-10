import { DefenseEnum } from "../enums/DefenseEnum"
import { Defense } from "../models/Defense"
import { Tower } from "../models/DefenseElements/Tower"
import { Generator } from "../models/DefenseElements/Generator";
import { Worker } from "../models/DefenseElements/Worker";
import { Wall } from "../models/DefenseElements/Wall";
import { KeyFactory } from "./KeyFactory";

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