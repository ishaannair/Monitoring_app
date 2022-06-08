import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate } from "react-router-dom";
import Navbarfinal from './Navbar';
import { Button, Layout, Row, Col } from 'antd';
import moment from "moment";
import { Content } from 'antd/lib/layout/layout';

import CanvasJSReact from '../canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function InsightsPage(props) {
    function toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
    const options = {
        theme: "light2",
        animationEnabled: true,
        title:{
            text: "Energy Generated"
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }],
        axisX: {
            title: "States"
        },
        axisY: {
            title: "kWh in",
            titleFontColor: "#6D78AD",
            lineColor: "#6D78AD",
            labelFontColor: "#6D78AD",
            tickColor: "#6D78AD"
        },
        axisY2: {
            title: "kWh out",
            titleFontColor: "#51CDA0",
            lineColor: "#51CDA0",
            labelFontColor: "#51CDA0",
            tickColor: "#51CDA0"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "spline",
            name: "kWh in",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 1), y: 120 },
                { x: new Date(2017, 1, 1), y: 135 },
                { x: new Date(2017, 2, 1), y: 144 },
                { x: new Date(2017, 3, 1), y: 103 },
                { x: new Date(2017, 4, 1), y: 93 },
                { x: new Date(2017, 5, 1), y: 129 },
                { x: new Date(2017, 6, 1), y: 143 },
                { x: new Date(2017, 7, 1), y: 156 },
                { x: new Date(2017, 8, 1), y: 122 },
                { x: new Date(2017, 9, 1), y: 106 },
                { x: new Date(2017, 10, 1), y: 137 },
                { x: new Date(2017, 11, 1), y: 142 }
            ]
        },
        {
            type: "spline",
            name: "kWh out",
            axisYType: "secondary",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0.#",
            dataPoints: [
                { x: new Date(2017, 0, 1), y: 100 },
                { x: new Date(2017, 1, 1), y: 105 },
                { x: new Date(2017, 2, 1), y: 102 },
                { x: new Date(2017, 3, 1), y: 105 },
                { x: new Date(2017, 4, 1), y: 100 },
                { x: new Date(2017, 5, 1), y: 103 },
                { x: new Date(2017, 6, 1), y: 100 },
                { x: new Date(2017, 7, 1), y: 107 },
                { x: new Date(2017, 8, 1), y: 120 },
                { x: new Date(2017, 9, 1), y: 92 },
                { x: new Date(2017, 10, 1), y: 120 },
                { x: new Date(2017, 11, 1), y: 137 }
            ]
        }]
    }

    return (
        <div>
            <Navbarfinal />
            <div>
                <Row>
                    <CanvasJSChart options = {options} 
			        	onRef={ref => this.chart = ref}
			        />
                </Row>
            </div>
        </div >
    );
}

export default InsightsPage;