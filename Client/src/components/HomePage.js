import React, {Component, useState, useEffect, useRef } from 'react';
import Navbarfinal from './Navbar';
import { Button, Layout, Switch, Table, Row } from 'antd';
import moment from "moment";
import { useNavigate, Link } from "react-router-dom";


const HomePage = (props) => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        }
        // this.props.history.push('/CreateQuestion') ;
            
    const routeChange = () =>{ 
        let path = `test`; 
        navigate(path);
        }
        
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
                    <Link to="insights">
                        <Button className='button-test button-test2' onClick={() =>{ navigate("example")}}>Data and Reports</Button>
                    </Link>
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

export default HomePage;