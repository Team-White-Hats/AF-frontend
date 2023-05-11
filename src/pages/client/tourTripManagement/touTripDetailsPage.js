import React from "react";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardText,
	MDBCardTitle,
} from "mdb-react-ui-kit";

export default function TourTripDetailsPage() {
	return (
		<MDBContainer fluid>
			<MDBCardTitle
				style={{
					marginTop: 25,
					alignItems: "center",
					display: "flex",
					justifyContent: "center",
					fontWeight: 700,
					fontSize: 25,
				}}>
				Tour trip details
			</MDBCardTitle>
			<MDBCard
				className="text-black m-5"
				style={{ borderRadius: "25px" }}>
				<MDBCardBody>
					<MDBRow>
						<MDBCol
							md="10"
							lg="6"
							className="order-2 order-lg-1 d-flex flex-column align-items-center">
							<MDBCardTitle className="about-sri-title">
								Sri Lanka Crafts: Batik (Ambalangoda
								Workshop)
							</MDBCardTitle>
							<MDBCardText>
								Originally from Indonesia, the art of
								making batik was introduced to Sri Lanka by
								the Dutch. There are numerous factories and
								small workshops around Sri Lanka, which
								produce large quantities of batik clothes.
								Batik is a time-consuming process which
								consists of applying wax to non-dye areas.
							</MDBCardText>
							<MDBCardText>
								After each dyeing, you need to set the
								colour in the fabric. You wash out the old
								wax and apply new wax for the next dyeing.
								With this time-consuming process, the
								number of colours is an indicator of how
								much work was required. The more colours
								there are, the more time it took! Batik is
								probably on top of my list for Sri Lanka
								crafts!
							</MDBCardText>
							<MDBCardText style={{ marginRight: 500 }}>
								Start Location : Colombo
							</MDBCardText>
							<MDBCardText style={{ marginRight: 500 }}>
								End Location : Colombo
							</MDBCardText>
							<MDBCardText style={{ marginRight: 530 }}>
								Transport Type : Van
							</MDBCardText>
							<MDBCardText style={{ marginRight: 530 }}>
								Entry Price : Rs. 500
							</MDBCardText>
							<MDBCardText style={{ marginRight: 550 }}>
								Route : Colombo
							</MDBCardText>
						</MDBCol>

						<MDBCol
							md="10"
							lg="6"
							className="order-1 order-lg-2 d-flex align-items-center">
							<MDBCardImage
								style={{ width: 650, height: 400 }}
								src="https://lesterlost.com/wp-content/uploads/2017/04/lesterlost-travel-handmade-sri-lanka-crafts-batik-progress-1.jpg"
								fluid
							/>
						</MDBCol>
					</MDBRow>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
}
