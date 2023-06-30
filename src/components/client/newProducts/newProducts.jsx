
import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import './newProduct.css'
import { fontWeight } from "@mui/system";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function NewProducts(addToCart){
    const [productName,setProductName] = useState("");
    const [productCategory,setproduct_category] = useState("");
    const [productPrice,setproduct_price] = useState("");
    const [contacts,setcontacts] = useState("");
    const [productImage,setimage] = useState("");
    const [quantity, setquantity] = useState("");
    const [status,setstatus] = useState("");
    const [smallDes,setsmallDes] = useState("");
    const [longDes,setlongDes] = useState("");


   
    const showDetail = (id) => {
        fetch(`http://localhost:8000/api/product/getproductbyId/${id}`)
        .then((response) => response.json())
          .then((data) => {
           setProductName(data.product.productName);
           setproduct_category(data.product.productCategory);
           setproduct_price(data.product.productPrice)
           setcontacts(data.product.contacts);
           setimage(data.product.productImage);
           setquantity(data.product.quantity);
           setstatus(data.product.status);
           setsmallDes(data.product.smallDes);
           setlongDes(data.product.longDes);

           console.log(data)
            console.log("Fetched product details:", data);
          })
          .catch((error) => {
            console.error("Error fetching product details:", error);
          });
      };
    
  const [listOfProducts,setlistOfproducts] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:8000/api/product/all").then((response) => {
        setlistOfproducts(response.data);
      });
    }, [])
   return(

        <div>
        
      <Carousel breakPoints={breakPoints}>
          {listOfProducts && listOfProducts.map((StoreProduct,i) => {

            return (
            <div class="card" id="topcrs-crd" style={{height:453}}>
                <div class="image">
              <img src={StoreProduct.productImage} class="card-img-top" alt="..."/>
              </div>
              <div class="card-body" onclick="openPopup()">
                <h4 class="card-title">{StoreProduct.productName}</h4>
               <div  className="row" class="lineprice" >
                <h4 class="pkg-price" > Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ &nbsp;{StoreProduct.productPrice}</h4>
                
                </div>
               <div> <p class="card-text">{StoreProduct.smallDes}</p> </div>
               <div></div>
               <div className="row" style={{paddingTop:"20px"}}>
      <div className="col">
        <button
          type="button"
          className="btn"
          id="btn"
          onClick={(e) => showDetail(StoreProduct._id)}
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          style={{width: 100, padding: 5}}
        >
          Details <i className="far fa-eye" />
        </button>
      </div>
      <div className="col"  > 
      <Link to= {`/client/delivery/${StoreProduct._id}`}> <button type="button" id="btn" className="btn" style={{borderRadius:"20px", paddingLeft:"10px",width:"10px"}}>
           <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button></Link>
      </div>
    </div>
               <div></div>
              </div>

            <div>

            </div>

            </div>
          
        
           
            );
          
          })}
      </Carousel>


      <div class="modal" id="myModal" style={{width:1500}}>
        <div class="modal-dialog" style={{width:1500}}>
          <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div className="row">
            <div className="col-sm-5">
            <div class="img-modal">  <img src={productImage} alt='' style={{marginRight: 10}}/></div>
             </div>
             <div className="col-sm-7"><h2 style={{ paddingBottom:'30px', fontWeight:"bold" }}>{productName}</h2>
             <div style={{ paddingLeft:'0' }}>  <h5 style={{ fontWeight:"bold", marginLeft: 50 }}>Product Category: {productCategory}</h5>  </div>
             <div> <h5 style={{ fontWeight:"bold", marginLeft: 50 }}>Product Price: ${productPrice}</h5> </div>
             <div> <h5 style={{ fontWeight:"bold", marginLeft: 50 }}>Manufacture Contacts: {contacts}</h5> </div>
             
             </div>
            </div>
            <div className="row">
            <div className="col-sm-7">
            <div><h4 style={{ marginTop:'30px', fontWeight:"bold" }}>Additional Info</h4> </div>
            <h5 style={{fontSize: 18}}>{longDes}</h5>
             </div>
                </div>



            </div>
              
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
              
          </div>
        </div>
      </div>
  
    </div>
 

    );
}

export default NewProducts;


