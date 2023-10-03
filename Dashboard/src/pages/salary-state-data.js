import React,{ useState,useEffect } from "react";
import { getThirdGraphData } from "../services/auth-services";
import ScatterChartWithCells from "../components/charts/ScatterChartWithCells";

const SalaryState = () => {
  const [thirdState, setThirdState] = useState([]);

  useEffect(() => {
    getThirdGraphData()
      .then((res) => {
        console.log("res: ", res.data);
        setThirdState(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="pr-8  m-5 rounded-md border">
      <ScatterChartWithCells data={thirdState} />
    </div>
  );
};

export default SalaryState;
