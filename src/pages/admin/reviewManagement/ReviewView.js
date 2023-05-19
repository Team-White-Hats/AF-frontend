import React from "react";
import "./ReviewView.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import VueSweetalert2 from "sweetalert2";

function ReviewView() {

  const [reviewSearch, setReviewSearch] = useState("");
  const [listOfreview, setlistOfreview] = useState([]);
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
    const [reviewHeader, setReviewHeader] = useState("");
	const [review, setReview] = useState("");
  const [rId, setRId] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:8000/api/review/all").then((response) => {
      setlistOfreview(response.data);
    });
  }, []);

  const  deleteReview= () => {
    alert("You want to delete review");
    Axios.delete(`http://localhost:8000/api/review/${rId}`).then((res) => {
        
     
      });
      VueSweetalert2.fire({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 1800,
          icon: 'success',
          title: 'Review Deleted Successfully',
      }).then(function () {
        // Redirect the user
        // window.location.href = "/admin/reviewadmin";
      });
      
    };

  const loadReviewDetailsdelete = (StoreReview) => {
    document.getElementById("reg").setAttribute("disabled", "true");
    document.getElementById("edit").setAttribute("disabled", "true");
    setRId(StoreReview._id);
    setName(StoreReview.name);
    setEmail(StoreReview.email);
    setReviewHeader(StoreReview.reviewHeader);
    setReview(StoreReview.review);
    setRating(StoreReview.rating);
    
  };

  return (
    <div>
      <div className="main_container">
     <div className="item fw-bold fs-5">Review and rating Management</div>
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
            <h6 className="mb-0 fw-bold mt-2 mb-2 fs-5">Current Reviews</h6>
            <div className="row mb-5">
              <div className="d-flex justify-content-end align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <input
                    id="searchID"
                    type="text"
                    className="form-control col-8 me-5 px-5"
                    placeholder="Email"
                    onChange={(e) => {
                      setReviewSearch(e.target.value);
                    }}
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
                    <th scope="col">Review ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Review Header</th>
                    <th scope="col">Review</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>

                <tbody>
                {listOfreview &&
                     listOfreview
                      .filter((value) => {
                        if (reviewSearch === "") {
                          return value;
                        } else if (
                          value.email
                            .toLowerCase()
                            .includes(reviewSearch.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((StoreReview, i) => (
                        <tr class="crs-tr" data-status="active">
                          <td className="crs-td">{StoreReview._id}</td>
                          <td className="crs-td">
                            {StoreReview.name}
                          </td>
                          <td className="crs-td">
                            {StoreReview.email}
                          </td>
                          <td className="crs-td">
                            {StoreReview.reviewHeader}
                          </td>
                          <td className="crs-td">{StoreReview.review}</td>
                          <td className="crs-td">
                            {StoreReview.rating}
                          </td>
                          <td>
                          <button className="fa-solid fa-trash-can d-inline me-2 text-danger d-inline fa-2x"onClick={deleteReview}>
                 
                  </button>
                    
                    {/* <i className="fa-solid fa-trash-can d-inline me-2 text-danger d-inline fa-2x" onClick={() => {
                      loadReviewDetailsdelete(StoreReview);
                    }}/> */}
                </td>
                          
                        </tr>
                      ))}
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewView;
