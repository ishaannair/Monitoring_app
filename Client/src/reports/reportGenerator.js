import jsPDF from "jspdf";
import "jspdf-autotable";
import { renderToString } from "react-dom/server";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";
import AgriArk from '../components/AgriArk.png'

// define a generatePDF function that accepts a tickets argument
const generatePDF = (energyInTickets, energyOutTickets, waterPhTickets, waterSaltTickets) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const energyInColumns = ["Time", "Input"];
  const energyOutColumns = ["Time", "Output"];
  const waterPhColumns = ["Time", "pH"];
  const waterSaltColumns = ["Time", "Salt"];

  // define an empty array of rows
  const energyInRows = [];
  const energyOutRows = [];
  const waterPhRows = [];
  const waterSaltRows = [];

  var ref = document.getElementById("test");
  
  console.log(energyInTickets)
  console.log(energyOutTickets)
  console.log(waterPhTickets)
  console.log(waterSaltTickets)
  // for each ticket pass all its data into an array
  energyInTickets.forEach(ticket => {
    const ticketData = [
      ticket.Time,
      ticket.Input
    ];
    // push each tickcet's info into a row
    energyInRows.push(ticketData);
  });
  
  energyOutTickets.forEach(ticket => {
    const ticketData = [
      ticket.Time,
      ticket.Output
    ];
    // push each tickcet's info into a row
    energyOutRows.push(ticketData);
  });

  waterPhTickets.forEach(ticket => {
    const ticketData = [
      ticket.Time,
      ticket.pH
    ];
    // push each tickcet's info into a row
    waterPhRows.push(ticketData);
  });

  waterSaltTickets.forEach(ticket => {
    const ticketData = [
      ticket.Time,
      ticket.TDS
    ];
    // push each tickcet's info into a row
    waterSaltRows.push(ticketData);
  });

  var headerFooter = function() {
    // Header
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.setFont('normal');
    if (base64Img) {
        doc.addImage(AgriArk, 'JPEG', 15, 15, 10, 10);
    }
    doc.text("Seaform Report for: " + selectedDate, 15 + 15, 22);

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
    head: [energyInColumns],
    body: energyInRows,
    didDrawPage: headerFooter,
    margin: {top: 30}
  });
  doc.autoTable({
    head: [energyOutColumns],
    body: energyOutRows,
    didDrawPage: headerFooter,
    margin: {top: 30}
  });
  doc.autoTable({
    head: [waterPhColumns],
    body: waterPhRows,
    didDrawPage: headerFooter,
    margin: {top: 30}
  });
  doc.autoTable({
    head: [waterSaltColumns],
    body: waterSaltRows,
    didDrawPage: headerFooter,
    margin: {top: 30}
  });

  const date = Date().split(" ");
  // // we use a date string to generate our filename.
  const dateStr = date[0] + "_" + date[1] + "_" + date[2] + "_" + date[3] + "_" + date[4];
  // // ticket title. and margin-top + margin-left
  // // we define the name of our PDF file.
  doc.save(`Monthly_Report_${dateStr}.pdf`);
};

export default generatePDF;