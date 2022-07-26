import React, {Component, useState, useEffect, useRef } from 'react';
import { Button, Layout, Row, Col, Menu, message, Upload } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { useNavigate, Link } from "react-router-dom";
import '../styles/result.css';
import axios from 'axios'; 
// import JSON;
const items = [
    {
      label: 'Home Page',
      key: '/',
    },
    {
      label: 'Insights',
      key: 'insights',
    },
    {
        label: 'Profile Page',
        key: 'profile',
    },
]


const Tester = (props) => {
        
            return (
        <div>
            <Layout style={{height:"100vh"}}>
                <Header>
                    <div className="logo" />
                    <Menu
                        color='black'
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['/']}
                        items={items}
                    />
                </Header>
                <Content>
                    <Row align="middle">
                        <Col span={12} align="middle">
                            <Button className='button-test button-test2' shape="circle" style={{ color: "#ffffff", background: "#6AA4B0", width: "30vh", fontSize: '5vh', height: '30vh', verticalAlign: 'middle', border: true, borderColor: 'black' }}>
                                User Profile
                                {/* <img  src={Dino} style={{height: "100%", width: "100%", borderRadius: "10000%"}}/> */}
                            </Button>
                        </Col>
                        <Col span={12} align="middle">
                            <Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "40vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }}>
                                Data and Reports
                            </Button>
                        </Col>
                        
                    </Row>
                    <Row align="middle">
                    <Col span={8} align="middle">
                            <Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "30vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }} >
                                Platform Tracking
                            </Button>
                        </Col>        
                    <Col span={8} align="middle">
                            <Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "30vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }} >
                                Blog Posts
                            </Button>
                        </Col>
                    <Col span={8} align="middle">
                            <Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "30vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }} >
                                User Profile
                            </Button>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </div >
    );
}

export default Tester;