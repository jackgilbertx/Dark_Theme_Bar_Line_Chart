import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const barYTickValues = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200];
const lineYTickValues = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275];

const lineData = [
  {
    id: "Japan",
    color: "pink",
    key: "pink",
    data: [
      { x: null, y: null },
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
      },
      { x: "", y: null }
    ]
  },
  {
    id: "China",
    color: "red",
    key: "red",
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
    id: "India",
    color: "green",
    key: "green",
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
    "key 2": 149,
    "key 3": 37
  },
  {
    id: "oct",
    "key 1": 60,
    "key 2": 149,
    "key 3": 55
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

ReactDOM.render(
  <App
    keys={["Key 1", "Key 2", "Key 3"]}
    lineData={lineData}
    barData={barData}
    lineYTickValues={lineYTickValues}
    barYTickValues={barYTickValues}
  />,
  document.getElementById("root")
);
