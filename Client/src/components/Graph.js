import React from "react";
import { Line } from "@ant-design/plots";

const Graph = (props) => {
  var data = props.data;

  var avg = 0;
  var total = 0;
  for (var i = 0; i < props.data.length; i++) {
    total += props.data[i][props.y];
  }
  avg = total / data.length;

  const config = {
    data,
    padding: "auto",
    xField: props.x,
    yField: props.y,
    xAxis: {
      tickCount: 5,
    },
    yAxis: {
      min: avg + 20,
      max: avg - 20,
    },
  };

  return (
    <div>
      <Line {...config} />
    </div>
  );
};

export default Graph;
