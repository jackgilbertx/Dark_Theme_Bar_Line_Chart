import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import "./styles.css";

function App({
  keys,
  lineData,
  barData,
  lineYTickValues,
  barYTickValues,
  chartTitle,
  rightAxis,
  leftAxis,
  lineColors,
  barColors
}) {
  const tickTheme = {
    textColor: "#eee"
  };

  lineData[0].data.unshift({ x: "", y: null });
  lineData[0].data.push({ x: null, y: null });

  const lineLegend = lineData.map((line, index) => {
    return (
      <div key={index} className="legend-item">
        <div
          className="line-marker marker"
          style={{
            borderColor: lineColors[index]
          }}
        />
        <div className="legend-item-name">{line.id}</div>
      </div>
    );
  });
  const barLegend = keys.map((key, index) => {
    return (
      <div key={index} className="legend-item">
        <div
          className="bar-marker marker"
          style={{
            backgroundColor: barColors[index]
          }}
        />
        <div className="legend-item-name">{key}</div>
      </div>
    );
  });
  //console.log(barColors)

  return (
    <div className="container">
      <div className="title">{chartTitle}</div>
      <div className="bar">
        {/* <div className="title">Monthly Chart</div> */}
        <ResponsiveBar
          theme={tickTheme}
          data={barData}
          keys={keys}
          indexBy="id"
          margin={{ top: 50, right: 130, bottom: 60, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          colors={barColors}
          enableLabel={false}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 3,
            tickRotation: 0,
            legend: leftAxis,
            legendPosition: "middle",
            legendOffset: -40,
            tickValues: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200]
          }}
          yScale={{ type: "linear", min: barYTickValues[0], max: "auto" }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={'{ from: "color", modifiers: [["darker", 1.6]] }'}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          enableGridY={false}
          enableGridX={false}
          isInteractive={true}
        />
      </div>
      <div className="line">
        <ResponsiveLine
          theme={tickTheme}
          curve="monotoneX"
          data={lineData}
          margin={{ top: 50, right: 110, bottom: 60, left: 60 }}
          axisTop={null}
          axisBottom={null}
          axisRight={{
            orient: "left",
            tickSize: 0,
            tickPadding: 3,
            tickRotation: 0,
            legend: rightAxis,
            legendOffset: 45,
            legendPosition: "middle",
            tickValues: [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275]
          }}
          yScale={{ type: "linear", min: lineYTickValues[0], max: "auto" }}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors={lineColors}
          pointSize={10}
          pointColor="white"
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          crosshairType="bottom-right"
        />
      </div>
      <div className="legend">
        <div className="legend-line">{lineLegend}</div>
        <div className="legend-bar">{barLegend}</div>
      </div>
    </div>
  );
}

export default App;
