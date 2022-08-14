import React, { Component, useEffect, useState } from "react"
import styled from "styled-components"
import { Row, Col, Divider, Card, Statistic, Typography, Button } from 'antd';
import "../index.css";
const { Title } = Typography

const RiskBars = (props) => {
    const [highRisk, sethighRisk] = useState([])
    const [medRisk, setmedRisk] = useState([])
    const [totalarr, settotal] = useState([])

   useEffect(() => {
        
        getSoldiers()
        
    }, [props.soldier_data])

    const getSoldiers = () => {
    if (props.soldier_data!== undefined && props.soldier_data.length!==0){
        var high = []
        var mid = []
        var total = []
      

        console.log(props.soldier_data)

        var soldiers = props.soldier_data;

        for (let soldier = 0; soldier < soldiers.length; soldier++) {
            if (soldiers[soldier]["attributes"]["risk_level"] == 1) {
                high.push(soldiers[soldier]);
                total.push(soldiers[soldier]);
            } else if (soldiers[soldier]["attributes"]["risk_level"] == 2) {
                mid.push(soldiers[soldier]);
                total.push(soldiers[soldier]);
            } else {
                total.push(soldiers[soldier]);
            }
        }

        console.log(high, mid, total);

        settotal(total)
        setmedRisk(mid)
        sethighRisk(high)
        
        }
    }

   

    const displayHighRisk = () => {
        var high = highRisk;
        return high.length;
    }

   const displayMedRisk = () => {
        var med = medRisk;
        return med.length;
    }

    const displayTotal = () => {
        var total = totalarr;
        return total.length;
    }

    
        

    return (
        <div className="site-statistic-demo-card">
            <Row gutter={8}>
                <Col span={6}>
                    <Card className="risk-card" bordered={false}
                        style={{
                            borderRadius: "13px",
                            overflow: "hidden",
                        }}
                        bodyStyle={{
                            backgroundColor: '#D15842',
                        }}>
                        <Statistic
                            className="Statistic"
                            title={<Title style={{ color: '#FFFFFF' }} level={3}>High Risk</Title>}
                            value={displayHighRisk()}
                            precision={0}
                            valueStyle={{
                                color: '#FFFFFF',
                                fontWeight: 'bold',
                                fontSize: '26px'
                            }}

                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="risk-card" bordered={false}
                        style={{
                            borderRadius: "13px",
                            overflow: "hidden",
                        }}
                        bodyStyle={{ backgroundColor: '#FFC145' }}>
                        <Statistic
                            title={<Title style={{ color: '#FFFFFF' }} level={3}>Mid Risk</Title>}
                            value={displayMedRisk()}
                            precision={0}
                            valueStyle={{
                                color: '#FFFFFF',
                                fontWeight: 'bold',
                                fontSize: '26px'
                            }}

                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="risk-card" bordered={false}
                        style={{
                            borderRadius: "13px",
                            overflow: "hidden",
                        }}
                        bodyStyle={{ backgroundColor: '#EFEFEF' }}>
                        <Statistic
                            title={<Title style={{ color: '#404040' }} level={3}>Total</Title>}
                            value={displayTotal()}
                            precision={0}
                            valueStyle={{
                                color: '#404040',
                                fontWeight: 'bold',
                                fontSize: '26px'
                            }}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
    
}

// const styles = StyleSheet.create({
//     image: {
//         width: 168,
//         height: 108,
//         marginHorizontal: Spacing.XSMALL,
//         borderRadius: 8,
//     },
// });

const DashboardMidSectionWrapper = styled.div`
font-size: 30px;
color: #00FFFF
`;



export default RiskBars;