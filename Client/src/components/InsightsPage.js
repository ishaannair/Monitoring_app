import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate } from "react-router-dom";
import { Content, Header } from 'antd/lib/layout/layout';
import { Button, Layout, Row, Col, Typography, Card, Space, Tabs, Menu  } from 'antd';
import moment from "moment";
import axios from 'axios'; 
import Graph from './Graph';
import '../styles/result.css';
import Hexagon from 'react-hexagon'
import { test_hexagon } from './platform/test_hexagon';
import Chart from 'react-apexcharts';
import Tickets from '../reports/Tickets';
import WeatherDisplay from './WeatherDisplay';

// import HexGridDemo from "./platform/Grid.js";
var input = require("./input.json");
// var graphData=require("./input.json");
// var graphData=JSON.parse(localStorage.getItem("graph"));
var output = require("./output.json");
var salt = require("./salt.json");
var pH = require("./pH.json");
// var proximity= require("./Proximity.json")
// var proximity=JSON.parse(localStorage.getItem("proximity")).data;
const { TabPane } = Tabs;

const color=['#c1c1c1', '#c0c0c1', '#c0c0c1','#c0c0c1', '#c0c0c1', '#c0c0c1','#c0c0c1', '#c0c0c1', '#c0c0c1','#c0c0c1', '#0F0F0F', '#c0c0c1','#c0c0c1', '#c0c0c1', '#c0c0c1','#c0c0c1', '#c0c0c1', '#c0c0c1']
const series= [100, 100, 100, 100, 100,100,100, 100, 100, 100, 100,100,100, 100, 100, 100, 100,100];

// const [color, setColor] = useState(['#FFFFFF', '#FFFFFF', '#FFFFFF','#FFFFFF', '#FFFFFF', '#FFFFFF','#FFFFFF', '#FFFFFF', '#FFFFFF','#FFFFFF', '#ff0000', '#FFFFFF','#FFFFFF', '#FFFFFF', '#FFFFFF','#FFFFFF', '#FFFFFF', '#FFFFFF']);
const options={
    "chart": {
      "width": 380,
      "type": 'polarArea'
    }, 
    
    "fill": {
      "opacity": 0.5,
      colors:color
    },
    "stroke": {
      "width": 1,
      "show":true,
      "opacity":0,
      "colors": color,
   
    },
    "yaxis": {
      "show": true
    },
    "legend": {
      "show": false
    },
    "plotOptions": {
      "polarArea": {
        "rings": {
          "strokeWidth": 1
        },
        "spokes": {
          "strokeWidth": 1
        },
      }
    },
    "theme": {
      "monochrome": {
        "enabled": true,
        "shadeTo": 'dark',
        "shadeIntensity": 1
      }
    }
  };

const items = [
    {
      label: 'Home Page',
      key: '/',
    },
    {
      label: 'Insights',
      key: '/insights',
    },
    {
        label: 'Profile Page',
        key: '/profile',
    },
]
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}


const { Title, Paragraph, Text} = Typography;

const  api=axios.create({
    baseURL:'http://127.0.0.1:8000/'
})

function InsightsPage(props) {
    const [diagram, setDiagram] = useState("/Energy_HexaponicsLayout3.jpg");
    const [proximity, setProximity] = useState()
    const [forecasts, setForecasts] = useState()
    const [lastMinute, setLastMinute] = useState()

    if(proximity!=null){
        series[0]=proximity[0]["distance_00"]
    }
    
    
    // const [input, setInput] = useState()
    const navigate = useNavigate();
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key);
      };
    
    const onChange = (key) => {
        console.log(key);
        if (key == 1) {
            setDiagram("/Energy_HexaponicsLayout3.jpg")
        } else if (key == 2) {
            setDiagram("/Water_HexaponicsLayout3.jpg")
        } else if (key == 3) {
            setDiagram("/HexaponicsProximityLayout3.jpg")
        }
    };
    // setInput(require("./input.json"));
    // var proximity = null
    const pullData = () => {
        // let momentObj = moment(date + time, "YYYY-MM-DDLT");
        console.log(moment().diff(lastMinute, 'minutes'))
        if (lastMinute == null || moment().diff(lastMinute, 'minutes') >= 5) {
            setLastMinute(moment())
            let combined = moment().format("YYYY-MM-DD[T]HH:mm:ss");
            let weatherURL =
            "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=" +
            encodeURIComponent(combined);
                fetch(weatherURL)
                .then((res) => res.json())
                .then(
                    (result) => {
                    var forecasts = [];
                    // console.log(result);
                    if (result.message === "invalid datetime format") {
                        setForecasts([]);
                        forecasts = [];
                    } else {
                        setForecasts(result.items[0].forecasts);
                        forecasts = result.items[0].forecasts;
                    }
        
                    //   setLocations(
                    //     forecasts.map((forecast) => {
                    //       return { value: forecast.area };
                    //     })
                    //   );
                    },
        
                    (error) => {
                    console.log("Error Getting Results");
                    }
                );
            }
        }

    useEffect(() => {
        api.get('index?format=json').then(res=>{
            setProximity(res.data.data)
            pullData()
            
            console.log("proximity", proximity)
            // graphData=res.data;
            // setGraphData(res.data)
            // console.log("graphdata",graphData);
        })
        
    })

    // const forceUpdate = useForceUpdate();
    // console.log("proximity:", proximity)
    return (
        <div>
                <Layout style={{minHeight:"100vh"}}>
                {/* <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['/insights']}
                        items={items}
                        onClick={onClick}
                    />
                </Header> */}
                    <Content className='content'>
                        
                    <Tickets eInData={input} eOutData={output} wPhData={pH} wSaltData={salt}/>
                    <p/>
                        <Row>
                        <Col span={8}>
                        <Row>
                        <Card size="large" hoverable={true}>
                            <div>
                            <img src={diagram} alt="image" style={{width:"100%"}}/>
                            </div>
                        </Card>
                        </Row>
                        <Row>
                            <WeatherDisplay
                            selectedValue={"Changi"}
                            forecasts={forecasts}
                            />
                        </Row>
                        </Col>
                        <Col span={2}/>
                        <Col span={14}>
                            <Tabs defaultActiveKey="1" onChange={onChange}>
                                <TabPane tab="Energy" key="1">
                                    <Row className='padding'>
                                    <Col span={11}>
                                        <Card title="Energy Input" size="large" hoverable={true}>
                                            <Graph data={input} x={'Time'} y={'Input'}/>
                                        </Card>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Card title="Energy Output" size="large" hoverable={true}>
                                            <Graph data={output} x={'Time'} y={'Output'}/>
                                        </Card>
                                    </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Water" key="2">
                                    <Row className='padding'>
                                    <Col span={11}>
                                        <Card title="Water pH" size="large" hoverable={true}>
                                            <Graph data={pH} x={'Time'} y={'pH'}/>
                                        </Card>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Card title="Water Salinity" size="large" hoverable={true}>
                                            <Graph data={salt} x={'Time'} y={'Salt'}/>
                                        </Card>
                                    </Col>
                                    </Row>
                                </TabPane>
                                
                                <TabPane tab="Proximity" key="3">
                                    <Row className='padding'>
                                        <Col span={11}>
                                            
                                            <Card title="Proximity" size="large" hoverable={true} style={{content:"black"}}>
                                            <div >
                                            <div style={{}}>
                                            <Chart options={options} series={series} type="polarArea" />
                                            
                                            </div>
                                            <div style={{width:"30%",marginTop:"-58%",marginBottom:"40%",marginLeft:"36.5%"}}>
                                            <Hexagon
                                                style={{stroke: '#42873f'}}
                                            />
                                            </div>
                                            </div>
                                            </Card>
                                            
                                        </Col>
                                        <Col span={1}></Col>
                                        <Col span={11}>
                                            {/* <Row> */}
                                            <Card title="Proximity Visual" size="large" hoverable={true}>
                                                <Graph data={proximity} x={'Time'} y={'distance_00'}/>
                                            </Card>
                                            {/* </Row>
                                            <Row> */}
                                            <Card title="Proximity Visual" size="large" hoverable={true}>
                                                <Graph data={proximity} x={'Time'} y={'distance_01'}/>
                                            </Card>
                                            {/* </Row> */}
                                        </Col>
                                    </Row>
                                </TabPane>
                            </Tabs>
                        </Col>
                        </Row>
                        
                    </Content>
                </Layout>
        </div >
    );
}

export default InsightsPage;