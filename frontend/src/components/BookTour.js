import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BookTour() {

    const Navigate = useNavigate()
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [country, setcountry] = useState("");
    const [contactNo, setcontactNo] = useState("");
    const [email, setemail] = useState("");
    const [date, setdate] = useState("");

    function sendData(e){
      e.preventDefault();
      
      const newBookingTOUR ={
     
        fName,
        lName,
        country,
        contactNo,
        email,
        date

      }

      axios.post("http://localhost:8070/bookingTOUR/bookTOUR",newBookingTOUR).then((res)=>{
        alert("Booking Added")
        console.log(res.data)
        Navigate('/all-table/bookin')
        
      }).catch((err)=>{
        alert(err)
      })
    }

    return(

      <div className="container"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <p></p>
        <div className="container" style={{ backgroundColor: 'white', border: '3px solid gray', borderRadius: '20px' }}>
<br/>
      <h2>Book Tours</h2>

      <br/>

      <form className="row g-3 needs-validation" onSubmit={sendData} >
              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter first name" onChange={(e)=>{

                     setfName(e.target.value);

                  } } required/>

                  
              </div>

              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter last name" onChange={(e)=>{

                     setlName(e.target.value);

                  } } required/>

                  
              </div>

              
              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Country</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter country" onChange={(e)=>{

                     setcountry(e.target.value);

                  } } required/>
                  
              </div>


              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Contact No</label>
                  <input type="telephone" maxLength={10} minLength={10} className="form-control" id="validationCustom01" placeholder="Enter contact No" onChange={(e)=>{

                      setcontactNo(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Email</label>
                  <input type="email" className="form-control" id="validationCustom01" placeholder="Enter Email" onChange={(e)=>{

                      setemail(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Date</label>
                  <input type="Date" className="form-control" id="validationCustom01" placeholder="Enter date" onChange={(e)=>{

                      setdate(e.target.value);

                  } } required/>

              </div>
              

              <div className="col-3">
                  <button className="btn btn-primary" type="submit" style={{background:'#FFC831', color:'black', border: '1px', borderRadius: '20px', width: '145px', height: '45px',}}>
                  <a href="/all-table/bookin" validate="true"></a>
                    Book Now</button><br/><br/>
              </div>
      </form>

  </div>
  <p></p>
  </div>
    )
}