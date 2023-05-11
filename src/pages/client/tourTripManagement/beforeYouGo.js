import React from "react";
import {
	MDBContainer,
	MDBRipple,
	MDBCardImage,
	MDBCard,
	MDBCardBody,
	MDBCardText,
	MDBCardTitle,
} from "mdb-react-ui-kit";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

function BeforeYouGo() {
	let items = document.querySelectorAll(".carousel .carousel-item");

	items.forEach((el) => {
		const minPerSlide = 4;
		let next = el.nextElementSibling;
		for (var i = 1; i < minPerSlide; i++) {
			if (!next) {
				next = items[0];
			}
			let cloneChild = next.cloneNode(true);
			el.appendChild(cloneChild.children[0]);
			next = next.nextElementSibling;
		}
	});

	return (
		<MDBContainer fluid>
			<h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center mt-4">
				Travel Tips
			</h3>
			<MDBCard className="card mdb-card mb-4">
				<MDBRipple
					rippleColor="light"
					rippleTag="div"
					className="bg-image hover-overlay">
					<a>
						<div
							className="mask"
							style={{
								backgroundColor:
									"rgba(251, 251, 251, 0.15)",
							}}></div>
					</a>
				</MDBRipple>
				<MDBCardBody>
					<MDBCardText>
						Sri Lanka’s heady mix of beautiful landscapes,
						incredibly friendly locals and British colonial
						heritage make it a beguiling destination. With
						turbulent years behind Sri Lanka, 2021 is the
						perfect time to visit. Here are ten Sri Lanka
						travel tips to help first-time visitors.
					</MDBCardText>
					<MDBCardTitle className="title-before-go">
						01. Prepare to go slow
					</MDBCardTitle>
					<MDBCardText>
						Although infrastructure is improving and transport
						options are plentiful, getting around this modestly
						sized country, with its tightly winding roads and
						engine-testing inclines, can feel a little trying
						at times.
					</MDBCardText>
					<MDBCardTitle className="title-before-go">02. Go to relax, not to rave</MDBCardTitle>
					<MDBCardText>
						Outside of Colombo, and a few beach resorts,
						hostels with dorm rooms tend to be thin on the
						ground. Family-run guesthouses are much more
						common. This makes it easy to meet locals but
						harder for solo travellers hoping to make friends
						on the road. As an emerging honeymoon hotspot, Sri
						Lanka also attracts a lot of couples. Those looking
						for nightlife to rival Bangkok’s Khao San Road will
						leave unfulfilled: beach bars pepper Arugam Bay on
						the east coast and Hikkaduwa on the west, but these
						are mellow affairs and many shut down out of
						season.
					</MDBCardText>
					<MDBCardTitle className="title-before-go">03. Treat yourself</MDBCardTitle>
					<MDBCardText>
						If you've got Sri Lankan rupees to spare there are
						plenty of new luxury hotels and resorts where you
						can spend them. International names such as Aman
						have already set up shop on the island, and
						Shangri-La operates two hotels on the island, one
						in Colombo and one in Hambantota. But it’s the
						home-grown, luxury hotel mini-chains that you ought
						to keep your eye on. Uga Escapes, with for example
						the Chena Huts in Yala, and Resplendent Ceylon with
						properties such as Cape Weligama are just two
						examples of burgeoning local brands that offer more
						than just copy-and-paste properties.
					</MDBCardText>
					<MDBCardTitle className="title-before-go">
						{" "}
						04. Go north to get away from the crowds
					</MDBCardTitle>
					<MDBCardText>
						Formerly off-limits, the country's Northern
						Province is prime territory for those who want to
						roam off the beaten path. Once a Tamil Tiger
						stronghold, it was one of the last areas on the
						island to reopen to tourists, and has yet to
						succumb to the same wave of hotels, resorts and
						other developments – or to receive the same flurry
						of foreign visitors.
					</MDBCardText>
					<MDBCardTitle className="title-before-go" style={{marginLeft: 550}}>
						{" "}
						Related articles from the blog
					</MDBCardTitle>
					<div class="container text-center my-3">
						{" "}
						<div class="row mx-auto my-auto justify-content-center">
							<div
								id="recipeCarousel"
								class="carousel slide"
								data-bs-ride="carousel">
								{" "}
								<div class="carousel-inner" role="listbox">
									{" "}
									<div class="carousel-item active">
										{" "}
										<div class="col-md-3">
											{" "}
											<div class="card">
												{" "}
												<div class="card-img">
													{" "}
													<img
														src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/Cover-places-to-visit-in-sri-lanka-with-kids.jpg"
														className="img-fluid"
													/>{" "}
												</div>
											</div>{" "}
										</div>{" "}
									</div>{" "}
									<div class="carousel-item">
										<div class="col-md-3">
											{" "}
											<div class="card">
												<div class="card-img">
													{" "}
													<img
														src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/Minneriya-National-Park.jpg"
														className="img-fluid"
													/>
												</div>{" "}
											</div>
										</div>{" "}
									</div>{" "}
									<div class="carousel-item">
										<div class="col-md-3">
											{" "}
											<div class="card">
												{" "}
												<div class="card-img">
													<img
														src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/Sigiriya-cover.jpg"
														className="img-fluid"
													/>{" "}
												</div>
											</div>{" "}
										</div>{" "}
									</div>
									<div class="carousel-item">
										{" "}
										<div class="col-md-3">
											{" "}
											<div class="card">
												{" "}
												<div class="card-img">
													<img
														src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/Kosgada-Turtle-Hatchery.jpg"
														className="img-fluid"
													/>{" "}
												</div>
											</div>{" "}
										</div>{" "}
									</div>
									<div class="carousel-item">
										{" "}
										<div class="col-md-3">
											{" "}
											<div class="card">
												{" "}
												<div class="card-img">
													<img
														src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/02/Temple-of-Tooth-in-Sri-Lanka.jpg"
														className="img-fluid"
													/>{" "}
												</div>
											</div>{" "}
										</div>{" "}
									</div>{" "}
								</div>
								<a
									class="carousel-control-prev bg-transparent w-aut"
									href="#recipeCarousel"
									role="button"
									data-bs-slide="prev">
									{" "}
									<span
										class="carousel-control-prev-icon"
										aria-hidden="true"></span>{" "}
								</a>{" "}
								<a
									class="carousel-control-next bg-transparent w-aut"
									href="#recipeCarousel"
									role="button"
									data-bs-slide="next">
									{" "}
									<span
										class="carousel-control-next-icon"
										aria-hidden="true"></span>{" "}
								</a>{" "}
							</div>{" "}
						</div>
					</div>
				</MDBCardBody>
			</MDBCard>

			<MDBCard className="card mdb-card mb-4">
				<MDBRipple
					rippleColor="light"
					rippleTag="div"
					className="bg-image hover-overlay">
					<a>
						<div
							className="mask"
							style={{
								backgroundColor:
									"rgba(251, 251, 251, 0.15)",
							}}></div>
					</a>
				</MDBRipple>
				<MDBCardBody>
					<MDBCardTitle className="title-before-go">05. Focus on food</MDBCardTitle>
					<MDBCardText>
						Sri Lankan food is delicious, so make the most of
						it while you’re there. However, knowing where and
						when to find the good stuff may prove a harder task
						than you anticipated. Bowl-shaped hoppers (savoury
						rice flour crêpes) are a highlight, though they are
						typically only served first thing in the morning or
						late afternoon. Rice and curry is a lunchtime
						affair, while kottu rotty (chopped flatbread
						stir-fried with eggs and vegetables) is only
						available in the evening.
					</MDBCardText>
					<MDBCardImage
						src="https://deih43ym53wif.cloudfront.net/large_sri-lanka-hoppers-food-shutterstock_1041114478_be380692b5.jpeg"
						fluid
						alt="..."
						className="food-image"
					/>
				</MDBCardBody>
			</MDBCard>

			<MDBCard className="card mdb-card mb-4">
				<MDBRipple
					rippleColor="light"
					rippleTag="div"
					className="bg-image hover-overlay">
					<a>
						<div
							className="mask"
							style={{
								backgroundColor:
									"rgba(251, 251, 251, 0.15)",
							}}></div>
					</a>
				</MDBRipple>
				<MDBCardBody>
					<MDBCardTitle className="title-before-go">06. Consider Colombo</MDBCardTitle>
					<MDBCardText>
						With jazz clubs, rooftop bars, boutique stores and
						internationally acclaimed restaurants, Colombo can
						no longer be considered a mere gateway city. And
						though there are a number of sights to see, the
						capital is also a great place to simply settle in
						and get a sense of what local life is like.
					</MDBCardText>
				</MDBCardBody>
			</MDBCard>
			<MDBCard className="card mdb-card mb-4">
				<MDBRipple
					rippleColor="light"
					rippleTag="div"
					className="bg-image hover-overlay">
					<a>
						<div
							className="mask"
							style={{
								backgroundColor:
									"rgba(251, 251, 251, 0.15)",
							}}></div>
					</a>
				</MDBRipple>
				<MDBCardBody>
					<MDBCardTitle className="title-before-go">07. Plan around the seasons</MDBCardTitle>
					<MDBCardText>
						While the monsoon rains might not dampen your
						enthusiasm for exploring, bear in mind that
						experiences can vary wildly depending on the
						season. If you’re desperate to climb Adam’s Peak,
						for example, then visit during pilgrimage season
						(December–May). Outside of these months it’s still
						possible to hike to the summit, but the myriad tea
						shops that line the path will be closed. You’ll
						also tackle the peak with a handful of tourists
						instead of hundreds of local devotees, meaning much
						of the atmosphere and camaraderie among climbers is
						lost.
					</MDBCardText>
					<MDBCardImage
						src="https://deih43ym53wif.cloudfront.net/large_adam-peak-sri-lanka-shutterstock_256117486_7f5dd205df.jpeg"
						fluid
						alt="..."
						className="food-image"
					/>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
}
export default BeforeYouGo;
