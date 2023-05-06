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
import logo from "../assets/logo/logo.png";
import { ReactComponent as Person } from "../assets/icons/person.svg";

export default function Header() {
	const [showNavColor, setShowNavColor] = useState(false);

	return (
		<>
			<MDBNavbar
				expand="lg"
				dark
				style={{
					height: 70,
					backgroundColor: "#2a2a72",
					background:
						"linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
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
									marginRight: 30,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									aria-current="page"
									href="#"
									style={{
										color: "white",
										fontSize: 14,
									}}>
									Home
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 30,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									href="#"
									style={{
										color: "white",
										fontSize: 14,
									}}>
									Get Your Products
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 30,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									href="#"
									style={{
										color: "white",
										fontSize: 14,
									}}>
									Plan Your trip
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 30,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									href="#"
									style={{
										color: "white",
										fontSize: 14,
									}}>
									Upcoming Events
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem
								className="active"
								style={{
									marginRight: 30,
									fontWeight: 600,
								}}>
								<MDBNavbarLink
									href="#"
									style={{
										color: "white",
										fontSize: 14,
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
										fontSize: 14,
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
