import React, { useState, useEffect, useRef } from 'react';
import Navbarfinal from './Navbar';
import { Button, Layout, Switch, Table } from 'antd';
import moment from "moment";


function HomePage(props) {
    const columns = [
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
    return (
        <div>
            <Navbarfinal />
            {/* <Button>Test</Button>
            <Layout>
                <div className="table">
                    <h3
                        style={{
                            position: "absolute",
                            "margin-left": "auto",
                            "margin-right": "auto",
                            left: 0,
                            right: 0,
                            "text-align": "center",
                            float: "center",
                            "font-size": "3vh",
                        }}
                    >
                        Your Audits
                    </h3>
                    <Switch
                        defaultChecked="true"
                        checkedChildren="Ongoing"
                        unCheckedChildren="Expired"
                        size="small"
                        style={{
                            float: "right",
                            "margin-top": "2.5vw",
                        }}
                    ></Switch>
                    <Table
                        rowClassName={(record) =>
                            record.total_score < 95 ? "red" : "green"
                        }
                        columns={columns}
                        scroll={{ x: 800, y: "68vh" }}
                        style={{ "padding-top": "6vw" }}
                    />
                </div>
            </Layout> */}
        </div>
    );
}

export default HomePage;