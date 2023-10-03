import React, { useEffect, useState } from "react";
import SimpleBarChart from "../components/charts/SimpleBarChart";
import ScatterChartWithCells from "../components/charts/ScatterChartWithCells";
import HeatMap from "../components/charts/HeatMap";
import { getFirstGraphData, getSecondGraphData, getThirdGraphData } from "../services/auth-services";
import 'react-tooltip/dist/react-tooltip.css'
const Dashboard = () => {
  const [state, setState] = useState([]);
  const [secondState,setSecondState] = useState([])
  const [thirdState,setThirdState] = useState([])
  // console.log("state: ", state);

  useEffect(() => {
    getFirstGraphData()
      .then((res) => {
        setState(res?.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
      getSecondGraphData()
      .then((res) => {
        setSecondState(res.data)
      })
      .catch((error) => {
        console.log(error.message);
      });
      getThirdGraphData()
      .then((res) => {
        console.log('res: ', res.data);
        setThirdState(res.data)
      })
      .catch((error) => {
        console.log(error.message);
      });
      

  }, []);
  return (
    <div className=" pr-8  m-5 rounded-md border">
      <HeatMap 
      data={state} 
      />
      <div className="">
        <SimpleBarChart data={secondState} />
        <ScatterChartWithCells data={thirdState} />
      </div>
    </div>
  );
};
export default Dashboard;
