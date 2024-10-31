import React, { useEffect } from "react";
import Mission from "../models/Mission";
import missionStatus from "../models/missionStatus";

interface Props {
  mission:Mission
}

export default function MissionCard({mission}:Props) {
  useEffect(()=>{
  },[mission.status])
  const progres = async () => {
    try {
      console.log(mission);
      
      const res = await fetch(`https://reactexambackend.onrender.com/missions/8797742/progress/${mission._id}`,
        {
          method:"POST",
          headers: {"Content-type": "application/json; charset=UTF-8"}
        }
      )
      console.log(res.status);
      
    } catch (error) {
      console.log(error);
      
    }
    

  }
  const missions = async () => {
    try {
      console.log(mission);
      
      const res = await fetch(`https://reactexambackend.onrender.com/missions/8797742/${mission._id}`,
        {
          method:"DELETE",
          headers: {"Content-type": "application/json; charset=UTF-8"}
        }
      )
      console.log(res.status);
      
    } catch (error) {
      console.log(error);
      
    }
    

  }
  return (  <div className="card" style={
    mission.status == missionStatus.Pending ? { background: "#910000" } :
      mission.status == missionStatus.Completed ?{background : "#009114" } : {background : "#be7d00" }}>
        <div className="info">
    <p>Name: {mission.name}</p>
    <p>Status: {mission.status}</p>
    <p>Priority: {mission.priority}</p>
    <p>Description: {mission.description}</p>
    </div>
    <button className="delete" onClick={()=>{missions()}}>delete</button>
    <button className="progres" onClick={()=>{progres() }}>progres</button>
  </div>
)
}
