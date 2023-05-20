
import React from "react";
import Axios from "axios";
import "./productview.css";
import { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";


function ProductView(){
    const {cat} = useParams();
    const [productSearch,setproductSearch] = useState("");
    const [listOfProducts,setlistOfproducts] = useState([]);
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





    useEffect(() => {
      Axios.get(`http://localhost:8000/api/product/${cat}`).then((response) => {
        setlistOfproducts(response.data);
      });
    }, [])




return(

    <div>
        <div className="bg-white p-3 mb-3"  style={{marginTop:"40px",paddingBottom:'400px' ,backgroud:"white" ,heigh:"1000px"}}>
              <center> <h3> Shop {cat}  Products</h3></center>
          <input type="search"  onChange ={(e)=>{setproductSearch(e.target.value); }} className="form-control rounded" placeholder="Search By Product name" aria-label="Search" aria-describedby="search-addon" />
          </div>
          <div class="product-grid" style={{marginTop:"40px",paddingBottom:'400px',marginLeft:"20px"}}>
    {listOfProducts&&listOfProducts.filter(value=>{
        if(productSearch ===""){
            return value;
        }else if(
            value.productName.toLowerCase().includes(productSearch.toLowerCase())
        ){
            return value
        }
    }).map((StoreProduct, i) => (

        <div className="row">
            <div className="col-sm-5">
            <div class="card" id="topcrs-crd" style={{height:450}}>
                <div class="image">
              <img src={StoreProduct.productImage} class="card-img-top" alt="..."/>
              </div>
              <div class="card-body" onclick="openPopup()">
                <h4 class="card-title">{StoreProduct.productName}</h4>
               <div  className="row" class="lineprice" >
                <h4 class="pkg-price" > Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ &nbsp;{StoreProduct.productPrice}</h4>
                
                </div>
               <div > <p class="card-text">{StoreProduct.smallDes}</p> </div>
               <div style={{paddingTop:40}}><button type="button" id="btn" class="btn"   style={{width: 100, padding: 5}}onClick={(e)=>showDetail(StoreProduct._id)} data-bs-toggle="modal" data-bs-target="#myModal" > Details <i className="far fa-eye"/></button></div>
             
              </div>

            <div>

            </div>

            </div>
          
    </div>



        </div>
      ))}

<div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div className="row">
            <div className="col-sm-5">
            <div class="img-modal">  <img src={productImage} alt='' /></div>
             </div>
             <div className="col-sm-7"><h2 style={{ paddingBottom:'30px', fontWeight:"bold" }}>{productName}</h2>
             <div style={{ paddingLeft:'0' }}>  <h5 style={{ fontWeight:"bold" }}>Product Category: {productCategory}</h5>  </div>
             <div> <h5 style={{ fontWeight:"bold" }}>Product Price: ${productPrice}</h5> </div>
             <div> <h5 style={{ fontWeight:"bold" }}>Manufacture Contacts: {contacts}</h5> </div>
             
             </div>
            </div>
            <div className="row">
            <div className="col-sm-7">
            <div><h4 style={{ marginTop:'30px' }}>Additional Info</h4> </div>
            <h5>{longDes}</h5>
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
</div>


       
);


}

export default ProductView;