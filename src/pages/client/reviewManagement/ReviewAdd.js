import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
// import background from "../../../assets/images/backgroundImg.jpg";
import VueSweetalert2 from "sweetalert2";

function ReviewForm() {
	const [rating, setRating] = useState("");
	const [hover, setHover] = useState(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
    const [reviewHeader, setReviewHeader] = useState("");
	const [review, setReview] = useState("");
	const [formErrors, setFormErrors] = useState({});
	const [listOfreview, setlistOfreview] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validate();
		if (Object.keys(errors).length === 0) {
		  createcReview();
		}
		setFormErrors(errors);
	  };

	  const validate = () => {
		const errors = {};
		const requiredFields = [{ key: 'name', message: 'User Name is required!' },
		{ key: 'email', message: 'Email is required!' },
		{ key: 'reviewHeader', message: 'Review Header is required!' },
		{ key: 'review', message: 'review is required!' },
		{ key: 'rating', message: 'rating is required!' }];
	  
		requiredFields.forEach((field) => {
		  if (!eval(field.key)) {
			errors[field.key] = field.message;
		  }
		});
	  
		// if (contacts && contacts.length !== 10) {
		//   errors.contacts = 'Phone number is invalid!';
		// }
	  
		 return errors;
	  };

	  const createcReview = () => {
		Axios.post("http://localhost:8000/api/review/create", {
		  
		 name,
		 email,
		 reviewHeader,
		 review,
		 rating,
		}).then((response) => {
		  setlistOfreview([
			...listOfreview,
			{
			  
			  name,
			  email,
			  reviewHeader,
			  review,
			  rating,
			 
			},
		  ]);
		});
		VueSweetalert2.fire({
			toast: true,
			position: 'center',
			showConfirmButton: false,
			timer: 1000,
			icon: 'success',
			title: 'Your Review added successfully!',
		}).then(function () {
		  // Redirect the user
		  window.location.href = "/client/reviewpage";
		});
	};
	

	const styles = {
		form: {
			marginTop: "20px",
			maxWidth: "1000px",
			margin: "0 auto",
			padding: "5rem",
			//backgroundColor: "#f8f9fa",
			borderRadius: "10px",
			boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
            
		},
		button: {
			marginTop: "1rem",
			borderRadius: "5px",
			backgroundColor: "#007bff",
			borderColor: "#007bff",
			padding: "0.5rem 1rem",
			fontSize: "1.2rem",
			fontWeight: "bold",
		},
		rating: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			margin: "1rem 0",
		},
		star: {
			cursor: "pointer",
			transition: "color 0.25s ease-out",
		},
		label: {
			margin: "0 2rem",
		},
		input: {
			borderRadius: "5px",
			padding: "0.5rem",
			fontSize: "1.2rem",
			border: "1px solid #ced4da",
			backgroundColor: "#f8f9fa",
		},
		textarea: {
			borderRadius: "5px",
			padding: "0.5rem",
			fontSize: "1.2rem",
			border: "1px solid #ced4da",
			backgroundColor: "#f8f9fa",
		},
	};

	//   const pageStyles = {
    //     backgroundImage: `url(${background})`,
	//     backgroundSize: 'cover',
	//     backgroundRepeat: 'no-repeat',
	//     minHeight: '100vh',
	//     display: 'flex',
	//     alignItems: 'center',
	//     justifyContent: 'center',
	//     opacity: 0.8,

	//   };

	return (
		<div>
			<Form className="mt-5" style={styles.form} >
				<h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
					Leave a Review
				</h2>
				<Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your name"
						style={styles.input}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<p class="alert-txt">{formErrors.name}</p>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter your email"
						style={styles.input}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<p class="alert-txt">{formErrors.email}</p>
				</Form.Group>

                <Form.Group controlId="formBasicReviewHeader">
					<Form.Label>Review Hader</Form.Label>
					<Form.Control
						type="ReviewHeader"
						placeholder="Enter your Header"
						style={styles.input}
						value={reviewHeader}
						onChange={(e) => setReviewHeader(e.target.value)}
					/>
					<p class="alert-txt">{formErrors.reviewHeader}</p>
				</Form.Group>


				<Form.Group controlId="formBasicReview">
					<Form.Label>Review</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Enter your review"
						style={styles.textarea}
						value={review}
						onChange={(e) => setReview(e.target.value)}
					/>
					<p class="alert-txt">{formErrors.review}</p>
				</Form.Group>

				<Form.Group controlId="formBasicRating">
					<Form.Label>Rating</Form.Label>
					<div style={styles.rating}>
						{[...Array(5)].map((star, i) => {
							const ratingValue = i + 1;
							return (
								<label key={i} style={styles.label}>
									<input
										type="radio"
										name="rating"
										value={ratingValue}
										onClick={() =>
											setRating(ratingValue)
										}
										style={{ display: "none" }}
									/>
									<p class="alert-txt">{formErrors.rating}</p>
									<FaStar
										className="star"
										color={
											ratingValue <=
											(hover || rating)
												? "#ffc107"
												: "#ffffff"
										}
										size={35}
										onMouseEnter={() =>
											setHover(ratingValue)
										}
										onMouseLeave={() => setHover(null)}
										style={styles.star}
									/>
								</label>
							);
						})}
					</div>
				</Form.Group>

				<Button
					variant="primary"
					type="submit"
					style={styles.button}
					onClick={handleSubmit}
					>
					Submit
					
				</Button>
			</Form>
		</div>
        
	);

}

export default ReviewForm;
