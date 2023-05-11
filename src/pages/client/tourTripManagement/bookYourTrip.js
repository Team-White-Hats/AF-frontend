import React from "react";
import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBRadio,
} from "mdb-react-ui-kit";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

function BookYourtrip() {
	return (
		<MDBContainer fluid>
			<MDBRow className="justify-content-center align-items-center m-5">
				<MDBCard>
					<MDBCardBody className="px-4">
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
								/>
							</MDBCol>
						</MDBRow>

						<MDBRow>
							<MDBCol md="6">
								<h6 className="fw-bold">Tour Date</h6>
								<DatePicker
									selected={new Date()}
									onChange={(date) => console.log(date)}
									className="form-control"
                                    required
								/>
							</MDBCol>

							<MDBCol md="6" className="mb-4">
								<h6 className="fw-bold">Gender: </h6>
								<MDBRadio
									name="inlineRadio"
									id="inlineRadio1"
									value="option1"
									label="Female"
									inline
								/>
								<MDBRadio
									name="inlineRadio"
									id="inlineRadio2"
									value="option2"
									label="Male"
									inline
								/>
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
								/>
							</MDBCol>
						</MDBRow>

						<MDBBtn className="btn submit" size="lg">
							Submit
						</MDBBtn>
					</MDBCardBody>
				</MDBCard>
			</MDBRow>
		</MDBContainer>
	);
}
export default BookYourtrip;
