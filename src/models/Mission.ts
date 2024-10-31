import { v4 } from "uuid";
import missionStatus from "./missionStatus";

export default class Mission {
  public id: string;
  constructor(
    public name: string,
    public status: missionStatus.Pending,
    public priority: string,
    public description: string
  ) {
    this.id = v4();
  }
}
