import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./eventsHomePage.css";

const EventsHomePage = () => {
    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
      };
  

  return (
<>
      
<div className="slider-container">
  <div className="heroheading">
    <h1  >Festivals and Events to Plan Your Trip Around in Sri Lanka</h1>
  </div>
  <div className="search-bar">
    <input type="text" placeholder="Search" />
    <button>Go</button>
  </div>

  <Slider {...settings}>
    <div>
      <img className="imageslider" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.indoasia-tours.com/wp-content/uploads/2021/01/esala-Perahara-festival.jpg" alt="Slide 2" />
      
    </div>
    <div>
      <img className="imageslider" src="https://www.img.urlaub-sr-lanka.info/2018/04/Kandyan-dancing-e1537351108832.jpg" alt="Slide 3" />
     
    </div>
    <div>
      <img className="imageslider" src="https://www.jetwingtravels.com/wp-content/uploads/bannercc12.jpg" alt="Slide 4" />
     
    </div>
    <div>
      <img className="imageslider" src="https://1.bp.blogspot.com/-NRI5hiM4p9s/WrMFF3GSB8I/AAAAAAAAAGU/gdNrocaIx34CM467lS9WKQ-ntKwYQrj6ACLcBGAs/s1600/8e8d4a3d-c2b5-4362-91fc-8f8e50f61105.jpg" alt="Slide 5" />
      
    </div>
  </Slider>
</div>
<div>
	<h1 className="welcomeheading">Upcomming Events</h1>
</div>

	<div class="container mt-5" id="cardcontainer">
		<div class="row card-container">
			<div class="col-12 col-md-6 col-lg-4 mb-4">
				<div class="card">
					<img src="https://lk-sanmark-digitaloceanspaces-1.nyc3.digitaloceanspaces.com/16732401401629463411-Kandy-Esala-Perahera-to-continue-without-crowds-despite-quarantine-curfew-L.jpg" class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">Esela Perehera</h5>
						<p class="card-text">The land of Sri Lanka is home to many mind-boggling attractions. But irrespective of how fascinating they are, at one point or another, some of us may have felt that touring only them would add to a cliché trip experience. So, if you’re one of those who still yearn to see a lesser-seen side of Sri Lanka on your vacation, we suggest you put the popular Esala Perahera Festival on your itinerary.</p>
						<a href="#" class="btn btn-primary">Read More</a>
					</div>
				</div>
			</div>
            </div>

			<div class="col-12 col-md-6 col-lg-4 mb-4">
				<div class="card">
					<img src="https://images.tpn.to/sq/gi/in/fp/content.jpg" class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">surfing 2023</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Read More</a>
					</div>
				</div>
			</div>
      <div class="col-12 col-md-6 col-lg-4 mb-4">
				<div class="card">
					<img src="https://images.tpn.to/sq/gi/in/fp/content.jpg" class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">surfing 2023</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Read More</a>
					</div>
				</div>
			</div>
			
 </div>

 
 </>
  );
};

export default EventsHomePage;
