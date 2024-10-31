// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
//import AddTour from "./AddTour";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Edittour Component
const UpdateTour = (props) => {
	const {id} = useParams();
	const Navigate = useNavigate()
	const [tourName, settourName] = useState("");
     const [tourType, settourType] = useState("");
     const [location, setlocation] = useState("");
     const [amount, setamount] = useState("");
     const [noOfPeople, setnoOfPeople] = useState("");
     const [description, setdescription] = useState("");
     const [image, setimage] = useState("");
    const [formValues, setFormValues] = useState({
  tourName:"",
  tourType:"",
  location:"",  
  amount:"",
  noOfPeople:"",
  description:"",
  image:""
});
	
//onSubmit handler
const onSubmit = (tourObject) => {
	axios
	.put(
		`http://localhost:8070/tour/updateTour/${id}`,
		tourObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("tour successfully updated");
		props.history.push("/AddTour");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize tour form
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/tour/get/${id}`
		
	)
	.then((res) => {
		const {tourName,tourType, location,  amount, noOfPeople, description, image } = res.data.tour;
		console.log(tourName)
		console.log(tourType)
		console.log(location)
		console.log(amount)
    console.log(noOfPeople)
		console.log(description)
    console.log(image)
		//setFormValues({...formValues,tourName, tourType, location,   amount, noOfPeople,  description, image });
	settourName(tourName)
	settourType(tourType)
	setlocation(location)
	setamount(amount)
  setnoOfPeople(noOfPeople)
	setdescription(description)
  setimage(image)
	})
	.catch((err) => console.log(err));
}, []);
function sendData(e){
	e.preventDefault();

	const newtour = {

	  tourName,
	  tourType,
	  location,  
	  amount,
    noOfPeople,
	  description,
    image
	}
   
	axios.put(`http://localhost:8070/tour/updateTOUR/${id}`, newtour).then((res) =>{
	  alert("Tour Updated" )
	 console.log(res.data)
	 Navigate('/allTOUR-table')

	}).catch((err)=>{
	  alert(err)
	})

   }

// Return tour form
return (
<div className="container"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <p></p>
        <div className="container" style={{ backgroundColor: 'white', border: '3px solid gray', borderRadius: '20px' }}><br/>
      <h2>Update Tour Here...</h2>

      <br/>

      <form className="row g-3 needs-validation" onSubmit={sendData} >
              <div className="col-md-12">
              <label for="tourName" className="form-label">Tour Name</label>
          <input value={tourName}type="text" className="form-control is-invalid" id="tourName" placeholder=" Tour Name" 

            onChange={(e)=>{
                     settourName(e.target.value);

                  } } required/>

                  
              </div>

              
              <div className="col-md-6">
              <label for="validationCustom04" className="form-label">Tour Type</label>
                  <select className="form-select" value={tourType} id="validationCustom04" onChange={(e)=>{
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
                  <input value={location} type="text" className="form-control" id="validationCustom04" placeholder="Enter location" onChange={(e)=>{

                     setlocation(e.target.value);

                  } } required/>
                  
              </div>

              <div className="col-md-6">
              <label for="amount" className="form-label">Amount</label>
          <input value={amount}type="text"  className="form-control" id="amount" placeholder="Enter amount"  
          
          onChange={(e)=>{
                      setamount(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-6">
              <label for="noOfPeople" className="form-label">Duration</label>
          <input value={noOfPeople}type="text"  className="form-control" id="noOfPeople" placeholder="Enter No Of People"  
          
          onChange={(e)=>{
                      setnoOfPeople(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-12">
              <label for="description" className="form-label">Description</label>
          <textarea value={description}className="form-control" id="description" placeholder="Enter description" 
          
          onChange={(e)=>{
                      setdescription(e.target.value);

                  } } required>
                  </textarea>

              </div>

              <div className="col-md-12">
                  <label for="image" className="form-label">Image</label>
                  <input value={image}type="text" className="form-control" id="image" placeholder="Select Image" onChange={(e)=>{

                     setimage(e.target.value);

                  } } required/>
              </div>
              

              <div className="col-3">
                  <button className="btn btn-primary" type="submit" style={{background:'#FFC831', color:'black', border: '1px', borderRadius: '20px', width: '145px', height: '45px',}}>
                  <a href="/" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                    Update</button><br/><br/>
              </div>
      </form>

  </div>
  <p></p>
  </div>
);
};

// Export Edittour Component
export default UpdateTour;
