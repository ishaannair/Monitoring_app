import React, { useState, useEffect } from "react";
import { Row, Col, Card, Image } from "antd";
import '../styles/result.css';
// import "../App.css";
import rain from "../rain.png";
import partcloud from "../partcloud.png";
import cloudy from "../cloudy.png";
import sun from "../sun.png";
import thunderstorm from "../thunderstorm.png";
import moon from "../crescent-moon.png";
import mooncloud from "../mooncloud.png";
import wind from "../wind.png";

function WeatherDisplay({ forecasts, selectedValue }) {
  const [cardBackground, setCardBack] = useState("#ffffff");
  const [cardTextColor, setCardTextColor] = useState("#000000");
  const [cardImage, setCardImage] = useState(sun);
  const [cardForecast, setCardForecast] = useState("None");

  useEffect(() => {

    // Adjusts the weather display image, background, and text based on the data obtained
    if (forecasts === undefined) {
      setCardBack("#ffffff");
      setCardTextColor("#000000");
      setCardImage(sun);
    }
    else if (selectedValue != null) {
      let forecast = forecasts.find(
        (forecast) => forecast.area === selectedValue
      )?.forecast;

      if (forecast === undefined) {
        setCardBack("#ffffff");
        setCardTextColor("#000000");
        setCardImage(sun);
      } else if (forecast === "Fair (Night)") {
        setCardBack("#1B2430");
        setCardTextColor("#ffffff");
        setCardImage(moon);
      } else if (forecast === "Partly Cloudy (Day)") {
        setCardBack("#4b595e");
        setCardTextColor("#ffffff");
        setCardImage(partcloud);
      } else if (forecast === "Partly Cloudy (Night)") {
        setCardBack("#4b595e");
        setCardTextColor("#ffffff");
        setCardImage(mooncloud);
      } else if (forecast === "Fair (Day)") {
        setCardBack("#bdf7ff");
        setCardTextColor("#4b595e");
        setCardImage(sun);
      } else if (forecast === "Cloudy") {
        setCardBack("#4b595e");
        setCardTextColor("#ffffff");
        setCardImage(cloudy);
      } else if (forecast === "Light Rain") {
        setCardBack("#6393a4");
        setCardTextColor("#ffffff");
        setCardImage(rain);
      } else if (forecast === "Showers") {
        setCardBack("#4c6972");
        setCardTextColor("#ffffff");
        setCardImage(rain);
      } else if (forecast === "Thundery Showers") {
        setCardBack("#091A31");
        setCardTextColor("#ffffff");
        setCardImage(thunderstorm);
      } else if (forecast === "Fair & Warm") {
        setCardBack("#bdf7ff");
        setCardTextColor("#4b595e");
        setCardImage(sun);
      } else if (forecast === "Moderate Rain") {
        setCardBack("#4c6972");
        setCardTextColor("#ffffff");
        setCardImage(rain);
      } else if (forecast === "Light Showers") {
        setCardBack("#6393a4");
        setCardTextColor("#ffffff");
        setCardImage(rain);
      } else if (forecast === "Passing Showers") {
        setCardBack("#6393a4");
        setCardTextColor("#ffffff");
        setCardImage(rain);
      } else if (forecast === "Windy") {
        setCardBack("#808080");
        setCardTextColor("#ffffff");
        setCardImage(wind);
      } else if (forecast === "Heavy Thundery Showers with Gusty Winds") {
        setCardBack("#091A31");
        setCardTextColor("#ffffff");
        setCardImage(thunderstorm);
      }
      setCardForecast(forecast);
    } else {
      setCardBack("#ffffff");
      setCardTextColor("#000000");
      setCardImage(sun);
    }
  }, [selectedValue, forecasts]);

  return (
    <div>
      <Row
        align="middle"
        style={{
          marginTop: "5%",
          fontFamily: "pompiere",
          fontSize: "x-large",
        }}
      >
        {/* Weather Forecast: */}
      </Row>
      <Row align="middle" style={{ padding: "5px" }}>
        <Col span={24} align="middle">
          <Card
          width={"100%"}
            style={{
              fontFamily: "pompiere",
              fontSize: "x-large",
              color: cardTextColor,
              background: cardBackground,
              border: true,
              borderColor: "#4b595e",
              textAlign: "middle",
              // height: "100%",
            }}
          >
            <Image src={cardImage} width={"25%"} />
            <p />
            <p>{cardForecast}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default WeatherDisplay;
