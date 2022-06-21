import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate } from "react-router-dom";
import Navbarfinal from './Navbar';
import { Button, Layout, Row, Col, Typography, Card, Space } from 'antd';
import moment from "moment";
import { Content } from 'antd/lib/layout/layout';
import Graph from './Graph';
import 'antd/dist/antd.css';
var input = require("./input.json");
var output = require("./output.json");
var salt = require("./salt.json");
var pH = require("./pH.json");

const { Title, Paragraph, Text} = Typography;

function InsightsPage(props) {
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