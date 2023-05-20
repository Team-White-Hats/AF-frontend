import React from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardImage,
	MDBContainer,
	MDBRow,
	MDBCol,
} from "mdb-react-ui-kit";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function AboutSriLanka({ tourTrip }) {
	const [listOftrips, setlistOftrips] = useState([]);
	let history = useHistory();

	useEffect(() => {
		Axios.get("http://localhost:8000/api/tourtrip/all").then(
			(response) => {
				setlistOftrips(response.data);
			},
		);
	}, []);

	const callEvent = (tourTrip) => {
		console.log(tourTrip);

		history.push("/client/tour-trip", {
			placeName: tourTrip.placeName,
			startLocation: tourTrip.startLocation,
			endLocation: tourTrip.endLocation,
			transportType: tourTrip.transportType,
			description: tourTrip.description,
			entryPrice: tourTrip.entryPrice,
			products: tourTrip.products,
			productImages: tourTrip.productImages,
			statusType: tourTrip.statusType,
			route: tourTrip.route,
		});
	};

	return (
		<MDBContainer fluid className="bg-white">
			<MDBRow className="d-flex justify-content-center align-items-center h-80">
				<MDBCol>
					<MDBCard className="my-4">
						<h3 className="mb-3 text-uppercase fw-bold text-center mt-3">
							Culture Products Workshops
						</h3>
						<button
							style={{
								backgroundColor: "#009ffd",
								color: "white",
								width: 150,
								height: 50,
								marginLeft: 1300,
								marginTop: 5,
								borderRadius: 10,
							}}
							onClick={() => {
								window.location.href =
									"/client/book-your-trip";
							}}>
							Book Your Trip
						</button>
						<MDBCardBody className="text-black d-flex flex-column justify-content-center">
							<MDBRow>
								{listOftrips.map((trip, index) => (
									<MDBCard
										className="card"
										style={{ marginBottom: 40, width: 400, marginRight: 50, marginLeft: 40 }}>
										<MDBCardImage
											src={trip.productImages}
											position="top"
											alt="..."
										/>
										<MDBCardBody>
											<MDBCardTitle
												style={{
													fontSize: 16,
													fontWeight: 700,
												}}>
												Sri Lanka - {trip.products}{" "}
												{""} ({trip.placeName})
											</MDBCardTitle>
											<MDBCardText>
												{trip.description}
											</MDBCardText>
											<button
												onClick={() =>
													callEvent(trip)
												}
												style={{
													backgroundColor:
														"#009ffd",
													color: "white",
													width: 90,
													height: 35,
													borderRadius: 5,
												}}>
												See More
											</button>
										</MDBCardBody>
									</MDBCard>
								))}
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}
