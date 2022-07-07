import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import '../styles/result.css';

const items = [
    {
      label: 'Home Page',
      key: '/',
    },
    {
      label: 'Insights',
      key: '/insights',
    },
]


function NavBar(props) {
    const [currentPage, setPage] = useState('');
    useEffect(() => {
        setPage(props.page)
      }, [])

    const navigate = useNavigate();
    const onClick = (e) => {
        console.log('click ', e);
        setPage(e.key)
        navigate(e.key);
      };

    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[currentPage]}
                items={items}
                onClick={onClick}
            />
        </Header>
    )
}

export default NavBar;