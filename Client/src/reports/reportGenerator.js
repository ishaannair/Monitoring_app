import React, { useEffect, useRef }  from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { renderToString } from "react-dom/server";
import { Button, Layout, Row, Col, Menu } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";
import Tester from "../components/Tester";
import Dino from "../components/dino.png"

const items = [
  {
    label: 'Home Page',
    key: '/',
  },
  {
    label: 'Insights',
    key: 'insights',
  },
  {
      label: 'Profile Page',
      key: 'profile',
  },
]

// define a generatePDF function that accepts a tickets argument
const generatePDF = (tickets) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Id", "Title", "Issue", "Status", "Closed on"];
  // define an empty array of rows
  const tableRows = [];

  var ref = document.getElementById("test");
  
  // for each ticket pass all its data into an array
  tickets.forEach(ticket => {
    const ticketData = [
      ticket.id,
      ticket.title,
      ticket.request,
      ticket.status,
      // called date-fns to format the date on the ticket
      format(new Date(ticket.updated_at), "yyyy-MM-dd")
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });

  const word = "Test String"
      // doc.autoTable(tableColumn, tableRows, { startY: 100 });
  let cache = `<Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "40vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }}>
  ${word}</Button>`;

  // console.log(typeof(ref))

  // startY is basically margin-top
  // const Prints = () => (
  //   <div>
  //     ${word}
  //   </div>
  // )
  // let cache = renderToString(<Prints/>)
  doc.html(ref, {
    callback: function (doc) {
      doc.save();
    }
 });

  // doc.addImage(Dino, 'png', 10, 78, 12, 15)
  // doc.autoTable(tableColumn, tableRows, { startY: 20 });
  // doc.save();
  // doc.autoTable(tableColumn, tableRows, { startY: 20 });
  

  // doc.autoTable(tableColumn, tableRows, { startY: 20 });
  // doc.autoTable(tableColumn, tableRows, { startY: 100 });
  const date = Date().split(" ");
  // // we use a date string to generate our filename.
  const dateStr = date[0] + "_" + date[1] + "_" + date[2] + "_" + date[3] + "_" + date[4];
  // // ticket title. and margin-top + margin-left
  // doc.text("Closed tickets within the last one month.", 14, 15);
  // // we define the name of our PDF file.
  // doc.save(`Monthly_Report_${dateStr}.pdf`);

  // return (
  //   <div id="test">
  //     <Layout style={{height:"100vh"}}>
  //       <Header>
  //           <div className="logo" />
  //           <Menu
  //               color='black'
  //               theme="dark"
  //               mode="horizontal"
  //               defaultSelectedKeys={['/']}
  //               items={items}
  //           />
  //       </Header>
  //       <Content>
  //           <Row align="middle">
  //               <Col span={12} align="middle">
  //                   <Button className='button-test button-test2' shape="circle" style={{ color: "#ffffff", background: "#6AA4B0", width: "30vh", fontSize: '5vh', height: '30vh', verticalAlign: 'middle', border: true, borderColor: 'black' }}>
  //                       User Profile
  //                       {/* <img  src={Dino} style={{height: "100%", width: "100%", borderRadius: "10000%"}}/> */}
  //                   </Button>
  //               </Col>
  //               <Col span={12} align="middle">
  //                   <Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "40vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }}>
  //                       Data and Reports
  //                   </Button>
  //               </Col>
                
  //           </Row>
  //           <Row align="middle">
  //           <Col span={8} align="middle">
  //                   <Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "30vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }} >
  //                       Platform Tracking
  //                   </Button>
  //               </Col>        
  //           <Col span={8} align="middle">
  //                   <Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "30vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }} >
  //                       Blog Posts
  //                   </Button>
  //               </Col>
  //           <Col span={8} align="middle">
  //                   <Button className='button-test button-test2' style={{ color: "#ffffff", background: "#6AA4B0", width: "30vw", textAlign: 'center', fontSize: '5vh', margin: "10px", border: true, borderColor: "#2B4560", borderRadius: 10, height: '40vh' }} >
  //                       User Profile
  //                   </Button>
  //               </Col>
  //           </Row>
  //       </Content>
  //   </Layout>
  //   </div>
  // );
};

export default generatePDF;