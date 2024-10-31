import React, { useEffect, useState } from "react";
import Add from "./components/Add";
import Grid from "./components/Grid";
import Mission from "./models/Mission";

export default function App() {
  const [missionList, setMissionList] = useState<Mission[]>([]);
  useEffect(() => {
    const data = async () => {
      const res = await fetch(
        "https://reactexambackend.onrender.com/missions/8797742"
      );
      const resJson = await res.json();
      setMissionList([...resJson]);
    };
    data()
    
  }, [missionList]);
  return (
    <div className="app">
      <h1>Milatry OperationDashboard</h1>
      <Add setMissionList={setMissionList} />
      <Grid missionList={missionList} />
    </div>
  );
}
