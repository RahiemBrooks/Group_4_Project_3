import React, { useEffect } from "react";
import HeatMap from "../components/charts/HeatMap";
import { useState } from "react";
import { getFirstGraphData } from "../services/auth-services";

const StateData = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    getFirstGraphData()
      .then((res) => {
        setState(res?.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return (
    <div className="pr-8  m-5 rounded-md border">
      <HeatMap data={state} />
    </div>
  );
};

export default StateData;
