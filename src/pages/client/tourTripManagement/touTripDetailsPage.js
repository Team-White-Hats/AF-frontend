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
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function TourTripDetailsPage() {

    const location = useLocation();


    // let navigate = useNavigate();

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

    useEffect(() => {
		console.log(location.state.state)
        const getData = async () => {
            setPlaceName(location.state.placeName);
			setStartLocation(location.state.startLocation);
            setEndLocation(location.state.endLocation);
            setTransportType(location.state.transportType);
            setDescription(location.state.description);
			setEntryPrice(location.state.entryPrice);
			setProducts(location.state.products);
			setProductImages(location.state.productImages);
			setStatusType(location.state.statusType);
			setRoute(location.state.route);

        };
        getData();
    }, [location]);

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
								Sri Lanka Crafts: {products} ({placeName} {""}
								Workshop)
								
							</MDBCardTitle>
							<MDBCardText>
								{description}
							</MDBCardText>
							<MDBCardText style={{ marginRight: 500 }}>
								Start Location : {startLocation}
							</MDBCardText>
							<MDBCardText style={{ marginRight: 500 }}>
								End Location : {endLocation}
							</MDBCardText>
							<MDBCardText style={{ marginRight: 530 }}>
								Transport Type : {transportType}
							</MDBCardText>
							<MDBCardText style={{ marginRight: 530 }}>
								Entry Price : Rs. {entryPrice}
							</MDBCardText>
							<MDBCardText style={{ marginRight: 550 }}>
								Route : {route}
							</MDBCardText>
							<MDBCardText style={{ marginRight: 550 }}>
								Status : {statusType}
							</MDBCardText>
						</MDBCol>

						<MDBCol
							md="10"
							lg="6"
							className="order-1 order-lg-2 d-flex align-items-center">
							<MDBCardImage
								style={{ width: 650, height: 400 }}
								src={productImages}
								fluid
							/>
						</MDBCol>
					</MDBRow>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
}
