import React, { useEffect, useRef }  from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { renderToString } from "react-dom/server";
import { Button, Layout, Row, Col, Menu } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";
import Dino from '../components/dino.png'

// define a generatePDF function that accepts a tickets argument
const generatePDF = (tickets) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Id", "Title", "Issue", "Status", "Closed on"];
  const tableColumn2 = ["Id", "Title", "Issue", "Status", "Closed on"];
  // define an empty array of rows
  const tableRows = [];
  const tableRows2 = [];

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
    tableRows2.push(ticketData);
  });
  
  // doc.autoTable(tableColumn, tableRows, { startY: 20 });
  // doc.save();
  // doc.autoTable(tableColumn, tableRows, { startY: 20 });
  var headRows = function() {
    return [{
      id: "ID",
      name: "Name",
    }];
  };

  var bodyRows = function(rowCount) {
    rowCount = rowCount || 10;
    let body = [];

    for (var i = 1; i <= rowCount; i++) {
      body.push({
        id: i,
        name: "Name " + i
      });
    }

    return body;
  }

  var headerFooter = function() {
    // Header
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.setFont('normal');
    if (base64Img) {
        doc.addImage(Dino, 'JPEG', 15, 15, 10, 10);
    }
    doc.text("Report for: " + selectedDate, 15 + 15, 22);

    // Footer
    var str = "Page " + doc.internal.getNumberOfPages()
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
        str = str + " of " + totalPagesExp;
    }
    doc.setFontSize(10);

    // jsPDF 1.4+ uses getWidth, <1.4 uses .width
    var pageSize = doc.internal.pageSize;
    var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    doc.text(str, 15, pageHeight - 10);
  }

  var totalPagesExp = "{total_pages_count_string}";
  var base64Img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEXMzMyWlpaqqqq3t7exsbGcnJy+vr6jo6PFxcUFpPI/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMCOCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII='
  const selectedDate = new Date().toDateString()
  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    didDrawPage: headerFooter,
    margin: {top: 30}
  });
  doc.autoTable({
    head: [tableColumn2],
    body: tableRows2,
    didDrawPage: headerFooter,
    margin: {top: 30}
  });
  // doc.autoTable(tableColumn, tableRows, { startY: 20 });
  // doc.autoTable(tableColumn, tableRows, { startY: 100 });
  const date = Date().split(" ");
  // // we use a date string to generate our filename.
  const dateStr = date[0] + "_" + date[1] + "_" + date[2] + "_" + date[3] + "_" + date[4];
  // // ticket title. and margin-top + margin-left
  // doc.text("Closed tickets within the last one month.", 14, 15);
  // doc.addImage(Dino, 'png', 10, 78, 12, 15)
  // // we define the name of our PDF file.
  doc.save(`Monthly_Report_${dateStr}.pdf`);
};

export default generatePDF;