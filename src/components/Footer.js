/* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
	MDBFooter,
	MDBRow,
	MDBNavbarBrand,
	MDBContainer,
} from "mdb-react-ui-kit";
import logo from "../assets/logo/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
	return (
		<MDBFooter
			expand="lg"
			style={{
				backgroundColor: "#2a2a72",
				background:
					"linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
				marginTop: 345,
			}}>
			<MDBContainer fluid>
				<MDBRow style={{ marginLeft: 50 }}>
					<section class="">
						<h6
							class="text-uppercase fw-bold text-center"
							style={{
								marginLeft: 70,
								color: "white",
								marginTop: 25,
							}}>
							Quick Links
						</h6>
						<hr
							style={{
								width: 480,
								marginLeft: 495,
								color: "white",
								height: 2,
							}}
						/>
						<div class="container text-center text-md-start mt-5">
							<div class="row mt-3">
								<div
									class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
									style={{
										color: "white",
										marginTop: 10,
									}}>
									<h6 class="text mb-2">
										Tourism Hot Line
									</h6>
									<h6 class="text mb-8">1912</h6>
									<h6 class="text mb-2">
										Ambulance Service
									</h6>
									<h6 class="text">1990</h6>
								</div>
								<div
									class="col-md-2 col-lg-2 col-xl-2 mx-auto"
									style={{ color: "white" }}>
									<p>
										<a
											href="#!"
											class="text-reset"
											style={{ fontSize: 15 }}>
											Contact Us
										</a>
									</p>
									<p>
										<a
											href="#!"
											class="text-reset"
											style={{ fontSize: 15 }}>
											Get Your Products
										</a>
									</p>
									<p>
										<a
											href="#!"
											class="text-reset"
											style={{ fontSize: 15 }}>
											Review & Feedback
										</a>
									</p>
								</div>
								<div
									class="col-md-3 col-lg-2 col-xl-2 mx-auto"
									style={{ color: "white" }}>
									<p>
										<a
											href="#!"
											class="text-reset"
											style={{ fontSize: 15 }}>
											Plan Your Trip
										</a>
									</p>
									<p>
										<a
											href="#!"
											class="text-reset"
											style={{ fontSize: 15 }}>
											Upcoming Events
										</a>
									</p>
									<p>
										<a
											href="#!"
											class="text-reset"
											style={{ fontSize: 15 }}>
											Terms & Conditions
										</a>
									</p>
								</div>
								<div
									class="col-md-2 col-lg-2 col-xl-2 mx-auto"
									style={{ color: "white" }}>
									<MDBNavbarBrand href="#">
										<img
											src={logo}
											style={{
												marginTop: 20,
												height: 60,
												width: 150,
												marginBottom: 20,
											}}
											alt="tute"
										/>
									</MDBNavbarBrand>
								</div>
							</div>
						</div>
					</section>
				</MDBRow>
				<hr
					style={{
						backgroundColor: "white",
						height: 1,
						marginLeft: 35,
						marginRight: 35,
						color: "white",
					}}
				/>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: 5,
					}}>
					<FacebookOutlinedIcon style={{ color: "white" }} />
					<YouTubeIcon
						style={{ color: "white", marginLeft: 20 }}
					/>
					<InstagramIcon
						style={{ color: "white", marginLeft: 20 }}
					/>
					<TwitterIcon
						style={{ color: "white", marginLeft: 20 }}
					/>
				</div>

				<div
					className="text-center p-1"
					style={{
						backgroundColor: "#2a2a72",
						background:
							"linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
						color: "white",
						fontWeight: 50,
						fontSize: 10,
					}}>
					&copy; {new Date().getFullYear()} All Rights Reserved
					by:{" "}
					<a
						className="text"
						style={{ color: "white", fontWeight: 50 }}>
						Tour Trip Sri Lanka
					</a>
				</div>
			</MDBContainer>
		</MDBFooter>
	);
}
