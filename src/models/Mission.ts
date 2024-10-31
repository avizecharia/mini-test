import { v4 } from "uuid";
import missionStatus from "./missionStatus";

export default class Mission {
  public _id: string;
  constructor(
    public name: string,
    public status: missionStatus,
    public priority: string,
    public description: string
  ) {
    this._id = v4();
  }
}
