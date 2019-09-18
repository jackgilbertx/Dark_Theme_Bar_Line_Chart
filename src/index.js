import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const lineData = [
  {
    id: "Key 1",
    data: [
      {
        x: "june",
        y: 31
      },
      {
        x: "july",
        y: 50
      },
      {
        x: "aug",
        y: 73
      },
      {
        x: "sept",
        y: 90
      },
      {
        x: "oct",
        y: 116
      },
      {
        x: "nov",
        y: 185
      },
      {
        x: "dec",
        y: 261
      }
    ]
  },
  {
    id: "Key 2",
    data: [
      {
        x: "june",
        y: 35
      },
      {
        x: "july",
        y: 48
      },
      {
        x: "aug",
        y: 65
      },
      {
        x: "sept",
        y: 96
      }
    ]
  },
  {
    id: "Key 3",
    data: [
      {
        x: "aug",
        y: 35
      },
      {
        x: "sept",
        y: 48
      },
      {
        x: "oct",
        y: 65
      },
      {
        x: "nov",
        y: 96
      }
    ]
  }
];

const barData = [
  {
    id: "june",
    "Key 1": 67,
    "Key 2": 52,
    "Key 3": 4
  },
  {
    id: "july",
    "Key 1": 142,
    "Key 2": 104,
    "Key 3": 112
  },
  {
    id: "aug",
    "Key 1": 113,
    "Key 2": 149,
    "Key 3": 88
  },
  {
    id: "sept",
    "Key 1": 136,
    "Key 2": 149,
    "Key 3": 37
  },
  {
    id: "oct",
    "Key 1": 60,
    "Key 2": 149,
    "Key 3": 55
  },
  {
    id: "nov",
    "Key 1": 192,
    "Key 2": 65,
    "Key 3": 5
  },
  {
    id: "dec",
    "Key 1": 146,
    "Key 2": 181,
    "Key 3": 193
  }
];

const props = {
  keys: ["Key 1", "Key 2", "Key 3"],
  lineData: lineData,
  barData: barData,
  barYTickValues: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
  lineYTickValues: [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275],
  leftAxis: "METRIC TONS",
  rightAxis: "US$ PER TON",
  lineColors: ["#CD0D15", "#2A6800", "purple", "#0092CC", "#2A6800"],
  barColors: ["#68A300", "#FFB100", "#0092CC", "#CD0D15", "#2A6800"],
  height: "500px"
};

ReactDOM.render(<App {...props} />, document.getElementById("root"));
