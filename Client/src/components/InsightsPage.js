import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate } from "react-router-dom";
import Navbarfinal from './Navbar';
import { Button, Layout, Row, Col, Card, Tabs, Menu } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Graph from './Graph';
import NavBar from './NewNav';
import '../styles/result.css';
var input = require("./input.json");
var output = require("./output.json");
var salt = require("./salt.json");
var pH = require("./pH.json");


const { TabPane } = Tabs;

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

function InsightsPage(props) {
    const navigate = useNavigate();
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key);
      };

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
                            </TabPane>
                        </Tabs>
                    </Content>
                </Layout>
        </div >
    );
}

export default InsightsPage;