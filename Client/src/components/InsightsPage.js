import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate } from "react-router-dom";
import Navbarfinal from './Navbar';
import { Button, Layout, Row, Col, Typography } from 'antd';
import moment from "moment";
import { Content } from 'antd/lib/layout/layout';
import Graph from './Graph';
var graphData = require("./input.json");
var output = require("./output.json");

const { Title, Paragraph, Text} = Typography;

function InsightsPage(props) {
    return (
        <div>
            <Navbarfinal />
            <div>
                <Layout>
                    <Content className='content'>
                        <Typography>
                            <Title level={2}>Energy Input</Title>
                        </Typography>
                        <Graph data={graphData} x={'Time'} y={'Input'}/>
                        <Title level={2}> </Title>
                        <Typography>
                            <Title level={2}>Energy Output</Title>
                        </Typography>
                        <Graph data={output} x={'Time'} y={'Output'}/>
                    </Content>
                </Layout>
            </div>
        </div >
    );
}

export default InsightsPage;