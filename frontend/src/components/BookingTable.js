import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
//import './AllTours.css';

function BookingTable() {

    const [bookingsTOUR, setBookingsTOUR] = useState([]);

    useEffect(() => {
        function getBookingsTOUR() {
            axios.get("http://localhost:8070/BookingTOUR/").then((res) => {
                setBookingsTOUR(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getBookingsTOUR();
    }, [bookingsTOUR])


    const deleteBookingTOUR = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/BookingTOUR/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Booking Rejected")
                // getBookingsTOUR()
            }
        })
}    }

    return (
        <div>
        <br/>
        <center><h3>New Bookings</h3></center> <br/>
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>No.</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Country</th>
                    <th scope="col">ContactNo</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookingsTOUR.map((BookingTOUR , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{BookingTOUR.fName}</td>
                                <td>{BookingTOUR.lName}</td>
                                <td>{BookingTOUR.country}</td>
                                <td>{BookingTOUR.contactNo}</td>
                                <td>{BookingTOUR.email}</td>
                                <td>{BookingTOUR.date}</td>
                                <td> <Link to={"update/"+BookingTOUR._id}><button  className='btn btn-warning'>Confirm</button></Link> </td>
                                <td> <button onClick={()=>{deleteBookingTOUR(BookingTOUR._id)}} className='btn btn-danger'>Reject</button> </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        </div>
      
    )
}

export default BookingTable;