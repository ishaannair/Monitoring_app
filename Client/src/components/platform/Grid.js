import React,{useState} from "react";
import HexagonGrid from "./hexagongrid.js";
import times from "lodash/times";
import "./styles.css";

var proximity_data= require("../Proximity.json")

const HexGridDemo = () => {
    function useForceUpdate(){
      // update state to force render
      // An function that increment 👆🏻 the previous state like here 
      // is better than directly setting `value + 1`
  }
  var test=0
  if(proximity_data[proximity_data.length-1]["Distance_left"]<15 && proximity_data[proximity_data.length-1]["Distance_right"]<15 )
    {

      test=3
    }
  else if(proximity_data[proximity_data.length-1]["Distance_left"]>15 && proximity_data[proximity_data.length-1]["Distance_right"]<15 )
  {

 
    test=2
  }
  else if(proximity_data[proximity_data.length-1]["Distance_left"]<15 && proximity_data[proximity_data.length-1]["Distance_right"]>15 )
  {
    test=1
  }
  else if(proximity_data[proximity_data.length-1]["Distance_left"]>15 && proximity_data[proximity_data.length-1]["Distance_right"]>15)
  {
    test=0
  }

  const [proximity, setproximity] = useState(test); 
  var proximity_color=["myDiv_none","myDiv_left","myDiv_right","myDiv_All"]
  const [count, setValue] = useState(1); // integer state
  const [hexagons, setHexagon] = useState(times(count, (id) => id));

  // var count=1;
  // let hexagons = times(count, (id) => id);
  const getHexProps = (hexagon) => {
    return{
      style: {
        fill: "#007aff",
        stroke: "white"
      },
      onClick: () => {sethexagon(hexagon);}
    };
  };
  const sethexagon=(hexagon)=>{
    // hexagons = times(1, (id) => id)
    // alert(`Hexagon n.${hexagon} has been clicked`)
    // console.log(proximity_data[proximity_data.length-1])
    console.log(test)
    if (proximity<proximity_color.length-1){
      setproximity(proximity=>proximity+1)
    }
    else{
      setproximity(proximity=>0)
    }
    // setHexagon(hexagons=>times(1, (id) => hexagon))
    
  }

  const renderHexagonContent = (hexagon) => {
    return (
      <text
        x="50%"
        y="50%"
        fontSize={100}
        fontWeight="lighter"
        style={{ fill: "white" }}
        textAnchor="middle"
      >
        {hexagon}
      </text>
    );
  };

  

  return (
    <div class={proximity_color[proximity]}>
      <div style={{marginLeft:"45%",marginTop:"5vw",marginBottom:"-5vw"}}>
    <HexagonGrid
      gridWidth={500}
      gridHeight={500}
      hexagons={hexagons}
      hexProps={getHexProps}
      renderHexagonContent={renderHexagonContent}
    />
    </div>
    </div>
  );
};

export default HexGridDemo;