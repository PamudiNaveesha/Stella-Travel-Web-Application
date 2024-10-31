import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './AllTours.css';

function TourTable() {

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
        
      <div className='tb'>

        <a href="http://localhost:3000/addTOUR"><button class="abc" type="button">Add Tours</button> </a> <br/> 
        <br/><br/>
       
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>No.</th>
                    <th scope="col">Tour Name</th>
                    <th scope="col">Tour Type</th>
                    <th scope="col">Location</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Description</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
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
                                <td> <Link to={"/all-table/updateTOUR/"+Tour._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                                <td> <button onClick={()=>{deleteTour(Tour._id)}} className='btn btn-danger'>Delete</button> </td>
                            </tr>
                        )
                    })
                }
            <br/><br/>
            <a href="/reportTour" >
            <button className="gen_btn" type="submit" style={{ backgroundColor: "green",font: "15px", borderRadius: "5px", height: "70px", 
          borderColor: "green", color: "white",}} >
            Generate pdf
            </button></a>
            <br/><br/><br/>

            </tbody>
        </table>
        </div>
    )
}

export default TourTable;