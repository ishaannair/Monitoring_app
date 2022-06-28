import React, {Component, useState, useEffect, useRef } from 'react';
import Navbarfinal from './Navbar';
import { Button, Layout, Row, Col, Card, Avatar, Image } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import moment from "moment";
import { useNavigate, Link } from "react-router-dom";
import { AntDesignOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Dino from "./dino.png"
import axios from 'axios'; 
// import JSON;

const HomePage = (props) => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        }
        // this.props.history.push('/CreateQuestion') ;
    const  api=axios.create({
        baseURL:'http://127.0.0.1:8000/'
    })

    api.get('view-chart?format=json').then(res=>{
        console.log(res.data);
        localStorage.setItem("graph", JSON.stringify(res.data));
    })
    
    


    const routeChange = () =>{ 
        let path = `test`; 
        navigate(path);
        }
        
            return (
        <div>
            <Navbarfinal />
            <div>
                <Layout style={{height: "690px"}}>
                    <Content>
                        <Row>
                            <Col span={12} offset={12}>
                                <Button className='button-test button-test2' style={{ width: "97%", textAlign: 'center', fontSize: 40, margin: "10px", border: true, borderColor: 'black', borderRadius: 10, height: '300px' }} onClick={() =>{ navigate("insights")}}>
                                    Data and Reports
                                </Button>
                            </Col>
                            
                        </Row>
                        <Row>
                        <Col span={8}>
                                <Button className='button-test button-test2' style={{ width: "95%", textAlign: 'center', fontSize: 40, margin: "10px", border: true, borderColor: 'black', borderRadius: 10, height: '300px' }} >
                                    Platform Tracking
                                </Button>
                            </Col>        
                        <Col span={8}>
                                <Button className='button-test button-test2' style={{ width: "95%", textAlign: 'center', fontSize: 40, margin: "10px", border: true, borderColor: 'black', borderRadius: 10, height: '300px' }} >
                                    Blog Posts
                                </Button>
                            </Col>
                            <Col span={8}>
                                <Button className='button-test button-test2' style={{ width: "95%", textAlign: 'center', fontSize: 40, margin: "10px", border: true, borderColor: 'black', borderRadius: 10, height: '300px' }} >
                                    User Profile
                                </Button>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        </div >
    );
}

export default HomePage;