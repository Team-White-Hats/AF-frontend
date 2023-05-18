import React from 'react'
import {Link} from 'react-router-dom'
import './eventDetails.css'

const EventDetails =()=> {
  return (
    <div>
       <div className="container-fluid" id='detailscard'>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.indoasia-tours.com/wp-content/uploads/2021/01/esala-Perahara-festival.jpg"
            alt="Related Image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>Esala Perahera Festival</h1>
          <p>
            The Esala Perahera is a grand festival celebrated with elegance and
            tradition in the city of Kandy, Sri Lanka. It is a 10-day festival,
            usually held in August, which attracts large crowds from all over
            the world.Sri Lanka has many unique and interesting festivals, but few are as sacred or as deeply ingrained in the local culture as the Esela Perehara – also called the Festival of the Tooth. This historical procession which takes place annually celebrates and pays respect to the Sacred Tooth Relic of the Lord Buddha which is usually housed in the Temple of the Tooth Relic.

The roots of the Esela Perehera stretch as far back as the 3rd century BC. During these early years, Buddhism had not yet spread across Sri Lanka and most of the local populace were actually pagan worshippers. It is believed they held ancient festivals in hopes of rain and plentiful harvests. This festival evolved into the Dalada Perehera once the Sacred Tooth Relic was brought to Sri Lanka from India. Traditionally, the Sinhalese King would ride at the head of the procession with the Tooth Relic watching over him. Following the subjugation of Sri Lanka by the British, the honour was passed onto the chief lay custodian of the relic, named the “Diyawadana Nilame”.

The procession is usually held around the same time as the Esala Full-Moon Poya Day which usually falls around July or August.
          </p>
          <div className='details1'>
          <h1>Venue:Kandy </h1>
          </div>
          
          <div className='details2'>
            <h1>start Date: 2023/04/15</h1>
          </div>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/" className="btn btn-primary" id="buttonMore">
           Register
          </Link>
        </div>
      </div>
    </div>


    </div>
  )
}

export default EventDetails;