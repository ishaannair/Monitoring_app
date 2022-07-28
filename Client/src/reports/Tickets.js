import React, { useEffect, useState, useRef } from "react";
import generatePDF from "./reportGenerator";
import TicketsComponent from "./TicketsComponent";
import { Button } from 'antd';
import '../styles/result.css';
var inTick = require("./tickets.json");

const Tickets = (props) => {
  
  const [energyInTickets, setEInTickets] = useState([]);
  const [energyOutTickets, setEOutTickets] = useState([]);
  const [waterPhTickets, setWPhTickets] = useState([]);
  const [waterSaltTickets, setWSaltTickets] = useState([]);
  
  // const r = useRef(null);
  // Ref.current.innerHTML = cache; 

  useEffect(() => {
    const getAllTickets = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3000/tickets");
    //     setTickets(response.data.tickets);
    //   } catch (err) {
    //     console.log("error");
    //   }
    setEInTickets(props.eInData)
    setEOutTickets(props.eOutData)
    setWPhTickets(props.wPhData)
    setWSaltTickets(props.wSaltData)
    };
    getAllTickets();
  }, []);

    // const reportTickets = tickets.filter(ticket => ticket.status === "completed");
  
  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          {
            <Button
              className="btn btn-primary"
              onClick={() => generatePDF(energyInTickets, energyOutTickets, waterPhTickets, waterSaltTickets)}
            >
              Generate Monthly Report
            </Button>
          }
        </div>
      </div>
      {/* <TicketsComponent tickets={tickets} /> */}
    </div>
  );
};

export default Tickets;