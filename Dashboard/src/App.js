import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Dashboard from "./pages";
import 'react-tooltip/dist/react-tooltip.css'
import StateData from "./pages/state-data";
import SalaryState from "./pages/salary-state-data";
import IndustryData from "./pages/industry-data";
// const data2 = createContext();
const App = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [loading, setLoading] = useState(true);
  // const user = JSON.parse(localStorage.getItem("auth_admin"));
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/signin");
  //     setLoading(false);
  //   } else if (user && location.pathname.includes("signin")) {
  //     navigate("/");
  //     setLoading(false);
  //   }
  //   setLoading(false);
  // }, []);
  // const gender = "male";
  return (
    <>
      <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/state-data"} element={<StateData />} />
          <Route path={"/industry-data"} element={<IndustryData />} />
          <Route path={"/salary-per-state"} element={<SalaryState />} />
      </Routes>
    </>
  );
};
export default App;