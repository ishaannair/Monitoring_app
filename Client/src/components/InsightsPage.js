import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate } from "react-router-dom";
import Navbarfinal from './Navbar';
import { Content, Header } from 'antd/lib/layout/layout';
import { Button, Layout, Row, Col, Typography, Card, Space, Tabs, Menu  } from 'antd';
import moment from "moment";
import axios from 'axios'; 
import Graph from './Graph';
import NavBar from './NewNav';
import '../styles/result.css';
import Hexagon from 'react-hexagon'
import { test_hexagon } from './platform/test_hexagon';
import Chart from 'react-apexcharts';

import HexGridDemo from "./platform/Grid.js";
var input = require("./input.json");
// var graphData=require("./input.json");
var graphData=JSON.parse(localStorage.getItem("graph"));
var output = require("./output.json");
var salt = require("./salt.json");
var pH = require("./pH.json");
// var proximity= require("./Proximity.json")
var proximity=JSON.parse(localStorage.getItem("proximity")).data;
const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};
const color=['#c1c1c1', '#c0c0c1', '#c0c0c1','#c0c0c1', '#c0c0c1', '#c0c0c1','#c0c0c1', '#c0c0c1', '#c0c0c1','#c0c0c1', '#0F0F0F', '#c0c0c1','#c0c0c1', '#c0c0c1', '#c0c0c1','#c0c0c1', '#c0c0c1', '#c0c0c1']
const series= [100, 100, 100, 100, 100,100,100, 100, 100, 100, 55,100,100, 100, 100, 100, 100,100];
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

    const navigate = useNavigate();
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key);
      };

    api.get('index?format=json').then(res=>{
        console.log("backend data new",proximity);
        // proximity=res.data;
        graphData=res.data;
         console.log("graphdata",graphData);
    })
    const forceUpdate = useForceUpdate();
    // console.log("graphdata",graphData);
    return (
        <div>
            {/* <Navbarfinal /> */}
                <Layout style={{height:"100vh"}}>
                    {/* <NavBar page={"/insights"}/> */}
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['/insights']}
                        items={items}
                        onClick={onClick}
                    />
                </Header>
                    <Content className='content'>
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
                            Content of Tab Pane 3
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
                                    <Card title="Proximity" size="large" hoverable={true}>
                                    <div>
                                    <img src="/HexaponicsLayout.jpg" alt="image" style={{width:"100%"}}/>
                                    </div>
                                    </Card>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={11}>
                                    <Card title="Proximity Visual" size="small" hoverable={true}>
                                        <Graph data={proximity} x={'Time'} y={'Distance_left'}/>
                                    </Card>
                                    <Card title="Proximity Visual" size="large" hoverable={true}>
                                        <Graph data={proximity} x={'Time'} y={'Distance_right'}/>
                                    </Card>
                                </Col>
                                </Row>
                            </TabPane>
                        </Tabs>
                    </Content>
                </Layout>
        </div >
    );
}

export default InsightsPage;