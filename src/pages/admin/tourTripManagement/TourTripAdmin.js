import React from "react";
import "./TourTripAdmin.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import VueSweetalert2 from "sweetalert2";

function TourTripAdmin() {
	const [tourTrip_ids, setTourTrip_id] = useState("");
	const [placeName, setPlaceName] = useState("");
	const [startLocation, setStartLocation] = useState("");
	const [endLocation, setEndLocation] = useState("");
	const [transportType, setTransportType] = useState("");
	const [description, setDescription] = useState("");
	const [entryPrice, setEntryPrice] = useState("");
	const [products, setProducts] = useState("");
	const [productImages, setProductImages] = useState("");
	const [statusType, setStatusType] = useState("");
	const [route, setRoute] = useState("");
	const [listOftrips, setlistOftrips] = useState([]);
	const [PackageSearch, setpkgSearch] = useState("");
	const [formErrors, setFormErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validate();
		if (Object.keys(errors).length === 0) {
			createTourTrip();
		}
		setFormErrors(errors);
	};

	const validate = () => {
		const errors = {};
		const requiredFields = [
			{ key: "placeName", message: "Place Name is required!" },
			{
				key: "startLocation",
				message: "Start Location is required!",
			},
			{ key: "endLocation", message: "End Locaion is required!" },
			{ key: "entryPrice", message: "Entry Price is required!" },
			{ key: "products", message: "Products is required!" },
			{ key: "statusType", message: "Status Type is required!" },
		];

		requiredFields.forEach((field) => {
			if (!eval(field.key)) {
				errors[field.key] = field.message;
			}
		});

		return errors;
	};

	const createTourTrip = () => {
		Axios.post("http://localhost:8000/api/tourtrip/create/", {
			placeName,
			startLocation,
			endLocation,
			transportType,
			description,
			entryPrice,
			products,
			productImages,
			statusType,
			route,
		}).then((response) => {
			setlistOftrips([
				...listOftrips,
				{
					placeName,
					startLocation,
					endLocation,
					transportType,
					description,
					entryPrice,
					products,
					productImages,
					statusType,
					route,
				},
			]);
			console.log( "Response add", response);
		});
		VueSweetalert2.fire({
			toast: true,
			position: "center",
			showConfirmButton: false,
			timer: 1000,
			icon: "success",
			title: "Tour Trip Details added successfully",
		}).then(function () {
			// Redirect the user
			// window.location.href = "/admin/tourtripadmin";
		});
	};

	useEffect(() => {
		Axios.get("http://localhost:8000/api/tourtrip/all").then(
			(response) => {
				setlistOftrips(response.data);
			},
		);
	}, []);

	function updateTourTrip(e) {
		e.preventDefault();
		alert("Going to Update Tour Trip Details");
		const newPackage = {
			placeName,
			startLocation,
			endLocation,
			transportType,
			description,
			entryPrice,
			products,
			productImages,
			statusType,
			route,
		};

		Axios.put(
			`http://localhost:8000/api/tourtrip/update/${tourTrip_ids}`,
			newPackage,
		)
			.then(() => {})
			.catch((err) => {
				console.log(err);
			});
		VueSweetalert2.fire({
			toast: true,
			position: "center",
			showConfirmButton: false,
			timer: 1800,
			icon: "success",
			title: "Tour Trip Details Updated Successfully",
		}).then(function () {
			// Redirect the user
			window.location.href = "/admin/tourtripadmin";
		});
	}
	const deleteTourTrip = () => {
		alert("You want to delete Course");
		Axios.delete(
			`http://localhost:8000/api/tourtrip/delete/${tourTrip_ids}`,
		).then((res) => {});
		VueSweetalert2.fire({
			toast: true,
			position: "center",
			showConfirmButton: false,
			timer: 1800,
			icon: "success",
			title: "Tour trip details Deleted Successfully",
		}).then(function () {
			// Redirect the user
			window.location.href = "/admin/tourtripadmin";
		});
	};

	const loadPackageDetailsedit = (StoreTourTrip) => {
		document.getElementById("reg").setAttribute("disabled", "true");
		document.getElementById("delete").setAttribute("disabled", "true");
		setTourTrip_id(StoreTourTrip._id);
		setPlaceName(StoreTourTrip.placeName);
		setStartLocation(StoreTourTrip.startLocation);
		setEndLocation(StoreTourTrip.endLocation);
		setTransportType(StoreTourTrip.transportType);
		setDescription(StoreTourTrip.description);
		setEntryPrice(StoreTourTrip.entryPrice);
		setProducts(StoreTourTrip.products);
		setProductImages(StoreTourTrip.productImages);
		setStatusType(StoreTourTrip.statusType);
	};

	const loadPackageDetailsdelete = (StoreTourTrip) => {
		document.getElementById("reg").setAttribute("disabled", "true");
		document.getElementById("edit").setAttribute("disabled", "true");
		setTourTrip_id(StoreTourTrip._id);
		setPlaceName(StoreTourTrip.placeName);
		setStartLocation(StoreTourTrip.startLocation);
		setEndLocation(StoreTourTrip.endLocation);
		setTransportType(StoreTourTrip.transportType);
		setDescription(StoreTourTrip.description);
		setEntryPrice(StoreTourTrip.entryPrice);
		setProducts(StoreTourTrip.products);
		setProductImages(StoreTourTrip.productImages);
		setStatusType(StoreTourTrip.statusType);
	};

	//image
	const addcoverimage = () => {
		let imgDiv = document.getElementById("imgInputDiv");

		let imgUploader = document.createElement("input");
		imgUploader.setAttribute("id", "imgUploader");
		imgUploader.setAttribute("type", "file");
		imgUploader.setAttribute(
			"accept",
			"image/png, image/gif, image/jpeg, image/jpg",
		);
		imgUploader.setAttribute("class", "d-none");
		imgDiv.appendChild(imgUploader);

		let imgUploaderElement = document.getElementById("imgUploader");
		console.log(imgUploaderElement);

		if (
			imgUploaderElement !== undefined &&
			imgUploaderElement !== null
		) {
			imgUploaderElement.click();
			imgUploaderElement.addEventListener("change", () => {
				imgUploaderElement =
					document.getElementById("imgUploader");
				console.log(imgUploaderElement);
				if (
					imgUploaderElement.files[0] !== null &&
					imgUploaderElement.files[0] !== undefined
				) {
					if (imgUploaderElement.files.length > 0) {
						const fileReader = new FileReader();

						fileReader.onload = function (event) {
							setProductImages(event.target.result);
						};

						fileReader.readAsDataURL(
							imgUploaderElement.files[0],
						);
					}
				}
			});
		}

		document.getElementById("btnEditImg").removeAttribute("disabled");
		document
			.getElementById("btnImgDelete")
			.removeAttribute("disabled");
	};

	const updatecoverimage = () => {
		document.getElementById("ProfileImage").removeAttribute("src");
		document
			.getElementById("btnAddImg")
			.setAttribute("disabled", "true");

		let imgDiv = document.getElementById("imgInputDiv");

		let imgUploader = document.createElement("input");
		imgUploader.setAttribute("id", "imgUploader");
		imgUploader.setAttribute("type", "file");
		imgUploader.setAttribute("required", "true");
		imgUploader.setAttribute(
			"accept",
			"image/png, image/gif, image/jpeg, image/jpg",
		);
		imgUploader.setAttribute("class", "d-none");
		imgDiv.appendChild(imgUploader);

		let imgUploaderElement = document.getElementById("imgUploader");
		console.log(imgUploaderElement);

		if (
			imgUploaderElement !== undefined &&
			imgUploaderElement !== null
		) {
			imgUploaderElement.click();
			imgUploaderElement.addEventListener("change", () => {
				imgUploaderElement =
					document.getElementById("imgUploader");
				console.log(imgUploaderElement);
				if (
					imgUploaderElement.files[0] !== null &&
					imgUploaderElement.files[0] !== undefined
				) {
					if (imgUploaderElement.files.length > 0) {
						const fileReader = new FileReader();

						fileReader.onload = function (event) {
							setProductImages(event.target.result);
						};

						fileReader.readAsDataURL(
							imgUploaderElement.files[0],
						);
					}
				}
			});
		}
	};
	const removecoverImages = () => {
		document.getElementById("ProfileImage").removeAttribute("src");
		document
			.getElementById("btnImgDelete")
			.setAttribute("disabled", "true");
	};

	return (
		<div>
			<div className="main_container">
				<div className="item fw-bold fs-5">
					Tour Trip Management
				</div>
				<div className="item">
					<div className="row mt-5 ps-3">
						<div className="row">
							<div className=" col-lg-6 col-md-12 col-sm-12">
								<div className="row">
									<div className="d-flex justify-content-start align-items-center">
										<button
											id="btn-generate-report"
											className="btn me-3">
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
											<button
												className="btn btnAddImg"
												id="btnAddImg"
												type="button"
												onClick={() => {
													addcoverimage();
												}}>
												<i
													className="fa fa-plus text-white"
													aria-hidden="true"
												/>
											</button>
											<button
												className="btn btnEditImg"
												id="btnEditImg"
												type="button"
												onClick={() => {
													updatecoverimage();
												}}>
												<i className="fa-solid fa-pen text-white" />
											</button>
											<button
												className="btn btnImgDelete"
												id="btnImgDelete"
												type="button"
												onClick={() => {
													removecoverImages();
												}}>
												<i className="fa-solid fa-trash-can d-inline text-white" />
											</button>
										</div>
									</div>
									<div id="imgInputDiv">
										<div>
											<img
												id="ProfileImage"
												className="imgDiv"
												src={productImages}
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col">
									<select
										value={placeName}
										name="type"
										className="form-select"
										aria-label="role"
										onChange={(event) => {
											setPlaceName(
												event.target.value,
											);
										}}>
										<option
											selected
											disabled
											value="0">
											Place Name
										</option>
										<option value="Ampara">
											Ampara
										</option>
										<option value="Anuradhapura">
											Anuradhapura
										</option>
										<option value="Badulla">
											Badulla
										</option>
										<option value="Colombo">
											Colombo
										</option>
										<option value="Colombo">
											Colombo
										</option>
										<option value="Galle">
											Galle
										</option>
										<option value="Gampaha">
											Gampaha
										</option>
										<option value="Hambantota">
											Hambantota
										</option>
										<option value="Jaffna">
											Jaffna
										</option>
										<option value="Kalutara">
											Kalutara
										</option>
										<option value="Kandy">
											Kandy
										</option>
										<option value="Kegalle">
											Kegalle
										</option>
										<option value="Kilinochchi">
											Kilinochchi
										</option>
										<option value="Kurunegala">
											Kurunegala
										</option>
										<option value="Mannar">
											Mannar
										</option>
										<option value="Matale">
											Matale
										</option>
										<option value="Matara">
											Matara
										</option>
										<option value="Monaragala">
											Monaragala
										</option>
										<option value="Mullaitivu">
											Mullaitivu
										</option>
										<option value="Nuwara Eliya">
											Nuwara Eliya
										</option>
										<option value="Polonnaruwa">
											Polonnaruwa
										</option>
										<option value="Puttalam">
											Puttalam
										</option>
										<option value="Ratnapura">
											Ratnapura
										</option>
										<option value="TTrincomalee">
											Trincomalee
										</option>
										<option value="Vavuniya">
											Vavuniya
										</option>
									</select>
									<p class="alert-txt">
										{formErrors.placeName}
									</p>
								</div>
								<div className="col">
									<select
										name="status"
										value={statusType}
										className="form-select"
										aria-label="role"
										onChange={(event) => {
											setStatusType(
												event.target.value,
											);
										}}>
										<option
											selected
											disabled
											value="0">
											Status
										</option>
										<option value="Available">
											Available
										</option>
										<option value="Unavailable">
											Unavailable
										</option>
									</select>
								</div>
							</div>

							<div className="row mt-4">
								<div className="col">
									<input
										type="text"
										value={startLocation}
										className="form-control"
										placeholder="Start Location"
										onChange={(event) => {
											setStartLocation(
												event.target.value,
											);
										}}
									/>
								</div>
								<div className="col">
									<input
										type="text"
										value={endLocation}
										className="form-control"
										placeholder="End Location"
										onChange={(event) => {
											setEndLocation(
												event.target.value,
											);
										}}
									/>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col">
									<select
										name="type"
										value={products}
										className="form-select"
										aria-label="role"
										onChange={(event) => {
											setProducts(
												event.target.value,
											);
										}}>
										<option
											selected
											disabled
											value="0">
											Products
										</option>
										<option value="Car">
											Batik textiles
										</option>
										<option value="Van">
											Handicrafts
										</option>
										<option value="Mini Van">
											Gems and jewelry
										</option>
										<option value="Tuk Tuk">
											ART works
										</option>
									</select>
								</div>

								<div className="col">
									<input
										type="text"
										value={entryPrice}
										className="form-control"
										placeholder="Entry Price"
										onChange={(event) => {
											setEntryPrice(
												event.target.value,
											);
										}}
									/>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col">
									<select
										name="type"
										className="form-select"
										aria-label="role"
										value={transportType}
										onChange={(event) => {
											setTransportType(
												event.target.value,
											);
										}}>
										<option
											selected
											disabled
											value="0">
											Transport Type
										</option>
										<option value="Bus">Bus</option>
										<option value="Van">Van</option>
										<option value="Train">
											Train
										</option>
										<option value="Car">Car</option>
										<option value="Mini Van">
											Mini Van
										</option>
										<option value="Jeep">Jeep</option>
									</select>
								</div>
								<div className="col">
									<input
										type="text"
										className="form-control"
										value={route}
										placeholder="Route"
										onChange={(event) => {
											setRoute(event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col">
									<div class="form-group">
										<textarea
											class="form-control"
											id="exampleFormControlTextarea1"
											rows="6"
											value={description}
											placeholder="Description"
											onChange={(event) => {
												setDescription(
													event.target.value,
												);
											}}></textarea>
									</div>
								</div>
							</div>
							<div className="row mt-5">
								<div className="d-flex justify-content-around align-items-center">
									<button
										type="submit"
										id="reg"
										className="btn btnRegister "
										onClick={handleSubmit}>
										Add Tour Trip Details
									</button>
									<button
										type="button"
										id="edit"
										className="btn btnUpdate"
										onClick={updateTourTrip}>
										Update
									</button>
									<button
										type="button"
										id="delete"
										className="btn btnDelete"
										onClick={deleteTourTrip}>
										Delete
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="row mt-5 px-3">
						<h6 className="mb-0 fw-bold mt-2 mb-2 fs-5">
							Current Tour Trip Details
						</h6>
						<div className="row mb-5">
							<div className="d-flex justify-content-end align-items-center">
								<div className="d-flex justify-content-center align-items-center">
									<input
										id="searchID"
										type="text"
										className="form-control col-8 me-5 px-5"
										placeholder="Place Name / Status"
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
										<th scope="col">Tour Trip ID</th>
										<th scope="col">Image</th>
										<th scope="col">Place Name</th>
										<th scope="col">Start Location</th>
										<th scope="col">End Location</th>
										<th scope="col">Transport Type</th>
										<th scope="col">Entry Price</th>
										<th scope="col">Products</th>
										<th scope="col">Route</th>
										<th scope="col">Status</th>
										<th scope="col">Action</th>
										<th scope="col" />
									</tr>
								</thead>
								<tbody style={{ marginLeft: 10 }}>
									{listOftrips &&
										listOftrips
											.filter((value) => {
												if (PackageSearch === "") {
													return value;
												} else if (
													value.placeName
														.toLowerCase()
														.includes(
															PackageSearch.toLowerCase(),
														)
												) {
													return value;
												} else if (
													value.statusType
														.toLowerCase()
														.includes(
															PackageSearch.toLowerCase(),
														)
												) {
													return value;
												}
											})
											.map((StoreTourTrip, i) => (
												<tr
													class="crs-tr"
													data-status="active">
													<td className="crs-td">
														{StoreTourTrip._id}
													</td>
													<td className="crs-td">
														<img
															src={
																StoreTourTrip.productImages
															}
															class="crsthumimg"
															alt=""
														/>
													</td>
													<td className="crs-td">
														{
															StoreTourTrip.placeName
														}
													</td>
													<td className="crs-td">
														{
															StoreTourTrip.startLocation
														}
													</td>
													<td className="crs-td">
														{
															StoreTourTrip.endLocation
														}
													</td>
													<td className="crs-td">
														{
															StoreTourTrip.transportType
														}
													</td>
													<td className="crs-td">
														{
															StoreTourTrip.entryPrice
														}
													</td>
													<td className="crs-td">
														{
															StoreTourTrip.products
														}
													</td>
													<td className="crs-td">
														{
															StoreTourTrip.route
														}
													</td>
													<td className="crs-td">
														{
															StoreTourTrip.statusType
														}
													</td>
													<td>
														<i
															className="fa-solid fa-pen me-3 text-primary d-inline fa-2x"
															onClick={() => {
																loadPackageDetailsedit(
																	StoreTourTrip,
																);
															}}
														/>
														<i
															className="fa-solid fa-trash-can d-inline me-2 text-danger d-inline fa-2x"
															onClick={() => {
																loadPackageDetailsdelete(
																	StoreTourTrip,
																);
															}}
														/>
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

export default TourTripAdmin;
