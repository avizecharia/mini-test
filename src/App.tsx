import React, { useState } from "react";
import Add from "./components/Add";
import Grid from "./components/Grid";

export default function App() {
  const [missionList, setmissionList] = useState("");
  return (
    <div>
      <Add />
      <Grid />
    </div>
  );
}
