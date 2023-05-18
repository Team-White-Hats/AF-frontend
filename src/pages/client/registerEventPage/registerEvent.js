import React from 'react'
import './registerEvent.css'
import {Link} from 'react-router-dom'
const  RegisterEvent=()=> {
  return (
  <>
       <div>
<h1 className='headlineRegister'>Register for Upcomming Events &<br/> Immerse Yourself in ,<br/> Sri Lankan Culture and Tradition</h1>
</div>
<div class="container" id="registercontainer">
<div class="registrationforevent"><h2> Event Registration</h2></div>
<form  class="row g-3">

<div class="col-12" id="a1">
    <div class="form-check" id="regformcheck">
      <input class="form-check-input" type="checkbox" id="gridCheck1"/>
      <label class="form-check-label" for="gridCheck" id="gridcheck2">
        Will You be attending to this event?
      </label>
    </div>
  </div>


  <div class="col-md-6" id="fname1">
    <label for="inputEmail4" class="form-label">Full Name</label>
    <input type="text"  class="form-control" id="fnametext"/>
   
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">NIC</label>
    <input type="text"    class="form-control" id="regaddress"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">PassportNo</label>
    <input type="text"    class="form-control" id="regaddress"/>
  </div> 
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">Country</label>
    <input type="text"    class="form-control" id="regaddress"/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="email"  class="form-control" id="regemail" placeholder="@gamil.com"/>
  
  </div>
  <div class="col-md-4">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="regphone" />
 
  </div>
  <div class="col-md-6" id="fname1">
    <label for="inputEmail4" class="form-label">Gender</label>
    <input type="text"  class="form-control" id="fnametext"/>
   
  </div>
  
  <div class="col-md-4">
    <label for="inputState" class="form-label">No of Guests</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>More</option>

    </select>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck" id="gridcheck3">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="button"  class="btn btn-primary">Register</button>
   
  </div>
 
</form>
</div>

<div>
   
   <img  className='image1'  src="https://1.bp.blogspot.com/-NRI5hiM4p9s/WrMFF3GSB8I/AAAAAAAAAGU/gdNrocaIx34CM467lS9WKQ-ntKwYQrj6ACLcBGAs/s1600/8e8d4a3d-c2b5-4362-91fc-8f8e50f61105.jpg"/>
</div>

<div>
    <img className='image2' src="https://media.timeout.com/images/103943968/image.jpg"/>
</div>

<div>
    <img className='image3' src="https://live.staticflickr.com/8383/8623747428_97377f7323_b.jpg"/>
</div>
<div>
<Link to="/" className="btn btn-primary" id='findmore'>
           Find more
          </Link>
</div>
</>
  )
}

export default RegisterEvent;