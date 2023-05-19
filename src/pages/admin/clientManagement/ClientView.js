import React from "react";
import "./ClientView.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import VueSweetalert2 from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";

function UserView() {
  
	const [userSearch, setUserSearch] = useState("");
	const [listOfuser, setlistOfuser] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:8000/api/user/all").then(
			(response) => {
				setlistOfuser(response.data);
			},
		);
	}, []);

    const columns = [
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName" },
        { title: "Email", field: "email" },
        { title: "Phone Number", field: "phoneNumber" },
        { title: "Password", field: "password" },
    ];
    
    
    const downLoadPdf = () => {
        const doc = new jsPDF();
        doc.text( " User Details Report", 20, 10);
        doc.autoTable({
            columns: columns.map((col) => ({
                ...col,
                dataKey: col.field,
            })),
            body: listOfuser,
        });
        doc.save( "User Details Report");
    };


	return (
		<div>
			<div className="main_container">
				<div className="item fw-bold fs-5">
					User Management
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
							Current Registered Users
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
											setUserSearch(
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
										<th scope="col">User ID</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Email</th>
										<th scope="col">Phone Number</th>
										<th scope="col">Password</th>
										<th scope="col" />
									</tr>
								</thead>

								<tbody>
									{listOfuser &&
										listOfuser
											.filter((value) => {
												if (userSearch === "") {
													return value;
												} else if (
													value.email
														.toLowerCase()
														.includes(
															userSearch.toLowerCase(),
														)
												) {
													return value;
												}
											})
											.map((StoreUser, i) => (
												<tr
													class="crs-tr"
													data-status="active">
													<td className="crs-td">
														{StoreUser._id}
													</td>
													<td className="crs-td">
														{StoreUser.firstName}
													</td>
													<td className="crs-td">
														{StoreUser.lastName}
													</td>
													<td className="crs-td">
														{
															StoreUser.email
														}
													</td>
													<td className="crs-td">
														{
															StoreUser.phoneNumber
														}
													</td>
													<td className="crs-td">
														{
															StoreUser.password
														}
													</td>
													{/* <td>
														<button
															className="fa-solid fa-trash-can d-inline me-2 text-danger d-inline fa-2x"
															// onClick={
															// 	deleteReview
															// }
                              onClick={() => deleteReview(StoreReview._id)}
                              ></button>
													</td> */}
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

export default UserView;