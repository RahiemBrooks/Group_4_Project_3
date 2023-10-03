import React, { useState } from "react";
import { Fade } from "react-reveal";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = ({ data }) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({});
  const customColorScale = (employmentRate) => {
    if (employmentRate >= 0 && employmentRate <= 6000) {
      return "#9ef01a";
    } else if (employmentRate >= 6001 && employmentRate <= 14000) {
      return "#70e000";
    } else if (employmentRate >= 14001 && employmentRate <= 21000) {
      return "#009000";
    } else if (employmentRate >= 21001 && employmentRate <= 28000) {
      return "#007000";
    } else if (employmentRate >= 28001 && employmentRate <= 35000) {
      return "#105410";
    } else if (employmentRate >= 35001 && employmentRate <= 200000) {
      return "#255225";
    } else {
      return "#ff0000"; // Default color
    }
  };
  const legendData = [
    { label: "0-6k", color: "#9ef01a" },
    { label: "6-14k", color: "#70e000" },
    { label: "14-21k", color: "#009000" },
    { label: "21-28k", color: "#007000" },
    { label: "28-35k", color: "#105410" },
    { label: "35-200k", color: "#255225" },
    { label: "No Data", color: "#ff0000" },
  ];

  const handleMouseEnter = (e, geo, currentData) => {
    const tooltipText = currentData
      ? `${currentData.name}: ${currentData.employment_rate}`
      : "No Data Found";
    setTooltipContent(tooltipText);
    setTooltipPosition({ left: e.pageX, top: e.pageY }); // Updated to use pageX and pageY
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <>
      <div className="text-lg text-center font-bold text-primary pt-5">
        Employment of data scientists by state
      </div>
      <div className="legend mt-5 w-fit mx-auto">
        <h3 className="text-center pb-3 font-semibold text-primary">Legend </h3>
        <div className="flex gap- border border-black">
          {legendData.map((item, index) => (
            <div
              style={{ backgroundColor: item.color }}
              key={index}
              className={`flex px-5 rounded-ful text-white text-sm font-semibold py-1`}
            >
              {/* <span
                className="legend-color"
                style={{ backgroundColor: item.color }}
              ></span> */}
              {item.label}
            </div>
          ))}
        </div>
      </div>
      {/* {tooltipContent && ( */}
      <Fade right when={tooltipContent}>
        <div
          className="tooltip text-primary font-bold text-xs  px-5 transition-all delay-300 duration-300 py-2 absolute rounded-3xl"
          style={{
            left: `${tooltipPosition.left - 2}px`,
            top: `${tooltipPosition.top}px`,
            position: "absolute",
            background: "white",
          }}
        >
          {tooltipContent}
        </div>
      </Fade>
      {/* )} */}
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                const cur = data.find((s) => s.name === geo.properties.name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#000"
                    geography={geo}
                    onMouseEnter={(e) => handleMouseEnter(e, geo, cur)}
                    onMouseLeave={handleMouseLeave}
                    fill={customColorScale(cur ? cur.employment_rate : "#fff")}
                  />
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChart;
