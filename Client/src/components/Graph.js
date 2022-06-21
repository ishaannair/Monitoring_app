import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const Graph = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // asyncFetch();
    setData(props.data)
    console.log(props.data)
  }, []);

  var avg = 0
  var total = 0
  for (var i = 0; i < props.data.length; i++) {
    total += props.data[i][props.y]
    // console.log(total)
  }
  avg = total/props.data.length
  console.log(avg)

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

export default Graph
// ReactDOM.render(<Graph />, document.getElementById('container'));