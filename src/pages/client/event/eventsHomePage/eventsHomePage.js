import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./eventsHomePage.css";
import Axios from "axios";

const EventsHomePage = () => {
  const [listofEvents, setListofEvents] = useState([]);
  const [EventSearch, setSearch] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:8000/api/event/all").then((res) => {
      setListofEvents(res.data);
      console.log(res.data);
    });
  }, []);

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
          <h1>Festivals and Events to Plan Your Trip Around in Sri Lanka</h1>
        </div>
        <div className="search-bar">
        <input type="text"  className="form-control col-8 me-5" onChange={(e) => { setSearch(e.target.value); }}
                            placeholder="Search by title" />
          <button>Go</button>
        </div>

        <Slider {...settings}>
          <div>
            <img
              className="imageslider"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.indoasia-tours.com/wp-content/uploads/2021/01/esala-Perahara-festival.jpg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              className="imageslider"
              src="https://www.img.urlaub-sr-lanka.info/2018/04/Kandyan-dancing-e1537351108832.jpg"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              className="imageslider"
              src="https://www.jetwingtravels.com/wp-content/uploads/bannercc12.jpg"
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              className="imageslider"
              src="https://1.bp.blogspot.com/-NRI5hiM4p9s/WrMFF3GSB8I/AAAAAAAAAGU/gdNrocaIx34CM467lS9WKQ-ntKwYQrj6ACLcBGAs/s1600/8e8d4a3d-c2b5-4362-91fc-8f8e50f61105.jpg"
              alt="Slide 5"
            />
          </div>
        </Slider>
      </div>
      <div>
        <h1 className="welcomeheading">Upcoming Events</h1>
      </div>
      <div id="cards_landscape_wrap-2">
        {listofEvents &&
          listofEvents
            .filter((value) => {
              if (EventSearch === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(EventSearch.toLowerCase())
              ) {
                return value;
              }
            })
            .map((eventsModel) => {
              return (
                <div class="container">
                  <div class="row">
                    <div
                      class="col-xs-12 col-sm-6 col-md-3 col-lg-3 " id="cardwidth"
                      key={eventsModel._id}
                    >
                      <a href="">
                        <div class="card-flyer">
                          <div class="text-box">
                            <div class="image-box">
                              <img
                                src={eventsModel.image}
                                alt=""
                              />
                            </div>
                            <div class="text-container">
                              <h6>{eventsModel.title}</h6>
                              <p>
                               {eventsModel.description}
                              </p>
                              <Link to= {`/client/event/${eventsModel._id}`}> <button type="button" className="btn" style={{ borderRadius:"20px", paddingLeft:"10px", width:"90px" }}>
           <i className="" aria-hidden="true"></i>
           SHOW MORE
        </button></Link>
                            
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
     
              );
            })}
      </div>

      <div>
      <h1 className="welcomeheading">Trending Events</h1>
      </div>

      <div id="cards_landscape_wrap-2">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="https://media.timeout.com/images/101852735/750/562/image.jpg" alt="" />
                                </div>
                                <div class="text-container">
                                    <h6>LAKSHA 2021</h6>
                                    <p>The laksha industry is one of the oldest and traditional industries in Sri Lanka. According to the folklore, Laksha artisans were among the eighteen castes who came to this country when the Sri Maha Bodhi arrived. .</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="https://www.dailynews.lk/sites/default/files/styles/node-detail/public/news/2019/06/18/z_p04-Shaping.jpg?itok=cahmbX_7" alt="" />
                                </div>
                                <div class="text-container">                                    
                                    <h6>POTTERY CULT 2023</h6>
                                    <p>Mainly clay is available in the areas of Nattandiya, Dediyawela, Boralasgamuwa, and Meetiyagoda. Most of the traditional pottery villages are found near these clay deposits text ever since the 1500s.</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="https://www.adithyalankaholidays.com/uploads/2NZibEPAll.jpeg" alt="" />
                                </div>

                                <div class="text-container">
                                    <h6>SURFING FEDERATION</h6>
                                   <p>Surfing Federation of Sri Lanka is the only organization in Sri Lanka recognized by the International Surfing Association (ISA) with the rights and responsibilities to govern Surfing in all its forms</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="https://www.srilankaembassy.fr/sites/default/files/sinhala-and-tamil-new-year.jpg" alt="" />
                                </div>
                                <div class="text-container">
                                    <h6>Sinhala & Tamil New Year</h6>
                                   <p>Usually around mid-April every year the entire country is enveloped in a festive atmosphere to mark the Lunar New Year. Amongst all festivals in Sri Lanka, the Sinhala & Tamil New Year</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default EventsHomePage;

