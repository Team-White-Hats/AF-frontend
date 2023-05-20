import Axios from "axios";
import { useEffect, useState } from "react";
import "./TourTripAdmin.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

function TourTripDetailsBooking() {
	const [listOfBooking, setlistOfBookings] = useState([]);
	const [PackageSearch, setpkgSearch] = useState("");

	useEffect(() => {
		Axios.get("http://localhost:8000/api/tourtripbook/all").then(
			(response) => {
				setlistOfBookings(response.data);
			},
		);
	}, []);

	const columns = [
		{ title: "First Name", field: "firstName" },
		{ title: "Last Name", field: "lastName" },
		{ title: "Tour Date", field: "date" },
		{ title: "Place Name", field: "visitPlaceName" },
		{ title: "Email Address", field: "emailAddress" },
		{ title: "Phone Number", field: "phoneNumber" },
	];

	const downLoadPdf = () => {
		const doc = new jsPDF();
		doc.text(" Tour Trip Booking Details Report", 20, 10);
		doc.autoTable({
			columns: columns.map((col) => ({
				...col,
				dataKey: col.field,
			})),
			body: listOfBooking,
		});
		doc.save(" Tour Trip Booking Details Report");
	};

	return (
		<div>
			<div className="main_container">
				<div className="item fw-bold fs-5">Tour Trip Bookings</div>
				<div className="item">
					<div className="row mt-5 ps-3">
						<div className="row">
							<div className=" col-lg-6 col-md-12 col-sm-12">
								<div className="row">
									<div className="d-flex justify-content-start align-items-center">
										<button
											id="btn-generate-report"
											className="btn me-3"
											onClick={() => downLoadPdf()}>
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
							Booking Tour Trip Details
						</h6>
						<div className="row mb-5">
							<div className="d-flex justify-content-end align-items-center">
								<div className="d-flex justify-content-center align-items-center">
									<input
										id="searchID"
										type="text"
										className="form-control col-8 me-5 px-5"
										placeholder="First Name / Last Name"
										onChange={(e) => {
											setpkgSearch(e.target.value);
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
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Country</th>
										<th scope="col">
											Visit Place Name
										</th>
										<th scope="col">Tour Date</th>
										<th scope="col">Gender</th>
										<th scope="col">Email Address</th>
										<th scope="col">Phone Number</th>
										<th scope="col" />
									</tr>
								</thead>
								<tbody style={{ marginLeft: 10 }}>
									{listOfBooking &&
										listOfBooking
											.filter((value) => {
												if (PackageSearch === "") {
													return value;
												} else if (
													value.firstName
														.toLowerCase()
														.includes(
															PackageSearch.toLowerCase(),
														)
												) {
													return value;
												} else if (
													value.lastName
														.toLowerCase()
														.includes(
															PackageSearch.toLowerCase(),
														)
												) {
													return value;
												}
											})
											.map(
												(
													StoreBookingDetails,
													i,
												) => (
													<tr
														class="crs-tr"
														data-status="active">
														<td className="crs-td">
															{
																StoreBookingDetails.firstName
															}
														</td>
														<td className="crs-td">
															{
																StoreBookingDetails.lastName
															}
														</td>
														<td className="crs-td">
															{
																StoreBookingDetails.country
															}
														</td>
														<td className="crs-td">
															{
																StoreBookingDetails.visitPlaceName
															}
														</td>
														<td className="crs-td">
															{
																StoreBookingDetails.date
																// .split("T")[0]
															}
														</td>
														<td className="crs-td">
															{
																StoreBookingDetails.gender
															}
														</td>
														<td className="crs-td">
															{
																StoreBookingDetails.emailAddress
															}
														</td>
														<td className="crs-td">
															{
																StoreBookingDetails.phoneNumber
															}
														</td>
													</tr>
												),
											)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TourTripDetailsBooking;
