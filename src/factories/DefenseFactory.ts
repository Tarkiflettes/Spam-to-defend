import { DefenseEnum } from "../enums/DefenseEnum"
import { Defense } from "../models/Defense"
import { Tower } from "../models/DefenseElements/Tower"
import { Worker } from "../models/DefenseElements/Worker";
import { Generator } from "../models/DefenseElements/Generator";
import { Wall } from "../models/DefenseElements/Wall";

export class DefenseFactory {

    public static CreateDefense(defenseType: DefenseEnum): Defense {

        if (defenseType === DefenseEnum.Tower) {
            return new Tower();
        } else if (defenseType === DefenseEnum.Worker) {
            return new Worker();
        } else if (defenseType === DefenseEnum.Generator) {
            return new Generator();
        } else if (defenseType === DefenseEnum.Wall) {
            return new Wall();
        }

        return new Tower;
    }

}