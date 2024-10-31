import React from "react";
import Mission from "../models/Mission";
import MissionCard from "./MissionCard";

interface Props {
    missionList:Mission[]
}

export default function Grid({missionList}:Props) {

  return (
    <div className="grid">
        {missionList.length == 0 && <h1>Your list is Empty</h1>}
        { 
        missionList.map(mission => <MissionCard mission={mission}/>)
        }
    </div>
  )
}
