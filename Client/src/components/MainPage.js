import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate } from "react-router-dom";
import { Content, Header } from 'antd/lib/layout/layout';
import { Button, Layout, Row, Col, Typography, Card, Space, Tabs, Menu, Carousel } from 'antd';
import axios from 'axios'; 
import Graph from './Graph';
import '../styles/result.css';
import Tickets from '../reports/Tickets';
var input = require("./input.json");
// var graphData=require("./input.json");
var graphData=JSON.parse(localStorage.getItem("graph"));
var output = require("./output.json");
var salt = require("./salt.json");
var pH = require("./pH.json");


const { TabPane } = Tabs;

const contentStyle = {
    height: '65vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'trasparent',
};

const onChange = (key) => {
    console.log(key);
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

    api.get('view-chart?format=json').then(res=>{
        console.log("backend data",res.data);
        graphData=res.data;
         console.log("graphdata",graphData);
    })
    
    const forceUpdate = useForceUpdate();
    console.log("graphdata",graphData);
    return (
        <div>
            {/* <Navbarfinal /> */}
                <Layout style={{height:"100%"}}>
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
                        <Tickets/>
                        <Tabs defaultActiveKey="1" onChange={onChange}>
                            <TabPane tab="Energy" key="1">
                                <Carousel afterChange={onChange} dotPosition={"top"}>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <Card title="Energy Input" size="large" hoverable={true} style={{height: "100%", width: "100%"}}>
                                                <Graph data={input} x={'Time'} y={'Input'} style={{height: "100%", width: "100%"}}/>
                                            </Card></h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <Card title="Energy Output" size="large" hoverable={true}>
                                                <Graph data={output} x={'Time'} y={'Output'}/>
                                            </Card></h3>
                                    </div>
                                </Carousel>
                            </TabPane>
                            <TabPane tab="Water" key="2">
                                <Carousel afterChange={onChange} dotPosition={"top"}>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <Card title="pH" size="large" hoverable={true} style={{height: "100%", width: "100%"}}>
                                                <Graph data={pH} x={'Time'} y={'pH'} style={{height: "100%", width: "100%"}}/>
                                            </Card></h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <Card title="Salt Content" size="large" hoverable={true}>
                                                <Graph data={salt} x={'Time'} y={'Salt'}/>
                                            </Card></h3>
                                    </div>
                                </Carousel>
                            </TabPane>
                            <TabPane tab="Proximity" key="3">
                            Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                    </Content>
                </Layout>
        </div >
    );
}

export default InsightsPage;