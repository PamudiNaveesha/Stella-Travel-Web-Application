import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ReportTour() {

    //generate pdf-----------------------------

    let docToPrint = React.createRef();

    const printDocument = () => {
      const input = docToPrint.current;
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [600, 900]
        });
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("Tour Report_2021-2-3.pdf");
      });
    };
  
    //end generate pdf-----------------------------

    const [tours, setTours] = useState([]);

    useEffect(() => {
        function getTours() {
            axios.get("http://localhost:8070/Tour/").then((res) => {
                setTours(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getTours();
    }, [tours])


    const deleteTour = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/Tour/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Tour deleted")
                // getTours()
            }
        })
}    }

return (
        
      <div ref={docToPrint}>
      <table class="table">
          <thead>
              <tr>
                  <th scope='col'>No.</th>
                  <th scope="col">Tour Name</th>
                  <th scope="col">Tour Type</th>
                  <th scope="col">Location</th>
                  <th scope="col">Amount</th>
                  <th scope="col">No Of People</th>
                  <th scope="col">Description</th>
              </tr>
          </thead>
          <tbody>
              {
                  tours.map((Tour , index) => {
                      return (
                          <tr key={index}>
                              <th scope="row">{index+1}</th>
                              <td>{Tour.tourName}</td>
                              <td>{Tour.tourType}</td>
                              <td>{Tour.location}</td>
                              <td>{Tour.amount}</td>
                              <td>{Tour.noOfPeople}</td>
                              <td>{Tour.description}</td>
                              
                          </tr>
                      )
                  })
              }
          <br/><br/><br/>
          <button className="newCustomer_btn" onClick={printDocument} 
          style={{ backgroundColor: "green",font: "15px", borderRadius: "5px", height: "50px", 
          borderColor: "green", color: "white",}}>
            
          Download PDF
          </button>
          <br/><br/><br/>

          </tbody>
      </table>
      </div>
    
  )
}

export default ReportTour;
