import React, { useEffect, useState, useRef } from "react";
import generatePDF from "./reportGenerator";
import TicketsComponent from "./TicketsComponent";
import { Button } from 'antd';
import '../styles/result.css';
var inTick = require("./tickets.json");

const Tickets = () => {
  
  const [tickets, setTickets] = useState([]);
  
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
    setTickets(inTick)
    };
    getAllTickets();
  }, []);

    const reportTickets = tickets.filter(ticket => ticket.status === "completed");
  
  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          {
            <Button
              className="btn btn-primary"
              onClick={() => generatePDF(reportTickets)}
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