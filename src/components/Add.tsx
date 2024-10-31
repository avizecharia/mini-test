import React, { useState } from "react";
import Mission from "../models/Mission";
import missionStatus from "../models/missionStatus";

interface Props {
    setMissionList:(missionList:Mission[])=>void
}

export default function Add({setMissionList}:Props){
    // const [addingMission, setAddingMission] = useState(Mission)
    const [name, setName] = useState("")
    const [status, setStatus] = useState<missionStatus>(missionStatus.Pending)
    const [priority, setPriority] = useState("Low")
    const [description, setDescription] = useState("")
    const addMission = async () => {
        console.log("kjvhfklnha ");
        // if(name == "")return
        // if(status == "")return
        // if(priority == "")return
        // if(description == "")return
        console.log(description,"name")
        try {
            // const newMission:Mission = {
            //     name,
            //     priority,
            //     status:status,
            //     description,
                
            // }
            const res = await fetch("https://reactexambackend.onrender.com/missions/8797742",
                {
                    method:"POST",
                    body: JSON.stringify( {
                        name,
                        priority,
                        status:status,
                        description,
                    }),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                console.log(res.status);
            } catch (error) {
             console.log(error);
            }
    }
  return (
    <div className="add">
      <input className="input" type="text" placeholder="name:" onChange={(e)=>{setName(e.target.value)}} />
      <select className="input" name="Status" id=""  onChange={(e)=>{setStatus(e.target.value as missionStatus)}} >
        <option value={missionStatus.Pending} defaultValue={missionStatus.Pending} >Pending</option>
        <option value={missionStatus.InProgress}>In Progress</option>
        <option value={missionStatus.Completed}>Completed</option>
      </select>
      <select className="input"  name="priority" id="" onChange={(e)=>{setPriority(e.target.value)}}>
        <option value="Low" defaultValue={"Low"} >Low</option>
        <option value="Medium"  >Medium</option>
        <option value="High">High</option>
      </select>
      <input className=" description" type="text" placeholder="description:"  onChange={(e)=>{setDescription(e.target.value)}} />
      <button  onClick={() => {addMission()}}>Add Mission</button>
    </div>
  );
}

// Pending = "Pending",
// InProgress = "InProgress",
// Completed = "Completed",