import React, { useState } from "react";
import {
	MDBNavbar,
	MDBContainer,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBNavbarToggler,
	MDBNavbarBrand,
	MDBCollapse,
} from "mdb-react-ui-kit";
import logo from "../../../assets/logo/logo.png";
import { ReactComponent as Person } from "../../../assets/icons/person.svg";

export default function ClientHeader() {
	const [showNavColor, setShowNavColor] = useState(false);

	return (
		<>
			<MDBNavbar
				expand="lg"
				dark
				style={{
					height: 70,
					backgroundColor: "rgb(0, 33, 65)",

				}}>
				<MDBContainer fluid>
					<MDBNavbarBrand style={{ marginRight: 120 }} href="#">
						<img
							src={logo}
							style={{
								height: 60,
								width: 150,
								marginLeft: 50,
							}}
							alt="tute"
						/>
					</MDBNavbarBrand>
					<MDBNavbarToggler
						type="button"
						data-target="#navbarColor02"
						aria-controls="navbarColor02"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setShowNavColor(!showNavColor)}>
						<MDBIcon icon="bars" fas />
					</MDBNavbarToggler>
					<MDBCollapse show={showNavColor} navbar>
						<MDBNavbarNav className="me-auto mb-2 mb-lg-0">
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 20,
									fontWeight: 600,
								}}>
									<MDBNavbarLink
									href="#"
									style={{
										color: "white",
										fontSize: 16,
										fontFamily: "monospace",
									}}>
									Home
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 20,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									href="/client/product/producthome"
									style={{
										color: "white",
										fontSize: 16,
										fontFamily: "monospace",
									}}>
									 Products
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 20,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									href="/client/tour-trip-details"
									style={{
										color: "white",
										fontSize: 16,
										fontFamily: "monospace",
									}}>
									 Trips
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 20,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									href="#"
									style={{
										color: "white",
										fontSize: 16,
										fontFamily: "monospace",
									}}>
									 Events
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 20,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									href="/client/reviewpage"
									style={{
										color: "white",
										fontSize: 16,
										fontFamily: "monospace",
									}}>
									Review & Feedback
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 250,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									href="#"
									style={{
										color: "white",
										fontSize: 16,
										fontFamily: "monospace",
									}}>
									Contact Us
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 20,
									fontWeight: 600,
									marginTop: 5,
								}}>
								<Person
								style={{ color: "white", padding: 0 }}
								/>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</>
	);
}
