import React from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardImage,
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
} from "mdb-react-ui-kit";

export default function AboutSriLanka() {
	return (
		<MDBContainer fluid className="bg-white">
			<MDBRow className="d-flex justify-content-center align-items-center h-80">
				<MDBCol>
					<MDBCard className="my-4">
						<h3 className="mb-3 text-uppercase fw-bold text-center mt-3">
							Culture Products Workshops
						</h3>
						<MDBCardBody className="text-black d-flex flex-column justify-content-center">
							<MDBRow>
								<MDBCard className="card trip-details mb-5">
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
											style={{backgroundColor: "blue", color: "white", width: 80, height: 35}}>
											See More
										</button>
									</MDBCardBody>
								</MDBCard>
								<MDBCard className="card trip-details">
									<MDBCardImage
										src="https://lesterlost.com/wp-content/uploads/2017/04/lesterlost-travel-handmade-sri-lanka-crafts-batik-progress-1.jpg"
										position="top"
										alt="..."
									/>
									<MDBCardBody>
										<MDBCardTitle className="about-sri-title">
											Sri Lanka Crafts: Batik
											(Ambalangoda Workshop)
										</MDBCardTitle>
										<MDBCardText>
											Originally from Indonesia, the
											art of making batik was
											introduced to Sri Lanka by the
											Dutch. There are numerous
											factories and small workshops
											around Sri Lanka, which produce
											large quantities of batik
											clothes. Batik is a
											time-consuming process which
											consists of applying wax to
											non-dye areas.
										</MDBCardText>
										<button
											onClick={() => {
												window.location.href = "/client/tour-trip";
											  }}
											style={{backgroundColor: "blue", color: "white", width: 80, height: 35}}>
											See More
										</button>
									</MDBCardBody>
								</MDBCard>
								<MDBCard className="card trip-details">
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
								</MDBCard>
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}
