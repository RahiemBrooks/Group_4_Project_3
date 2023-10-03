import React from "react";
import { useState } from "react";
import SimpleBarChart from "../components/charts/SimpleBarChart";
import { getSecondGraphData } from "../services/auth-services";
import { useEffect } from "react";

const IndustryData = () => {
  const [secondState, setSecondState] = useState([]);
  useEffect(() => {
    getSecondGraphData()
      .then((res) => {
        setSecondState(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="pr-8  m-5 rounded-md border">
      <SimpleBarChart data={secondState} />
    </div>
  );
};

export default IndustryData;
