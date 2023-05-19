import React from "react";
import {
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBRow,
	MDBCol,
	MDBCardTitle,
	MDBCardText,
	MDBBtn,
} from "mdb-react-ui-kit";
import "./index.css";

function TourTripIndex() {
	return (
		<MDBContainer fluid className="bg-white">
			<MDBRow className="d-flex justify-content-center align-items-center h-80">
				<MDBCol>
					<MDBCard className="my-4">
						<h3 className="mb-3 text-uppercase fw-bold text-center mt-3">
							Plan Your trip
						</h3>
						<MDBCardBody className="text-black d-flex flex-column justify-content-center">
							<MDBRow>
								<MDBCard className="card aboutCard">
									<MDBCardImage
										src="https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
										position="top"
										alt="..."
									/>
									<MDBCardBody>
										<MDBCardTitle style={{fontWeight: 600, fontSize:18}}>
											Culture Products Workshops
										</MDBCardTitle>
										<MDBCardText style={{fontSize:15}}>
											Sri Lanka, formerly known as
											Ceylon and officially the
											Democratic Socialist Republic
											of Sri Lanka, is an island
											country in South Asia.Colour,
											creativity and commerce abound
											when it comes to arts and
											crafts. Tradition and heritage
											are king, and people have been
											creating everything from
											jewellery to masks,
											lacquerware.
										</MDBCardText>
										<button
										onClick={() => {
											window.location.href = "/client/about-sri-lanka";
										  }}
										  style={{backgroundColor: "blue", color: "white", width: 80, height: 35}}
											>
											View
										</button>
									</MDBCardBody>
								</MDBCard>
								<MDBCard className="card aboutCard">
									<MDBCardImage
										src="https://mediaim.expedia.com/localexpert/1169815/47426855-a6dd-4b34-a5e3-092ba10dabeb.jpg?impolicy=resizecrop&rw=1005&rh=565"
										position="top"
										alt="..."
									/>
									<MDBCardBody>
										<MDBCardTitle style={{fontWeight: 600, fontSize:18}}>
											Before You Go
										</MDBCardTitle>
										<MDBCardText style={{fontSize:15}}>
											Sri Lanka, formerly known as
											Ceylon and officially the
											Democratic Socialist Republic
											of Sri Lanka, is an island
											country in South Asia.Colour,
											creativity and commerce abound
											when it comes to arts and
											crafts. Tradition and heritage
											are king, and people have been
											creating everything from
											jewellery to masks,
											lacquerware.
										</MDBCardText>
										<button
											onClick={() => {
												window.location.href = "/client/before-you-go";
											  }}
											style={{backgroundColor: "blue", color: "white", width: 80, height: 35}}>
											View
										</button>
									</MDBCardBody>
								</MDBCard>
								<MDBCard className="card aboutCard">
									<MDBCardImage
										src="https://images.pexels.com/photos/4553365/pexels-photo-4553365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										position="top"
										alt="..."
									/>

									<MDBCardBody>
										<MDBCardTitle style={{fontWeight: 600, fontSize:18}}>
											Book Your Trip
										</MDBCardTitle>
										<MDBCardText style={{fontSize:15}}>
											Sri Lanka, formerly known as
											Ceylon and officially the
											Democratic Socialist Republic
											of Sri Lanka, is an island
											country in South Asia.Colour,
											creativity and commerce abound
											when it comes to arts and
											crafts. Tradition and heritage
											are king, and people have been
											creating everything from
											jewellery to masks,
											lacquerware.
										</MDBCardText>
										<button style={{backgroundColor: "blue", color: "white", width: 80, height: 35}}
											onClick={() => {
												window.location.href = "/client/book-your-trip";
											  }}
											>
											View
										</button>
									</MDBCardBody>
								</MDBCard>
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}

export default TourTripIndex;
