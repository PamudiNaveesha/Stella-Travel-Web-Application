// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './test.css'


//import AddTours from "./AddTours";

// Edittour Component
const Viewmore= (props) => {

	const {id} = useParams();
	const Navigate = useNavigate()
	const [tourName, settourName] = useState("");
    const [tourType, settourType] = useState("");
    const [location, setlocation] = useState("");
    const [amount, setamount] = useState("");
    const [noOfPeople, setnoOfPeople] = useState("");
    const [description, setdescription] = useState("");
    const [image, setImage] = useState("");
    const [formValues, setFormValues] = useState({

    tourName:"",
    tourType:"",
    location:"", 
    amount:"",
    noOfPeople:"",
    description:"",
    image:""
});

    
	


// Load data from server and reinitialize tour form  
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/tour/get/${id}`
    
    
	)
	.then((res) => {
		const {tourName, tourType, location, amount, noOfPeople, description, image} = res.data.tour;
		console.log(tourName)
		console.log(tourType)
		console.log(location)
		console.log(amount)
        console.log(noOfPeople)
        console.log(description)
        console.log(image)
		//setFormValues({...formValues,tourName, tourType, location, amount, description, image });
	    settourName(tourName)
        settourType(tourType)
        setlocation(location)
	    setamount(amount)
        setnoOfPeople(noOfPeople)
	    setdescription(description)
	    setImage(image)


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
    Navigate('/bookTOUR')
	
   }
// Return tour form
return (
<div className="container">
    <p></p>
    <h1 className="text-dark text-center">View More Details</h1>
    <hr/>
<div className="row">   

    <div className="col-md-6">
    <div className="image">
        <img src={image} className="avatar img-circle img-thumbnail" alt="avatar"/>
        </div>
        <div className="text-center">
            
        </div>
    </div>
<div className="col-md-6 personal-info">
       


       

        <form className="form" onSubmit={sendData} >
            <br/><br/>
               
                <h4 className="user-name">{tourName}</h4><br/>
                <h6 className="user-name">Tour Type: {tourType}</h6>
                <h6 className="user-name">Location: {location}</h6>
                <h6 className="user-name">Amount: LKR {amount}</h6>
                <h6 className="user-name">Duration: {noOfPeople} day</h6><br/>
                <h6 className="user-name">Description About {tourName}  <br/><br/>{description}</h6>
             
   
            <div className="d-grid col-8 mx-10">
                <br/><br/>
                <a href="http://localhost:3000/bookTOUR" >
                <button className="btn btn-primary" type="submit" style={{background:'#FFC831', color:'black', border: '1px', borderRadius: '30px', width: '250px', height: '50px',}}>Request for Booking</button></a> 
            </div>
        <br/><br/><br/>
        </form>

       

    </div>
    </div>

</div>

);
}

export default Viewmore;