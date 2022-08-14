import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const ProxGraph = (props) => {

  // Separating the data for each proximity sensor reading
  var data = []
  for (let i = 0; i < props.data.length; i++) {
    var first = {"Time": props.data[i].Time, "Distance": props.data[i].distance_00, "category": "First Sensor"}
    var second = {"Time": props.data[i].Time, "Distance": props.data[i].distance_01, "category": "Second Sensor"}
    var third = {"Time": props.data[i].Time, "Distance": props.data[i].distance_02, "category": "Third Sensor"}
    data.push(first)
    data.push(second)
    data.push(third)
  }
  // console.log(data)
  var avg = 0
  var total = 0
  for (var i = 0; i < props.data.length; i++) {
    total += data[i]["Distance"]
  }
  avg = total/data.length

  const config = {
    data,
    padding: 'auto',
    xField: props.x,
    yField: "Distance",
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      min: avg + 20,
      max: avg - 20,
    },
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };

  return (
    <div>
        <Line {...config} />
    </div>
  );
};

export default ProxGraph
// ReactDOM.render(<Graph />, document.getElementById('container'));