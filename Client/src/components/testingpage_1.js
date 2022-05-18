import React, {Component, useState, useEffect, useRef } from 'react';
import Navbarfinal from './Navbar';
import { Button, Layout, Switch, Table } from 'antd';
import moment from "moment";

class testingpage_1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }


    }
    columns = [
        {
            title: "Addr.",
            dataIndex: "location",
            key: "location",
            width: "10%",
        },
        {
            title: "Expiry",
            dataIndex: "rectifyDate",
            key: "rectifyDate",
            width: "12%",
            sorter: (a, b) => {
                if (a.rectifyDate > b.rectifyDate) return 1;
                else return -1;
            },
            defaultSortOrder: "descend",
            render: (text) =>
                moment(text, "YYYY-MM-DDTHH:mm:ss.SSS").format("DD/MM/YY"),
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            width: "14%",
            sorter: (a, b) => {
                if (a.date > b.date) return 1;
                else return -1;
            },
            render: (text) =>
                moment(text, "YYYY-MM-DDTHH:mm:ss.SSS").format("DD/MM/YY"),
        },
        {
            title: "Tenant ID",
            dataIndex: "tenantID",
            key: "itenantID",
            width: "20%",
        },
        {
            title: "Inst.",
            dataIndex: "institution",
            key: "institution",
            width: "15%",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            width: "10%",
        },
        {
            title: "Audit Score",
            dataIndex: "total_score",
            key: "total_score",
            fixed: "right",
            width: "10%",
            sorter: (a, b) => {
                if (a.score > b.score) return 1;
                else return -1;
            },
        },
    ];
    render() {
    return (
        <div>
           <div >testing 2</div>
           <Button onClick={() => {this.props.history.push('/')}}>Test 2</Button>
 
        </div>
    );
}}

export default testingpage_1;