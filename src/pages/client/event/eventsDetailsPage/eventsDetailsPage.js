import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import './eventDetails.css'
import Axios from "axios";

const EventDetails =()=> {

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [location, setlocation] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [image,setimage] = useState("");
  const {id} = useParams();


  useEffect(() => {
    Axios.get(`http://localhost:8000/api/event/${id}`).then(res => {
        settitle(res.data.title);
        setdescription(res.data.description);
        setstartDate(res.data.startDate);
        setlocation(res.data.location);
        setendDate(res.data.endDate);
        setimage(res.data.image);
     

        console.log(res.data);
        })		
    }, [])

  return (
    <div>
       <div className="container-fluid" id='detailscard'>
      <div className="row">
        <div className="col-md-6">
          <img
            src={image}
            alt="Related Image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>{title}</h1>
          <p>
           {description}
          </p>
          <div className='details1'>
            <label>Location</label>
          <h1>{location}</h1>
          </div>
          
          <div className='details2'>
            <div> 
              <label>start Date:</label>
            <h1>{startDate}</h1></div>
           <div><label>End Date
            </label>
            <h1>{endDate}</h1></div>
          
          </div>
          <Link to="/client/eventhome/home" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/client/eventregister/register" className="btn btn-primary" id="buttonMore">
           Register
          </Link>
        </div>
      </div>
    </div>


    </div>
  )
}

export default EventDetails;