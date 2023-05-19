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

export default function AboutSriLanka({tourTrip}) {

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
						<button style={{backgroundColor: "#009ffd", color: "white",width: 150, height: 50, marginLeft: 1300, marginTop: 5, borderRadius: 10}} onClick={() => {window.location.href = "/client/book-your-trip"}}>Book Your Trip</button>
						<MDBCardBody className="text-black d-flex flex-column justify-content-center">
							<MDBRow>
								{/* <MDBCard className="card trip-details mb-5">
									<MDBCardImage
										src="https://media.timeout.com/images/101852777/380/285/image.jpg"
										position="top"
										alt="..."
									/>
									<MDBCardBody>
										<MDBCardTitle className="about-sri-title">
											Jewellery making (Rathnapura
											Workshop)
										</MDBCardTitle>
										<MDBCardText>
											In ancient times, silver, gold
											and gem-adorned bangles,
											necklaces and rings among other
											ornaments were considered a
											mark of royalty and privilege,
											whereas today, jewellery is
											available for purchase for any
											who fancy a piece of perfectly
											crafted jewellery.
										</MDBCardText>
										<button
											onClick={() => {
												window.location.href = "/client/about-sri-lanka";
											  }}
											style={{backgroundColor: "#009ffd", color: "white", width: 80, height: 35}}>
											See More
										</button>
									</MDBCardBody>
								</MDBCard> */}
								{listOftrips.map((trip, index) => (
								<MDBCard className="card trip-details">
									<MDBCardImage
										src={trip.productImages}
										position="top"
										alt="..."
									/>
									<MDBCardBody>
										<MDBCardTitle className="about-sri-title">
										Sri Lanka - {trip.products} {""} ({trip.placeName})
										</MDBCardTitle>
										<MDBCardText>
										{trip.description}
										</MDBCardText>
										<button
										  onClick={() => callEvent(trip)}
											style={{backgroundColor: "#009ffd", color: "white", width: 90, height: 35, borderRadius: 5}}>
											See More
										</button>
									</MDBCardBody>
								</MDBCard>
								  ))}
								{/* <MDBCard className="card trip-details">
									<MDBCardImage
										src="https://lesterlost.com/wp-content/uploads/2018/11/lesterlost-travel-sri-lanka-crafts-elephants.jpg.webp"
										position="top"
										alt="..."
									/>

									<MDBCardBody>
										<MDBCardTitle className="about-sri-title">
											Sri Lanka Crafts: Wood Carving
											(Galle Workshop)
										</MDBCardTitle>
										<MDBCardText>
											Wood carving has a long history
											in Sri Lanka. This long-held
											tradition is demonstrated
											within the walls of the Temple
											of Sacred Tooth in Kandy.
											<br />
											Wood carving objects are
											amongst things to buy in Sri
											Lanka: wall hangings,
											figurines, sculptures, gift
											boxes and other household
											items.I found this workshop in
											Kandy.
										</MDBCardText>
										<button
											onClick={() => {
												window.location.href = "/client/book-your-trip";
											  }}
											style={{backgroundColor: "blue", color: "white", width: 80, height: 35}}>
											See More
										</button>
									</MDBCardBody>
								</MDBCard>
								<MDBCard className="card trip-details">
									<MDBCardImage
										src="https://media.timeout.com/images/101852761/380/285/image.jpg"
										position="top"
										alt="..."
									/>
									<MDBCardBody>
										<MDBCardTitle className="about-sri-title">
											Cane products (Gampaha
											Workshop)
										</MDBCardTitle>
										<MDBCardText>
											Cane crafts are found within
											certain areas in Sri Lanka,
											such as Bibile in Monaragala
											District, Polonnaruwa and
											Weweldeniya in the Gampaha
											District where cane is grown.
											Cane is used to make tables and
											chairs, baskets, containers and
											decorative and household items.
										</MDBCardText>
										<button
											onClick={() => {
												window.location.href = "/client/about-sri-lanka";
											  }}
											style={{backgroundColor: "blue", color: "white", width: 80, height: 35}}>
											See More
										</button>
									</MDBCardBody>
								</MDBCard>
								<MDBCard className="card trip-details">
									<MDBCardImage
										src="https://media.timeout.com/images/101852735/380/285/image.jpg"
										position="top"
										alt="..."
									/>
									<MDBCardBody>
										<MDBCardTitle className="about-sri-title">
											Lacquer work (Laksha)
											(Kurunegala Workshop)
										</MDBCardTitle>
										<MDBCardText>
											These skillfully made
											traditional handicrafts are a
											very popular choice amongst
											tourists and seekers of tokens
											depicting Sri Lankan culture.
											Originating in central Sri
											Lanka, the knowledge of lacquer
											making has spread throughout
											the island over the centuries.
										</MDBCardText>
										<button
											onClick={() => {
												window.location.href = "/client/about-sri-lanka";
											  }}
											style={{backgroundColor: "blue", color: "white", width: 80, height: 35}}>
											See More
										</button>
									</MDBCardBody>
								</MDBCard>
								<MDBCard className="card trip-details">
									<MDBCardImage
										src="https://lesterlost.com/wp-content/uploads/2017/04/lesterlost-travel-handmade-crafts-sri-lanka-wood-masks-1.jpg"
										position="top"
										alt="..."
									/>
									<MDBCardBody>
										<MDBCardTitle className="about-sri-title">
											Sri Lanka Crafts: Masks
											(Ambalangoda Workshop)
										</MDBCardTitle>
										<MDBCardText>
											Masks are deeply connected to
											healing rituals and can be a
											good thing to buy in Sri Lanka.
											Known as “Devil Dances”, the
											drama-performances tell an
											elaborate story of fighting
											diseases brought about by
											“yakkas” or devils.
											<br />
											Masks are a facial decorative
											wear in Sri Lankan dancing. The
											performance-dances using masks.
										</MDBCardText>
										<button
											onClick={() => {
												window.location.href = "/client/about-sri-lanka";
											  }}
											style={{backgroundColor: "blue", color: "white", width: 80, height: 35}}>
											See More
										</button>
									</MDBCardBody>
								</MDBCard> */}
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}
