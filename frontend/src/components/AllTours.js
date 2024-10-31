import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './All.css'

function TourTable() {

    const [tours, setTours] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

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

//search

useEffect(() => {
    setFilteredResults(

        tours.filter((e) => {
        return e.tourType.toLowerCase().includes(searchInput.toLowerCase())
        })
    )
  }, [searchInput, tours])

    //endsearch

    

    return (
        <div className='background'>
        <div className='container2'>
    
           <div class="d-flex justify-content-center h-100">
    
           <div class="searchbar">
              <input class="search_input" type="text" placeholder="Find Your Favourite Tours..." onChange={(e) => setSearchInput(e.target.value)}/>
              <a href="#" class="search_icon"><i class="fa"></i></a>
            </div>
    
          </div>
        </div>
        <div className="container3">
    <section className="section about-section gray-bg" id="about">
        <p className="text-center font-weight-bold display-6 font-italic text-secondary" >Discover your most exciting tours....</p>
        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px",}}>The most exciting destinations, experiences and traveler faves to check out now.</p>
        {tours && filteredResults.map(tour => (
        <div className="row align-items-center justify-content-around flex-row-reverse">
            <div className="col-lg-7">
                <div className="about-text">
                    <h4></h4>
                <hr/>
                    <h5 className="theme-color">{tour.tourName} </h5>
                    <h6 className="dark-color" style={{color:"black"}}></h6><h6 class="dark-color">Tour Type: {tour.tourType}</h6>
                    <h6 className="dark-color">Location:   {tour.location}</h6>
                    <h6 className="dark-color">Amount:   {tour.amount}</h6>
                    <h6 className="dark-color">Duration:   {tour.noOfPeople} day</h6>                 
                    <div className="btn-bar">
                     <td> <Link to={"/viewTOUR/"+tour._id}><button  className='btn btn-primary' style={{background:'#FFC831', color:'black', border: '1px', borderRadius: '30px', width: '150px', height: '50px',}}>View More</button></Link> </td>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center ">
                <div className="about-img">
                    <img className='photo' src={tour.image}/>
                </div>
            </div>
        </div>
    
    
    ))}
    </section>
    
    </div>
    </div>
    )
    }
    export default TourTable;