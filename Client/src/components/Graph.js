import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
var graphData = require("./input.json");
var output = require("./output.json");

const Graph = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // asyncFetch();
    setData(props.data)
  }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };

  const config = {
    data,
    padding: 'auto',
    xField: props.x,
    yField: props.y,
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return (
    <div>
        <Line {...config} />
    </div>
  );
};

export default Graph
// ReactDOM.render(<Graph />, document.getElementById('container'));