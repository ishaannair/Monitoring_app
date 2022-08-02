import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const ProxGraph = (props) => {
  // const [data, setData] = useState([]);

  var data = props.data
  // console.log(data)

  var avg = 0
  var total = 0
  for (var i = 0; i < props.data.length; i++) {
    total += props.data[i][props.y]
    // console.log(total)
  }
  avg = total/data.length
  // console.log(avg)

  const config = {
    data,
    padding: 'auto',
    xField: props.x,
    yField: props.y,
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
      // label: props.x,
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

export default ProxGraph
// ReactDOM.render(<Graph />, document.getElementById('container'));