import React, { useEffect, useState } from 'react'
import './eventAdmin.css'
import VueSweetalert2 from "sweetalert2";
import Axios from "axios";

const EventAdmin = () => {

  const [Event_ID, setEvent_ID] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState(0);
  const [description, setdescription] = useState("");
  const [location, setlocation] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [image, setimage] = useState("");
  const [maxAttendees, setmaxAttendees] = useState("");
  const [cost, setcost] = useState("");
  const [organizer, setorganizer] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [VacancySearch, setSearch] = useState("");
  const [listofEvents, setListofEvents] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    sub();
    setIsSubmit(true);

  };


  const validate = () => {
    const errors = {};


    if (!Event_ID) {
      errors.Event_ID = "Event_ID is required!";

    }
    if (!title) {
      errors.title = "title is required!";

    }
    if (!category) {
      errors.category = "category is required!";
    }
    if (!description) {
      errors.description = "description  is required!";
    }
    if (!location) {
      errors.location = "locataion is required!";
    }
    
    if (!startDate) {
      errors.startDate = "startDate is required!";
    }
    if (!endDate) {
      errors.endDate = "endDate is required!";
    }
    if (!image) {
      errors.image = "image is required!";
    }
    if (!maxAttendees) {
      errors.maxAttendees = "maxAttendees is required!";
    }
    if (!cost) {
      errors.cost = "cost is required!";
    }
    if (!organizer) {
      errors.organizer = "organizer is required!";
    }

    return errors;
  }
  const sub = () => {

    if (Object.keys(formErrors).length == 0 && isSubmit) {
      Addevent();

    }
  }
  
const Addevent = () => {
  Axios.post("http://localhost:8000/api/event/", {
    
   title,
   category,
   description,
   location,
   startDate,
   endDate,
   image,
   maxAttendees,
   cost,
   organizer,
  }).then((response) => {
    setListofEvents([
      ...listofEvents,
      {
        
        title,
        category,
        description,
        location,
        startDate,
        endDate,
        image,
        maxAttendees,
        cost,
        organizer,
      },
    ]);
  });
  VueSweetalert2.fire({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1000,
      icon: 'success',
      title: 'Your Product details added to the System',
  }).then(function () {
    // Redirect the user
    window.location.href = "/admin/eventadmin";
  });
};

//image 
const addcoverimage= () => {
  let imgDiv = document.getElementById("imgInputDiv");

  let imgUploader = document.createElement("input");
  imgUploader.setAttribute("id", "imgUploader");
  imgUploader.setAttribute("type", "file");
  imgUploader.setAttribute("accept", "image/png, image/gif, image/jpeg");
  imgUploader.setAttribute("class", "d-none")
  imgDiv.appendChild(imgUploader);

  let imgUploaderElement = document.getElementById("imgUploader");
  console.log(imgUploaderElement);

  if (imgUploaderElement !== undefined && imgUploaderElement !== null) {
      imgUploaderElement.click();
      imgUploaderElement.addEventListener("change", () => {
          imgUploaderElement = document.getElementById("imgUploader");
          console.log(imgUploaderElement);
          if (imgUploaderElement.files[0] !== null && imgUploaderElement.files[0] !== undefined) {
              if (imgUploaderElement.files.length > 0) {
                  const fileReader = new FileReader();

                  fileReader.onload = function (event) {
                    setimage(event.target.result);
                  };

                  fileReader.readAsDataURL(imgUploaderElement.files[0]);
              }
          }
      });
  }

  document.getElementById("btnEditImg").removeAttribute("disabled");
  document.getElementById("btnImgDelete").removeAttribute("disabled");
}
  const loadEventDetails =
    (EventModel) => {
      setEvent_ID(EventModel._id);
      settitle(EventModel.title);
      setcategory(EventModel.category);
      setdescription(EventModel.description);
      setlocation(EventModel.location);
      setstartDate(EventModel.startDate);
      setendDate(EventModel.endDate);
      setimage(EventModel.image);
      setmaxAttendees(EventModel.maxAttendees);
      setcost(EventModel.cost);
      setorganizer(EventModel.organizer);


    }

  return (
    <div><div className="main_container">
      <div className="item fw-bold fs-5">Event Management</div>
      <div className="item">
        <div className="row mt-5 ps-3">
          <div className="row">
            <div className=" col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <div className="d-flex justify-content-start align-items-center">
                  <button id="btn-generate-report" className="btn me-3">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12">
              <div className="row"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5 px-3">
          <form>
            <div className="row">
              <div className="col d-flex justify-content-end align-items-center">
                <div className="col d-flex justify-content-end">
                  <div>
                  <button className="btn btnAddImg" id="btnAddImg" type="button"
                                                    onClick={() => {
                                                      addcoverimage()
                                                    }}>
                                                <i className="fa fa-plus text-white" aria-hidden="true"/>
                                            </button>
                    <button className="btn btnEditImg" id="btnEditImg" type="button">
                      <i className="fa-solid fa-pen text-white" />
                    </button>
                    <button className="btn btnImgDelete" id="btnImgDelete" type="button" >

                      <i className="fa-solid fa-trash-can d-inline text-white" />
                    </button>
                  </div>
                </div>
                <div id="imgInputDiv">
                  <div>
                    <img id="ProfileImage" className="imgDiv" src={image}
                      alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">

              <div className="col-sm-6">
                <input
                  type="text"
                  value={Event_ID}
                  className="form-control"
                  placeholder="Event Id"
                  onChange={(e) => { setEvent_ID(e.target.value); }}

                />
                <p class="alert-txt">{formErrors.Event_ID}</p>

              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  value={title}
                  className="form-control"
                  placeholder="Event Title"
                  onChange={(e) => { settitle(e.target.value); }}
                />
                <p class="alert-txt">{formErrors.title}</p>

              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <select

                  name="type"
                  value={category}
                  className="form-select"
                  aria-label="role"
                  onChange={(e) => { setcategory(e.target.value); }}

                >
                  <option selected disabled value="0" >
                    Event Category
                  </option>
                  <option value="Car">Traditional</option>
                  <option value="Van">Cultural</option>
                  <option value="Mini Van">Other</option>

                </select>
                <p class="alert-txt">{formErrors.category}</p>
              </div>

              <div className="col">
                <input
                  type="text"
                  value={location}
                  className="form-control"
                  placeholder="location"
                  onChange={(e) => { setlocation(e.target.value); }}

                />
                <p class="alert-txt">{formErrors.location}</p>
              </div>
              <div className="col">
                <input name="Dateposted"
                  value={startDate}
                  className="form-control"
                  placeholder="Start Date"
                  type="text"
                  onFocus={(e) => e.target.type = 'date'}
                  onChange={(e) => { setstartDate(e.target.value); }}
                  id="Dateposted" />

                <p class="alert-txt">{formErrors.startDate}</p>

              </div>

            </div>

            <div className="row mt-4">
              <div className="col">
                <input name="Dateposted"
                  value={endDate}
                  className="form-control"
                  placeholder="End Date"
                  type="text"
                  onFocus={(e) => e.target.type = 'date'}
                  onChange={(e) => { setendDate(e.target.value); }}
                  id="Dateposted" />
              <p class="alert-txt">{formErrors.endDate}</p>
              </div>
              <div className="col">
                <select
                  value={maxAttendees}
                  name="type"
                  className="form-select"
                  aria-label="role"
                  onChange={(e) => {setmaxAttendees(e.target.value); }}

                >
                  <option selected disabled value="0" >
                    Max Attendes
                  </option>
                  <option value="Car">100</option>
                  <option value="Van">150</option>
                  <option value="Mini Van">Other</option>

                </select>
                <p class="alert-txt">{formErrors.maxAttendees}</p>
              </div>
              <div className="col">
                <input
                value={cost}
                  className="form-control"
                  placeholder="Cost"
                  onChange={(e)=> {setcost(e.target.value); }}

                />
                    <p class="alert-txt">{formErrors.cost}</p>
              </div>
              <div className="col">

              </div>
            </div>

            <div className="row mt-4">
              <div className="col">
                <div class="form-group">
                  <input
                    class="form-control"
                    value={organizer}
                    id="exampleFormControlTextarea1"
                    rows="2"
                    placeholder="Organizer"
                    onChange={(e)=>{setorganizer(e.target.value);}}

                  />
                </div>
                <p class="alert-txt">{formErrors.organizer}</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    value={description}
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Description"
                    onChange={(e)=>{setdescription(e.target.value);}}

                  ></textarea>
                   <p class="alert-txt">{formErrors.description}</p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="d-flex justify-content-around align-items-center">
                <button
                  type="submit"
                  id="reg"
                  className="btn btnRegister "
                  onClick={handleSubmit}
                >
                  Add Event
                </button>
                <button
                  type="button"
                  id="edit"
                  className="btn btnUpdate"

                >
                  Update
                </button>
                <button type="button" id="delete" className="btn btnDelete">
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="row mt-5 px-3">
          <h6 className="mb-0 fw-bold mt-2 mb-2 fs-5">Upcomming Events</h6>
          <div className="row mb-5">
            <div className="d-flex justify-content-end align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <input
                  id="searchID"
                  type="text"
                  className="form-control col-8 me-5 px-5"
                  placeholder="Event Title"

                />
              </div>
              <div>
                <input
                  type="button"
                  className="form-control btnSearch text-white"
                  value="Search"
                />
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table
              className="table table-striped custom-table"
              id="assignLabsTable"
            >
              <thead>
                <tr>
                  <th scope="col">Event ID</th>
                  <th scope="col">Event Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Location</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Organizer</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>
                <th scope="col">E001</th>

                <th scope="col">Esela Perehera</th>
                <th scope="col">Traditional</th>
                <th scope="col">Kandy</th>
                <th scope="col">2023/04/15</th>
                <th scope="col">2023/04/22</th>
                <th scope="col">temple tooth  relic</th>
                <th scope="col">Action</th>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default EventAdmin;