import React from "react";
import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import Visa from '../../../assets/paymentimage/download.png'
import Paypal from '../../../assets/paymentimage/paypal.png'
import Master from '../../../assets/paymentimage/master.png'
import VueSweetalert2 from "sweetalert2";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBRadio,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";
import Axios from "axios";


function ProductDelivery() {
  const [selectedPayment, setSelectedPayment] = useState('');
  const {id} = useParams();
  const [productName,setProductName] = useState("");
  const [productCategory,setproduct_category] = useState("");
  const [productPrice,setproduct_price] = useState("");
  const [contacts,setcontacts] = useState("");
  const [productImage,setimage] = useState("");
  const [quantity, setquantity] = useState("");
  const [status,setstatus] = useState("");
  const [smallDes,setsmallDes] = useState("");
  const [longDes,setlongDes] = useState("");
  const [listOforder, setlistOforder] = useState([]);
  const [deliveryAddress,setdeliveryAddress] = useState("");
  const [customeremail,setcustomeremail] = useState("");
  const [customerContacts,setcustomerContacts] = useState("");
  const [paymentMethod,setpaymentMethod] = useState("");


  useEffect(() => {
    Axios.get(`http://localhost:8000/api/product/getproductbyId/${id}`).then(res => {
        setProductName(res.data.product.productName);
        setproduct_category(res.data.product.productCategory);
        setproduct_price(res.data.product.productPrice)
        setcontacts(res.data.product.contacts);
        setimage(res.data.product.productImage);
        setquantity(res.data.product.quantity);
        setstatus(res.data.product.status);
        setsmallDes(res.data.product.smallDes);
        setlongDes(res.data.product.longDes);

        console.log(res.data);
        })		
    }, [])

    const createcOrder = () => {
        Axios.post("http://localhost:8000/api/order/create/", {
          
         id,
         productName,
         deliveryAddress,
         productImage,
         customeremail,
         customerContacts,
         selectedPayment,
       
        }).then((response) => {
            setlistOforder([
            ...listOforder,
            {
              
                id,
                productName,
                deliveryAddress,
                productImage,
                customeremail,
                customerContacts,
                selectedPayment,
            },
          ]);
        });
        VueSweetalert2.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
            icon: 'success',
            title: 'Your Product details added to the System',
        }).then(function () {
          // Redirect the user
          window.location.href = "/admin/productadmin";
        });
      };




  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handlePurchaseClick = () => {
    if (selectedPayment === 'option1') {
        createcOrder();
    
      
    } else if (selectedPayment === 'option2') {
        openDiv(true);
    }
  };
  const closeModal = () => {
    setIsDivOpen(false);
  };

  const [isDivOpen, setIsDivOpen] = useState(false);

  // Function to open the div
  const openDiv = () => {
    setIsDivOpen(true);
  };

  // Function to close the div
  const closeDiv = () => {
    setIsDivOpen(false);
  };


  return (

    <div>
    <MDBContainer fluid>
    <MDBRow className="d-flex justify-content-center">
      {/* Product Details */}
      <MDBCol lg="5" className="my-5" >
        <MDBCard>
          <MDBCardBody className="px-4">
            <div>
            <h2>{productName}</h2>
            
              <img src={productImage} alt="Product Image" />
              <div  style={{ paddingTop:"20px" }}><h2>Price: ${productPrice}</h2></div>
              <p>{longDes}</p>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Delivery Details */}
      <MDBCol lg="6" className="my-5">
        <MDBCard>
          <MDBCardBody className="px-4">
          <MDBRow className="align-items-center pt-4 pb-3 mt-5">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-0"
                    style={{ fontSize: 14, fontWeight: 700 }}
                  >
                    Delivery Address
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBTextArea id="textAreaExample" rows={3}   onChange={(event) => {
                     setdeliveryAddress(event.target.value);
                    }} />
                </MDBCol>
              </MDBRow>

              <MDBRow className="align-items-center pt-4 pb-3 mt-5">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-0"
                    style={{ fontSize: 14, fontWeight: 700 }}
                  >
                    Email Address
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBTextArea id="textAreaExample" rows={3}  onChange={(event) => {
                      setcustomeremail(event.target.value);
                    }} />
                </MDBCol>
              </MDBRow>
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-0"
                    style={{ fontSize: 14, fontWeight: 700 }}
                  >
                   Phone Number
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput id="textAreaExample" rows={3} style={{height: 35}}  onChange={(event) => {
                      setcustomerContacts(event.target.value);
                    }} />
                </MDBCol>
              </MDBRow>
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-5"
                    style={{ fontSize: 14, fontWeight: 700 }}
                  >
                   Delivery Method
                  </h6>
                </MDBCol>
                <MDBCol>
                  <div className="d-md-flex ustify-content-start align-items-center mb-4">
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio1"
                      value="option1"
                      inline
                      checked={selectedPayment === 'option1'}
                      onChange={handlePaymentChange}
                    />
                    <h6 className="mb-0" style={{ fontSize: 14 }}>
                      Cash on Delivery
                    </h6>
                  </div>
                  <div className="d-md-flex ustify-content-start align-items-center mb-4">
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio2"
                      value="option2"
                      inline
                      checked={selectedPayment === 'option2'}
                      onChange={handlePaymentChange}
                    />
                    <h6 className="mb-0" style={{ fontSize: 14 }}>
                      Card Payment
                    </h6>
                  </div>
                </MDBCol>
              </MDBRow>

              

              <hr className="mx-n3" />

              <div><center><button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#myModal" onClick={handlePurchaseClick}  > Purchase Your product <i className="fas fa-file-invoice" onClick={handlePurchaseClick}/></button></center></div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  {isDivOpen && (
  <div className="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" toggle={closeModal}>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            
            <Form className="payment-form" style={{width: "100vh", maxheight: "100px", marginBottom: 20, }} >
      <h1 class="text-black mb-4" style={{ textAlign: "center" }}>Payment Details</h1>
      <h4 class="text-black mb-4" style={{ textAlign: "center" ,color:"red" }}>Total Pay Amount $ {productPrice}</h4>
      <MDBRow className=" d-flex" style={{ width: 1600, marginLeft: 80 }}>
        <MDBCol md="10" lg="30" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4" >
              <div className="d-flex" style={{gap:45, justifyContent:"center"}}>
                <div className="d-flex justify-content-start align-items-center mb-4">
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio1"
                    value="option1"
                    inline
                  />
                  <img  style={{maxHeight:"50px"}}
                    className="img-fluid"
                    src={Visa}
                  />
                </div>
                <div className="d-flex justify-content-start align-items-center mb-4">
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio2"
                    value="option2"
                    inline
                  />
                  <img style={{maxHeight:"50px"}}
                    className="img-fluid"
                    src={Master}
                  />
                </div>
                <div className="d-flex justify-content-start align-items-center mb-4">
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio2"
                    value="option2"
                    inline
                  />
                  <img 
                    className="img-fluid"
                    src={Paypal}
                    style={{maxHeight:"50px"}}
                  />
                </div>
              </div>
              <MDBRow className="align-items-center pt-2 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-3"
                    style={{ fontSize: 14, fontWeight: 700, width: 150 }}
                  >
                    Cardholder
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <Input
                    type="text"
                    id="cardName"
                    style={{ width: 300 }}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="align-items-center pt-2 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-5"
                    style={{ fontSize: 14, fontWeight: 700, width: 150 }}
                  >
                    Card Number
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <Input
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    style={{ width: 300 }}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="align-items-center pt-2 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-5"
                    style={{ fontSize: 14, fontWeight: 700, width: 150 }}
                  >
                    Expiry Date
                  </h6>
                </MDBCol>
                <MDBCol md="9" className="pe-5">
                  <Input
                    type="text"
                    id="cardNumber"
                    placeholder="MM/YY"
                    style={{ width: 300 }}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="align-items-center pt-2 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-5"
                    style={{ fontSize: 14, fontWeight: 700, width: 150 }}
                  >
                  CVV
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <Input
                    type="text"
                    id="cvv"
                    placeholder="CVV"
                    style={{ width: 300 }}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="my-4">
              </MDBRow>
              <center>
              <MDBBtn
                color="success"
                block
                type="submit"
                style={{
                  width: 150,
                  height: 40,
                  fontSize: 14,
                  alignItems: "center",
                  margin: "0 auto",
                  marginLeft: 400,
                  backgroundColor: "#3A9943",
                }}
                 onClick={() => {
                    createcOrder()
                 }}
              >
                Pay
              </MDBBtn>
              </center>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Form>

            </div>
              
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
              
          </div>
        </div>
      </div>


)}
  </div>

  );

}

export default ProductDelivery;