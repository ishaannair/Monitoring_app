import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate } from "react-router-dom";
import { Button, Layout, Row, Col, Tabs, Menu, Form, Input, Select, DatePicker, message, Upload } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Graph from './Graph';
import NavBar from './NewNav';
import '../styles/result.css';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Background from "./background2.jpg"

var input = require("./input.json");
var output = require("./output.json");
var salt = require("./salt.json");
var pH = require("./pH.json");

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

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

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
  
    const isLt2M = file.size / 1024 / 1024 < 2;
  
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
  
    return isJpgOrPng && isLt2M;
};

function ProfilePage(props) {
    const navigate = useNavigate();
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key);
      };
    
    const [componentDisabled, setComponentDisabled] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [buttonText, setButtonText] = useState('Edit Details');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
          setLoading(true);
          return;
        }
    
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
          });
        }
    };

    const uploadButton = (
    <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div
        style={{
            marginTop: 8,
        }}
        >
        Upload
        </div>
    </div>
    );
    
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    
    const enableForm = () => {
        if (componentDisabled == true) {
            setButtonText("Save Details")
            setComponentDisabled(false);
        } else {
            setButtonText("Edit Details")
            setComponentDisabled(true);
        }
    }

    const onChangeName = (e) => {
        console.log(e.target.value)
        setName(e.target.value);
      };

    const onChangeEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);
      };
    
    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
        setDate(dateString);
      }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="65">+65</Option>
          </Select>
        </Form.Item>
      );

    return (
        <div>
            <Layout style={{height:"100vh", backgroundImage: `url(${Background})`}}>
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['/profile']}
                        items={items}
                        onClick={onClick}
                    />
                </Header>
                <Content className='content' style={{alignItems: "center"}}>
                    <Col span={24} align="middle">
                        <Button className='button-test button-test2' shape="circle" style={{ color: "#6AA4B0", background: "#ffffff", width: "30vh", fontSize: '5vh', height: '30vh', verticalAlign: 'middle', border: true, borderColor: 'black' }}>
                            Dino Chia
                        </Button>
                    </Col>
                    {/* Form used to edit User Data */}
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            disabled: componentDisabled,
                        }}
                        style={{alignItems: 'centre'}}
                        onValuesChange={onFormLayoutChange}
                        disabled={componentDisabled}
                        >
                        <Form.Item label="Name">
                            <Input allowClear value={name} onChange={onChangeName} />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input allowClear value={email} onChange={onChangeEmail} />
                        </Form.Item>
                        <Form.Item label="Date of Birth">
                            <DatePicker value={date} onChange={onChangeDate} />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                        >
                            <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '100%',
                            }}
                            allowClear onChange={onChange} />
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </div >
    );
}

export default ProfilePage;