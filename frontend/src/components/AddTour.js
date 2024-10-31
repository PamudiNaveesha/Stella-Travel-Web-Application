import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddTour() {

    const Navigate = useNavigate()
    const [tourName, settourName] = useState("");
    const [tourType, settourType] = useState("");
    const [location, setlocation] = useState("");
    const [amount, setamount] = useState("");
    const [noOfPeople, setnoOfPeople] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState("");

    function sendData(e){
      e.preventDefault();
      
      const newTour ={
     
        tourName,
        tourType,
        location,
        amount,
        noOfPeople,
        description,
        image

      }

      axios.post("http://localhost:8070/tour/addTOUR",newTour).then((res)=>{
        alert("Tour Added")
        console.log(res.data)
        Navigate('/allTOUR-table')
        
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

        <br />
      <h2>Add New Tours</h2>

      <br/>

      <form className="row g-3 needs-validation" onSubmit={sendData} >
              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Tour Name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter tour name" onChange={(e)=>{

                     settourName(e.target.value);

                  } } required/>

                  
              </div>

              
              <div className="col-md-6">
                  <label for="validationCustom04" className="form-label">Tour Type</label>
                  <select className="form-select" id="validationCustom04" onChange={(e)=>{

                     settourType(e.target.value);

                  } } required>
                  <option selected disabled >Choose...</option>
                  <option>Adventure</option>
                  <option>Entertainment</option>
                  <option>Historical</option>
                  <option>Cultural</option>
                  <option>Scenary</option>
                  <option>Hiking</option>
                  <option>Boat Ride</option>
                  </select>
                  
              </div>


              <div className="col-md-6">
              <label for="validationCustom01" className="form-label">Location</label>
                  <input type="text" className="form-control" id="validationCustom04" placeholder="Enter location" onChange={(e)=>{

                     setlocation(e.target.value);

                  } } required/>
                  
              </div>

              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Amount</label>
                  <input type="number" className="form-control" id="validationCustom01" placeholder="Enter amount" onChange={(e)=>{

                      setamount(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Duration</label>
                  <input type="number" className="form-control" id="validationCustom01" placeholder="Enter no of people" onChange={(e)=>{

                      setnoOfPeople(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Description</label>
                  <textarea className="form-control" id="validationCustom01" rows="4" cols="100" placeholder="Enter here..." onChange={(e)=>{

                      setdescription(e.target.value);

                  } } required>
                  </textarea>
                  
              </div>
              
              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Image</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Select Image" onChange={(e)=>{

                     setimage(e.target.value);

                  } } required/>

                  
              </div>

              <div className="col-3">
                  <button className="btn btn-primary" type="submit" style={{background:'#FFC831', color:'black', border: '1px', borderRadius: '20px', width: '145px', height: '45px',}}>
                  <a href="/allTOUR-table" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                    Submit</button><br/><br/>
              </div>
      </form>

  </div>
  <p></p>
  </div>
    )
}