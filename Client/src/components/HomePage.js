import React, {Component, useState, useEffect, useRef } from 'react';
import Navbarfinal from './Navbar';
import { Button, Layout, Row, Col, Menu, message, Upload } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import moment from "moment";
import { useNavigate, Link } from "react-router-dom";
import NavBar from './NewNav';
import Dino from "./dino.png"
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


const HomePage = (props) => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        }
        // this.props.history.push('/CreateQuestion') ;
    
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key);
        };
    const  api=axios.create({
        baseURL:'http://127.0.0.1:8000/'
    })

    api.get('view-chart?format=json').then(res=>{
        console.log(res.data);
        localStorage.setItem("graph", JSON.stringify(res.data));
    })
    api.get('index?format=json').then(res=>{
        console.log(res.data);
        localStorage.setItem("proximity", JSON.stringify(res.data));
    })
    


    const routeChange = () =>{ 
        let path = `test`; 
        navigate(path);
        }
        
            return (
        <div>
            {/* <Navbarfinal /> */}
                <Layout style={{height:"100vh"}}>
                    {/* <NavBar page={"/"}/> */}
                    <Header>
                        <div className="logo" />
                        <Menu
                            color='black'
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['/']}
                            items={items}
                            onClick={onClick}
                        />
                    </Header>
                    <Content>
                        <Row align="middle">
                            <Col span={12} align="middle">
                                <Button className='button-test button-test2' shape="circle" style={{ color: "#ffffff", background: "#6AA4B0", width: "30vh", fontSize: '5vh', height: '30vh', verticalAlign: 'middle', border: true, borderColor: 'black' }} onClick={() =>{ navigate("profile")}}>
                                    User Profile
                                    {/* <img  src={Dino} style={{height: "100%", width: "100%", borderRadius: "10000%"}}/> */}
                                </Button>
                            </Col>
                            <Col span={12} align="middle">
                                <Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "40vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }} onClick={() =>{ navigate("insights")}}>
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

export default HomePage;