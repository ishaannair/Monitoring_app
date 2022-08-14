import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Content, Header } from "antd/lib/layout/layout";
import {
  Layout,
  Row,
  Col,
  Typography,
  Card,
  Tabs,
  Menu,
} from "antd";
import moment from "moment";
import axios from "axios";
import Graph from "./Graph";
import "../styles/result.css";
import Hexagon from "react-hexagon";
import Chart from "react-apexcharts";
import Tickets from "../reports/Tickets";
import WeatherDisplay from "./WeatherDisplay";
import ProxGraph from "./ProxGraph";
import Background from "./background2.jpg"

var input = require("./input.json");
var output = require("./output.json");
var pH = require("./pH.json")
const { TabPane } = Tabs;

const color = [
  "#c1c1c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#0F0F0F",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
  "#c0c0c1",
];
const series = [
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100,
];

const options = {
  chart: {
    width: 380,
    type: "polarArea",
  },

  fill: {
    opacity: 0.5,
    colors: color,
  },
  stroke: {
    width: 1,
    show: true,
    opacity: 0,
    colors: color,
  },
  yaxis: {
    show: true,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 1,
      },
      spokes: {
        strokeWidth: 1,
      },
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: "dark",
      shadeIntensity: 1,
    },
  },
};

const items = [
  {
    label: "Home Page",
    key: "/",
  },
  {
    label: "Insights",
    key: "/insights",
  },
  {
    label: "Profile Page",
    key: "/profile",
  },
];
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // An function that increment 👆🏻 the previous state like here
  // is better than directly setting `value + 1`
}

const { Title, Paragraph, Text } = Typography;

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

let endpoints = [
    'http://127.0.0.1:8000/index',
    'http://127.0.0.1:8000/sendPHBalancer',
    'http://127.0.0.1:8000/sendEnergyPower',
  ];

function InsightsPage(props) {
  const [diagram, setDiagram] = useState("/Energy_HexaponicsLayout3.jpg");
  const [proximity, setProximity] = useState();
  const [phData, setPhData] = useState();
  const [energyData, setEnergyData] = useState(input);
  const [forecasts, setForecasts] = useState();
  const [lastMinute, setLastMinute] = useState();

  if (proximity != null) {
    // series[0] = proximity[0]["distance_00"];
    // series[1] = proximity[0]["distance_01"];
    // series[2] = proximity[0]["distance_02"];
  }

  // const [input, setInput] = useState()
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };

  const onChange = (key) => {
    console.log(key);
    if (key == 1) {
      setDiagram("/Energy_HexaponicsLayout3.jpg");
    } else if (key == 2) {
      setDiagram("/Water_HexaponicsLayout3.jpg");
    } else if (key == 3) {
      setDiagram("/HexaponicsProximityLayout3.jpg");
    }
  };
  const pullData = () => {
    // console.log(moment().diff(lastMinute, "minutes"));

    if (lastMinute == null || moment().diff(lastMinute, "minutes") >= 5) {
      setLastMinute(moment());
      let combined = moment().format("YYYY-MM-DD[T]HH:mm:ss");
      let weatherURL =
        "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=" +
        encodeURIComponent(combined);
      // Code to pull the weather data from the government's open source API
      fetch(weatherURL)
        .then((res) => res.json())
        .then(
          (result) => {
            var forecasts = [];
            // console.log(result);
            if (result.message === "invalid datetime format") {
              setForecasts([]);
              forecasts = [];
            } else {
              setForecasts(result.items[0].forecasts);
              forecasts = result.items[0].forecasts;
            }
          },

          (error) => {
            console.log("Error Getting Results");
          }
        );
    }
  };

  useEffect(() => {
    
    // Database APIs are called to pull the various sensor data from the database and store it for display in the graphs
    api.get("index?format=json").then((res) => {
        // console.log(res.data.data)
      setProximity(res.data.data);
      pullData();
    });
    api.get("sendPHBalancer?format=json").then((res) => {
        setPhData(res.data.data)
        // console.log("pH", res.data.data);
    });
    api.get("sendEnergyPower?format=json").then((res) => {
        setEnergyData(res.data.data)
        // console.log("Energy", res.data.data);
    });
  });

  return (
    <div>
      <Layout style={{ minHeight: "100vh", backgroundImage: `url(${Background})`}}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/insights"]}
            items={items}
            onClick={onClick}
          />
        </Header>
        <Content className="content">
          
          {/* Monthly Report Generator */}
          <Tickets
            eInData={input}
            eOutData={input}
            wPhData={pH}
            wSaltData={pH}
          />
          <p />
          <Row>
            <Col span={8}>
              <Row>
                <Card size="large" hoverable={true}>

                  {/* Changing diagram of the platform based on the selected graph category */}
                  <div>
                    <img src={diagram} alt="image" style={{ width: "100%" }} />
                  </div>
                </Card>
              </Row>
              <Row>

                {/* Weather Display to show the local weather at the platform. Currently it's set for "Changi" due to the initial development area */}
                <WeatherDisplay
                  selectedValue={"Changi"}
                  forecasts={forecasts}
                />
              </Row>
            </Col>
            <Col span={2} />
            <Col span={14}>

              {/* Tabs pane for the various graphs in their categories */}
              <Tabs defaultActiveKey="1" onChange={onChange} minHeight={"100vh"}>
                <TabPane tab="Energy" key="1" >
                  <Row className="padding">
                    <Col span={11}>
                      <Card title="Solar Power" size="large" hoverable={true}>
                        <Graph data={input} x={"Time"} y={"Solar"} />
                      </Card>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={11}>
                      <Card title="Wind Turbine" size="large" hoverable={true}>
                        <Graph data={input} x={"Time"} y={"Turbine"} />
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Water" key="2">
                  <Row className="padding">
                    <Col span={11}>
                      <Card title="Water pH" size="large" hoverable={true}>
                        <Graph data={pH} x={"Time"} y={"pH"} />
                      </Card>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={11}>
                      <Card
                        title="Water Salinity"
                        size="large"
                        hoverable={true}
                      >
                        <Graph data={pH} x={"Time"} y={"TDS"} />
                      </Card>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Proximity" key="3">
                  <Row className="padding">
                    <Col span={11}>
                      <Card
                        title="Proximity"
                        size="large"
                        hoverable={true}
                        style={{ content: "black" }}
                      >
                        <div>
                          <div style={{}}>
                            <Chart
                              options={options}
                              series={series}
                              type="polarArea"
                            />
                          </div>
                          <div
                            style={{
                              width: "30%",
                              marginTop: "-58%",
                              marginBottom: "40%",
                              marginLeft: "36.5%",
                            }}
                          >
                            <Hexagon style={{ stroke: "#42873f" }} />
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={11}>
                      <Card
                        title="Proximity Visual"
                        size="large"
                        hoverable={true}
                      >
                        <ProxGraph
                          data={proximity}
                          x={"Time"}
                        />
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default InsightsPage;
