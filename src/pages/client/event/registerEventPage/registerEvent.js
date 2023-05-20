import React, { useState } from 'react'
import './registerEvent.css'
import {Link} from 'react-router-dom'
import VueSweetalert2 from "sweetalert2";
import Axios from "axios";
const  RegisterEvent=()=> {

  let formData = new FormData();
   
  const onFileChange = (e) =>{
   console.log(e.target.files[0])
   if(e.target && e.target.files[0]){
     formData.append('file', e.target.files[0]);
   }
  }


  const [registerEvent_ID,setregisterEvent_ID]= useState("");
  const [full_Name,setfull_Name]= useState("");
  const [NIC,setNIC]= useState("");
  const [passport_No,setpassport_No]=useState("");
  const [country,setcountry]= useState("");
  const [email,setemail]= useState("");
  const [Phone,setPhone]= useState("");
  const [gender,setgender]= useState("");
  const [No_of_guests,setNo_of_guests]= useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [VacancySearch, setSearch] = useState("");
  //const [vacancy, setVacancy] = useState([]);
  const [listofRegisterEvents, setListofRegisterEvents] = useState([]);


  
    
  const handleSubmit = (e) => {


    Axios.post(
      'https://v2.convertapi.com/upload',
      {formData}
    ).then(res => {
      console.log(res);
    })
    .catch(error =>{
      console.log(error);
    })

    e.preventDefault();
    setFormErrors(validate());
    sub();
    setIsSubmit(true);
    
  };



  

  const validate=()=>{
    const errors = {};
  const emailModel = /\S+@\S+\.\S+/;
  const nameModel = /^[a-zA-Z]+$/
  var mobiles =/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/
  

    

   
    if(!full_Name){
      errors.full_Name = "Full name is required!";
     
  }
  if(!passport_No){
    errors.passport_No = "passport_No is required!";
  }
  if(!country){
    errors.country = "country is required!";
  }

  if(!Phone){
    errors.Phone = "Phone number is required!";
  }else if(Phone.length !==10){
    errors.Phone = "Phone number is invalid";
  }
  if(!NIC){
    errors.NIC = "NIC is required!";
  }else if(NIC.length !==10){
    errors.NIC = "NIC is invalid";
  }
  
  if(!email){
    errors.email = "Email is required!";
  }else if (!emailModel.test(email)) {
    errors.email = "Please Enter a valid email";
  
}
  if(!gender){
    errors.gender = "gender is required!";
  }
 
  if(!No_of_guests){
    errors.No_of_guests= "This is required!";
  }
  
  
    return errors;
  }
  const sub =() => {
   
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      Registerevent();
     
    }
  }
  const Registerevent = () => {
    Axios.post("http://localhost:8000/api/register/event", {
      registerEvent_ID,
      full_Name,
      NIC,
      passport_No,
      country,
      email,
      Phone,
      gender,
      No_of_guests
}).then((response) => {
    setListofRegisterEvents([
        ...listofRegisterEvents,
        { 
          registerEvent_ID,
      full_Name,
      NIC,
      passport_No,
      country,
      email,
      Phone,
      gender,
      No_of_guests
        },
    ]);
}); 
VueSweetalert2.fire({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 1000,
  icon: 'success',
  title: 'Succesfully Registered for Event',
}).then(function () {
// Redirect the user
window.location.href = "/client/eventhome/home";
});
};
   





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
    <input type="text"  class="form-control" id="fnametext"
    value={full_Name}
    onChange={(e) => { setfull_Name(e.target.value); }}
    />
     <p class="alert-txt">{formErrors.full_Name}</p>
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">NIC</label>
    <input type="text"    class="form-control" id="regaddress"
     value={NIC}
     onChange={(e) => { setNIC(e.target.value); }}/>
     <p class="alert-txt">{formErrors.NIC}</p>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">PassportNo</label>
    <input type="text"    class="form-control" id="regaddress"
    value={passport_No}
    onChange={(e) => { setpassport_No(e.target.value); }}/>
       <p class="alert-txt">{formErrors.passport_No}</p>
  </div> 
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">Country</label>
    <input type="text"    class="form-control" id="regaddress" 
       value={country}
       onChange={(e) => { setcountry(e.target.value); }}/>
        <p class="alert-txt">{formErrors.country}</p>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="email"  class="form-control" id="regemail" placeholder="@gamil.com"
     value={email}
     onChange={(e) => { setemail(e.target.value); }}/>
          <p class="alert-txt">{formErrors.email}</p>
  
  </div>
  <div class="col-md-4">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="regphone" 
    value={Phone}
    onChange={(e) => { setPhone(e.target.value); }}/>
    <p class="alert-txt">{formErrors.Phone}</p>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">No of Guests</label>
    <select id="inputState" class="form-select"  value={gender}
    onChange={(e) => { setgender(e.target.value); }}>
      <option selected>Choose...</option>
      <option>female</option>
      <option>male</option>
     

    </select>
    <p class="alert-txt">{formErrors.gender}</p>
  </div>
  
  <div class="col-md-4">
    <label for="inputState" class="form-label">No of Guests</label>
    <select id="inputState" class="form-select"  value={No_of_guests}
    onChange={(e) => { setNo_of_guests(e.target.value); }}>
      <option selected>Choose...</option>
      <option>2</option>
      <option>4</option>
      <option>6</option>
      <option>More</option>

    </select>
    <p class="alert-txt">{formErrors.No_of_guests}</p>
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
    <button type="button"  class="btn btn-primary" onClick={handleSubmit}>Register</button>
   
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
<Link to="/client/eventhome" className="btn btn-primary" id='findmore'>
           Find more
          </Link>
</div>
</>
  )
}

export default RegisterEvent;