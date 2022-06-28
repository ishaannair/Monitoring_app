import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate } from "react-router-dom";
import Navbarfinal from './Navbar';
import { Button, Layout, Row, Col, Typography, Card, Space } from 'antd';
import moment from "moment";
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios'; 
import Graph from './Graph';
import 'antd/dist/antd.css';
var input = require("./input.json");
// var graphData=require("./input.json");
var graphData=JSON.parse(localStorage.getItem("graph"));
var output = require("./output.json");
var salt = require("./salt.json");
var pH = require("./pH.json");

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
    api.get('view-chart?format=json').then(res=>{
        console.log("backend data",res.data);
        graphData=res.data;
         console.log("graphdata",graphData);
    })
    const forceUpdate = useForceUpdate();
    console.log("graphdata",graphData);
    return (
        <div>
            <Navbarfinal />
            <div>
                <Layout>
                    <Content className='content'>
                        <Row>
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
                    </Content>
                </Layout>
            </div>
        </div >
    );
}

export default InsightsPage;