import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import axios from "axios";
import { useHistory } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Notification from "../../../components/client/Notification/index";

function LoginPage() {
  const history = useHistory();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const errorHandling = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNumber === "" ||
      password === "" ||
      confirmPass === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = errorHandling();

    if (!hasErrors) {
      if (password === confirmPass) {
        const data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
        };

        console.log(data);

        axios
          .post("http://localhost:8000/api/user/create", data)
          .then((res) => {
            console.log(res);
            setNotify({
              isOpen: true,
              message: "User Registration Successful!",
              type: "success",
            });
            history.push("/client/login"); // Redirect to login page after successful registration
          })
          .catch((err) => {
            console.log(err);
            setNotify({
              isOpen: true,
              message: "User Registration Failed!",
              type: "error",
            });
          });
      } else {
        setNotify({
          isOpen: true,
          message: "Passwords you entered are different.",
          type: "error",
        });
      }
    }
  };

	
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage src="https://e0.pxfuel.com/wallpapers/817/567/desktop-wallpaper-srilanka%E2%9D%A4%EF%B8%8F-sri-lanka-nature.jpg" alt="login form" className="rounded-start " style={{height:729, width:380}} />
          </MDBCol>

          <MDBCol md="8">
            <MDBCardBody className="d-flex flex-column">
            <h6  style={{ letterSpacing: '1px' }}>
                Still Haven't a Account?
              </h6>
              <h4 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Create your account
              </h4>

              <form onSubmit={handleSubmit}>
              <MDBInput
                  wrapperClass="mb-4"
                  label="First Name"
                  id="formControlLg"
                  type="firstName"
                  size="lg"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last Name"
                  id="formControlLg"
                  type="lastName"
                  size="lg"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
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
                  label="Phone Nmuber"
                  id="formControlLg"
                  type="phoneNumber"
                  size="lg"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <MDBInput
  wrapperClass="mb-4"
  label="Password"
  id="formControlLg"
  type="password"
  size="lg"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
>
</MDBInput>

                <MDBInput
                  wrapperClass="mb-4"
                  label=" Confirm Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />

                <MDBBtn className="mb-4 px-5" color="dark" size="lg" type="submit" >
                  Register
                </MDBBtn>
              </form>

              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                I Already Have An Account.   <a href="/client/login" style={{ color: '#313f81' }}>Login</a>
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
      <Notification notify={notify} setNotify={setNotify} />
    </MDBContainer>
  );
}

export default LoginPage;
