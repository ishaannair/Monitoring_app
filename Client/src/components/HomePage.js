import React, { useState, useEffect, useRef } from 'react';
import Navbarfinal from './Navbar';
import { Button, Layout, Row, Col } from 'antd';
import moment from "moment";
import { Content } from 'antd/lib/layout/layout';


function HomePage(props) {
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
                <Row className='row' gutter={16}>
                    {/* <Col span={12}> */}
                    <Button className='button-test' shape='round'>Data and Reports</Button>
                    {/* </Col> */}
                    {/* <Col span={12}> */}
                    <Button className='button-test' >Platform Tracking</Button>
                    {/* </Col> */}
                    {/* <Col span={12}> */}
                    <Button className='button-test' >Blog Posts</Button>
                    {/* </Col> */}
                    {/* <Col span={12}> */}
                    <Button className='button-test' >User Profile</Button>
                    {/* </Col> */}
                </Row>
            </div>
        </div >
    );
}

export default HomePage;