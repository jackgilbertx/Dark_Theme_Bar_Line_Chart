import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import "./styles.css";

function App({ keys, lineData, barData, lineYTickValues, barYTickValues }) {
  const tickTheme = {
    textColor: "#eee"
  };
  const dataX = [0.4, 1.2, 2.386, 3.319, 4.252, 5.185, 6.118, 7.051, 7.984];
  const barIds = barData.map(d => {
    return d.country;
  });

  // console.log(barIds);

  for (let x of lineData) {
    for (let y of x.data) {
      // console.log(y.x);
      if (barIds.indexOf(y.x) !== -1) {
        let v = dataX[barIds.indexOf(y.x)];
        y.x = v;
      }
    }
  }

  const lineColors = lineData.map(line => {
    // turn into regular colors array
    return line.color;
  });

  const barColors = ["red", "blue", "green", "yellow", "brown"];
  // const barDataLen = barData.length;
  // const barColorsLen = barColors.length;

  // const defaultColorsBar =
  //   barColorsLen > barDataLen
  //     ? barColors.slice(0, barDataLen)
  //     : { ...barColors };

  // barData.forEach((color, index) => {
  //   barData[index].color = defaultColorsBar[index];
  // });

  console.log(barData);

  // console.log(lineData[0].color);
  const lineLegend = lineData.map(item => {
    return (
      <div className="legend-item">
        <div
          className="line-marker marker"
          style={{
            borderColor: item.color
          }}
        />
        <div className="item-name">{item.id}</div>
      </div>
    );
  });
  const barLegend = keys.map((key, index) => {
    return (
      <div className="legend-item">
        <div
          className="bar-marker marker"
          style={{
            backgroundColor: barColors[index]
          }}
        />
        <div className="item-name">{key}</div>
      </div>
    );
  });
  //console.log(barColors)

  return (
    <div className="container">
      <div className="title">Monthly Chart</div>
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
          fill={[
            {
              match: {
                id: "fries"
              },
              id: "dots"
            },
            {
              match: {
                id: "sandwich"
              },
              id: "lines"
            }
          ]}
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
            legend: "MERTIC TONS",
            legendPosition: "middle",
            legendOffset: -40,
            tickValues: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200]
          }}
          yScale={{ type: "linear", min: barYTickValues[0], max: "auto" }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={'{ from: "color", modifiers: [["darker", 1.6]] }'}
          // legends={[
          //   {
          //     dataFrom: "keys",
          //     anchor: "bottom",
          //     direction: "row",
          //     justify: false,
          //     translateX: 40,
          //     translateY: 63,
          //     itemsSpacing: 4,
          //     itemWidth: 91,
          //     itemHeight: 61,
          //     itemDirection: "left-to-right",
          //     itemOpacity: 0.85,
          //     itemTextColor: "#ffffff",

          //     symbolSize: 16,
          //     effects: [
          //       {
          //         on: "hover",
          //         style: {
          //           itemOpacity: 1
          //         }
          //       }
          //     ]
          //   }
          // ]}
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
            legend: "US$ PER TON",
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
        <div className="line-items">{lineLegend}</div>
        <div className="bar-items">{barLegend}</div>
      </div>
    </div>
  );
}

export default App;
