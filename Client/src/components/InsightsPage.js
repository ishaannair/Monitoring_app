import React, { useState, useEffect, useRef } from 'react';
import Navbarfinal from './Navbar';
import { Button, Layout, Row, Col } from 'antd';
import moment from "moment";
import { Content } from 'antd/lib/layout/layout';


function InsightsPage(props) {
    return (
        <div>
            <Navbarfinal />
            <div>
                {/* <Layout>
                    <Content style={{ padding: '0 50px' }}>
                        <Button className='button-test' >Test</Button>
                        <Button className='button-test' >Test</Button>
                    </Content>
                </Layout> */}
                <Row>
                    {/* <Col span={12}> */}
                    <Button className='button-test button-test2' >Data and Reports</Button>
                    {/* </Col> */}
                    {/* <Col span={12}> */}
                    <Button className='button-test button-test2' >Platform Tracking</Button>
                    {/* </Col> */}
                    {/* <Col span={12}> */}
                    <Button className='button-test button-test2' >Blog Posts</Button>
                    {/* </Col> */}
                    {/* <Col span={12}> */}
                    <Button className='button-test button-test2' >User Profile</Button>
                    {/* </Col> */}
                </Row>
            </div>
        </div >
    );
}

export default InsightsPage;