import { DefenseEnum } from "../enums/DefenseEnum"
import { Defense } from "../models/Defense"
import { Tower } from "../models/Tower"

export class DefenseFactory {

    public static CreateDefense(defenseType: DefenseEnum): Defense {

        if (defenseType === DefenseEnum.Tower) {
            return new Tower();
        }

        return new Tower;
    }

}