import React from "react";
import "./home.css"
import BigVide from '../../assets/video/Sri Lankan Culture (online-video-cutter.com).mp4'
function Homepage(){

return(
  <div>
    <div className="landingpage">

<video src={BigVide} autoPlay muted loop class="video-bg" />
<div className="bg-overlay"></div>

<div className="navbar">
    <div className="menu">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>

<div className="home-text">
    <h1 id="h1">Visit SriLanka</h1>
    <p id="para">Come live out your ideal vacation with us</p>
</div>

<div className="home-btn">Explore</div>

</div>

</div>
)



}

export default Homepage;