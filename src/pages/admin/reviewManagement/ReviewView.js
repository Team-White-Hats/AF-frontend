import React from "react";
import "./ReviewView.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import VueSweetalert2 from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ReviewView() {
  
	const [reviewSearch, setReviewSearch] = useState("");
	const [listOfreview, setlistOfreview] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:8000/api/review/all").then(
			(response) => {
				setlistOfreview(response.data);
			},
		);
	}, []);

	const deleteReview = (reviewId) => {
    Axios.delete(`http://localhost:8000/api/review/${reviewId}`).then((res) => {
      setlistOfreview((prevReviews) =>
        prevReviews.filter((review) => review._id !== reviewId)
      );
  
      VueSweetalert2.fire({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1800,
        icon: "success",
        title: "Review Deleted Successfully",
      }).then(function () {
        // Redirect the user
        window.location.href = "/admin/reviewadmin";
      });
    });
  };

  const columns = [
    { title: "User Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Review Header", field: "reviewHeader" },
    { title: "Review", field: "review" },
    { title: "Rating", field: "rating" },
];


const downLoadPdf = () => {
    const doc = new jsPDF();
    doc.text( " Review and Rating Details Report", 20, 10);
    doc.autoTable({
        columns: columns.map((col) => ({
            ...col,
            dataKey: col.field,
        })),
        body: listOfreview,
    });
    doc.save( "Review and Rating Details Report");
};

	return (
		<div>
			<div className="main_container">
				<div className="item fw-bold fs-5">
					Review and Rating Management
				</div>
				<div className="item">
					<div className="row mt-5 ps-3">
						<div className="row">
							<div className=" col-lg-6 col-md-12 col-sm-12">
								<div className="row">
									<div className="d-flex justify-content-start align-items-center">
										<button
											id="btn-generate-report"
											className="btn me-3" onClick={() => downLoadPdf()}>
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
						<h6 className="mb-0 fw-bold mt-2 mb-2 fs-5">
							Current Reviews
						</h6>
						<div className="row mb-5">
							<div className="d-flex justify-content-end align-items-center">
								<div className="d-flex justify-content-center align-items-center">
									<input
										id="searchID"
										type="text"
										className="form-control col-8 me-5 px-5"
										placeholder="Email"
										onChange={(e) => {
											setReviewSearch(
												e.target.value,
											);
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
								id="assignLabsTable">
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
														.includes(
															reviewSearch.toLowerCase(),
														)
												) {
													return value;
												}
											})
											.map((StoreReview, i) => (
												<tr
													class="crs-tr"
													data-status="active">
													<td className="crs-td">
														{StoreReview._id}
													</td>
													<td className="crs-td">
														{StoreReview.name}
													</td>
													<td className="crs-td">
														{StoreReview.email}
													</td>
													<td className="crs-td">
														{
															StoreReview.reviewHeader
														}
													</td>
													<td className="crs-td">
														{
															StoreReview.review
														}
													</td>
													<td className="crs-td">
														{
															StoreReview.rating
														}
													</td>
													<td>
														<button
															className="fa-solid fa-trash-can d-inline me-2 text-danger d-inline fa-2x"
															// onClick={
															// 	deleteReview
															// }
                              onClick={() => deleteReview(StoreReview._id)}
                              ></button>
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