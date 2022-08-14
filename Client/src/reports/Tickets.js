import React, { useEffect, useState } from "react";
import generatePDF from "./reportGenerator";
import { Button } from "antd";
import "../styles/result.css";

const Tickets = (props) => {
  const [energyInTickets, setEInTickets] = useState();
  const [energyOutTickets, setEOutTickets] = useState();
  const [waterPhTickets, setWPhTickets] = useState();
  const [waterSaltTickets, setWSaltTickets] = useState();

  useEffect(() => {
    const getAllTickets = async () => {
      setEInTickets(props.eInData);
      setEOutTickets(props.eOutData);
      setWPhTickets(props.wPhData);
      setWSaltTickets(props.wSaltData);
    };
    getAllTickets();
  });

  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          {
            <Button
              className="btn btn-primary"
              onClick={() =>
                generatePDF(
                  energyInTickets,
                  energyOutTickets,
                  waterPhTickets,
                  waterSaltTickets
                )
              }
            >
              Generate Monthly Report
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default Tickets;
