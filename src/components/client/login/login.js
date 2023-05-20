import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import axios from "axios";
import { useHistory } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import the required MDB CSS

function LoginPage() {

    const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [notify, setNotify] = useState({
		isOpen: false,
		message: "",
		type: "",
	});

	const navigateRegister = () => {
		history.push("/user/register");
	};

	if (isLoggedIn) {
		localStorage.setItem("loggedIn", true);
	}
    const onLogin = async (e) => {
		e.preventDefault();
		const data = {
			email: email,
			password: password,
		};
		try {
			await axios
				.post("http://localhost:8000/api/login/", data)
				.then((result) => {
					console.log({ result });
					setNotify({
						isOpen: true,
						message: "Successfully logged in",
						type: "success",
					});
					localStorage.setItem(
						"authentication",
						result.data.authentication,
					);
					setIsLoggedIn(true);
					localStorage.setItem("isLoggedIn", true);
					localStorage.setItem("roleData", result.data.roleData);
					localStorage.setItem("id", result.data.roleData._id);
                    localStorage.setItem(
						"fname",
						result.data.roleData.firstName,
					);
					localStorage.setItem(
						"lname",
						result.data.roleData.lastName,
					);
					setInterval(() => {
						if (result.data.roleData.isUser === true) {
							history.push("/client/tour/home");
							window.location.reload();
						} else {
							history.push("/admin/useradmin");
							window.location.reload();
						}
					}, 1500);
				})
				.catch((err) => {
					console.log(err);
					alert("Failed to Login");
					setNotify({
						isOpen: true,
						message: "Failed to Login",
						type: "error",
					});
				});
		} catch (err) {
			console.log(err);
		}
	};

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage src="https://w0.peakpx.com/wallpaper/439/706/HD-wallpaper-yaka-mask-4-rock-sri-lanka-culture-western.jpg" alt="login form" className="rounded-start w-100" />
          </MDBCol>

          <MDBCol md="8">
            <MDBCardBody className="d-flex flex-column">
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Sign into your account
              </h5>

              <form>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <MDBBtn className="mb-4 px-5" color="dark" size="lg" type="submit" onClick={onLogin}>
                  Login
                </MDBBtn>
              </form>

              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                Don't have an account? <a href="/client/register" style={{ color: '#393f81' }}>Register here</a>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default LoginPage;