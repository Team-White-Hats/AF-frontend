import React from "react";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
} from "mdb-react-ui-kit";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import { useState } from "react";
import Axios from "axios";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function BookYourtrip() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [country, setCountry] = useState("");
	const [visitPlaceName, setVisitPlaceName] = useState("");
	const [tourDate, setTourDate] = useState("");
	const [gender, setGender] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [bookingSuccess, setBookingSuccess] = useState(false);

	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};

	const handleLastNameChange = (e) => {
		setLastName(e.target.value);
	};

	const handleCountryChange = (e) => {
		setCountry(e.target.value);
	};

	const handleVisitPlaceNameChange = (e) => {
		setVisitPlaceName(e.target.value);
	};

	const handleTourDateChange = (date) => {
		setTourDate(date);
	};

	const handleGenderChange = (e) => {
		setGender(e.target.value);
	};

	const handleEmailAddressChange = (e) => {
		setEmailAddress(e.target.value);
	};

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const formData = {
				firstName,
				lastName,
				country,
				visitPlaceName,
				tourDate,
				gender,
				emailAddress,
				phoneNumber,
			};

			await Axios.post(
				"http://localhost:8000/api/tourtripbook/create",
				formData,
			);

			setFirstName("");
			setLastName("");
			setCountry("");
			setVisitPlaceName("");
			setTourDate("");
			setGender("");
			setEmailAddress("");
			setPhoneNumber("");
			setBookingSuccess(true);
			console.log("Form submitted successfully");
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<MDBContainer fluid>
			<MDBRow className="justify-content-center align-items-center m-5">
				<MDBCard>
					<MDBCardBody className="px-4">
						{bookingSuccess && (
							<Alert severity="success">
								<AlertTitle>Success</AlertTitle>
								Booking created successfully!
							</Alert>
						)}
						<h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center mt-2">
							Book Your Tour Trip
						</h3>

						<MDBRow>
							<MDBCol md="6">
								<h6 className="fw-bold">First Name </h6>
								<MDBInput
									wrapperClass="mb-4"
									size="lg"
									id="form1"
									type="text"
									required
									onChange={handleFirstNameChange}
								/>
							</MDBCol>

							<MDBCol md="6">
								<h6 className="fw-bold">Last Name </h6>
								<MDBInput
									wrapperClass="mb-4"
									size="lg"
									id="form2"
									type="text"
									required
									onChange={handleLastNameChange}
								/>
							</MDBCol>
						</MDBRow>

						<MDBRow>
							<MDBCol md="6">
								<h6 className="fw-bold">Country</h6>
								<MDBInput
									wrapperClass="mb-4"
									size="lg"
									id="form1"
									type="text"
									required
									onChange={handleCountryChange}
								/>
							</MDBCol>

							<MDBCol md="6">
								<h6 className="fw-bold">
									Visit Place Name
								</h6>
								<MDBInput
									wrapperClass="mb-4"
									size="lg"
									id="form2"
									type="text"
									required
									onChange={handleVisitPlaceNameChange}
								/>
							</MDBCol>
						</MDBRow>

						<MDBRow>
							<MDBCol md="6">
								<h6 className="fw-bold">Tour Date</h6>
								<LocalizationProvider
									dateAdapter={AdapterDayjs}>
									<DemoItem>
										<DesktopDatePicker
											onChange={handleTourDateChange}
										/>
									</DemoItem>
								</LocalizationProvider>
							</MDBCol>

							<MDBCol md="6" className="mb-4">
								<h6 className="fw-bold">Gender: </h6>
								<RadioGroup
									aria-labelledby="demo-controlled-radio-buttons-group"
									name="controlled-radio-buttons-group"
									onChange={handleGenderChange}>
									<FormControlLabel
										value="female"
										control={<Radio />}
										label="Female"
										inline
									/>
									<FormControlLabel
										value="male"
										control={<Radio />}
										label="Male"
										inline
									/>
								</RadioGroup>
							</MDBCol>
						</MDBRow>

						<MDBRow>
							<MDBCol md="6">
								<h6 className="fw-bold mt-3">
									Email Address
								</h6>
								<MDBInput
									wrapperClass="mb-4"
									size="lg"
									id="form4"
									type="email"
									required
									onChange={handleEmailAddressChange}
								/>
							</MDBCol>

							<MDBCol md="6">
								<h6 className="fw-bold mt-3">
									Phone Number
								</h6>
								<MDBInput
									wrapperClass="mb-4"
									size="lg"
									id="form5"
									type="rel"
									required
									onChange={handlePhoneNumberChange}
								/>
							</MDBCol>
						</MDBRow>

						<button
							style={{
								width: 100,
								fontSize: 16,
								height: 42,
								backgroundColor: "#009ffd",
								color: "white",
								borderRadius: 10,
							}}
							size="lg"
							onClick={handleSubmit}>
							Submit
						</button>
					</MDBCardBody>
				</MDBCard>
			</MDBRow>
		</MDBContainer>
	);
}
export default BookYourtrip;
