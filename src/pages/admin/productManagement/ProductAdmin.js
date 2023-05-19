import React from "react";
import "./ProductAdmin.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import VueSweetalert2 from "sweetalert2";

function ProductAdmin() {

const [product_ids, setproduct_id] = useState("");
const [productName,setproduct_name] = useState("");
const [productCategory, setproduct_category] = useState(0);
const [contacts, setcontacts] = useState("");
const [quantity, setproduct_quantity] = useState(0);
const [productPrice, setproduct_price] = useState("");
const [longDes, setlongDesc] = useState("");
const [status, setstatus] = useState(0);
const [smallDes, setsmalldesc] = useState("");
const [listOfproduct, setlistOfproduct] = useState([]);
const [productImage,setproductImage] = useState("");
const [PackageSearch, setpkgSearch] = useState("");
const [formErrors, setFormErrors] = useState({});


const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validate();
  if (Object.keys(errors).length === 0) {
    createcProduct();
  }
  setFormErrors(errors);
};

const validate = () => {
  const errors = {};
  const requiredFields = [{ key: 'productName', message: 'product Name is required!' },
  { key: 'productCategory', message: 'product category is required!' },
  { key: 'productPrice', message: 'product Price is required!' },
  { key: 'contacts', message: 'Phone is required!' },{ key: 'longDes', message: 'Additional infor is required!' },{ key: 'smallDes', message: 'small description is required!' }];

  requiredFields.forEach((field) => {
    if (!eval(field.key)) {
      errors[field.key] = field.message;
    }
  });

  if (contacts && contacts.length !== 10) {
    errors.contacts = 'Phone number is invalid!';
  }

  return errors;
};
//add product 

const createcProduct = () => {
  Axios.post("http://localhost:8000/api/product/create/", {
    
   productName,
   productCategory,
   productPrice,
   contacts,
   productImage,
   quantity,
   status,
   smallDes,
    longDes,
  }).then((response) => {
    setlistOfproduct([
      ...listOfproduct,
      {
        
        productName,
        productCategory,
        productPrice,
        contacts,
        productImage,
        quantity,
        status,
         smallDes,
         longDes,
      },
    ]);
  });
  VueSweetalert2.fire({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1000,
      icon: 'success',
      title: 'Your Product details added to the System',
  }).then(function () {
    // Redirect the user
    window.location.href = "/admin/productadmin";
  });
};

useEffect(() => {
  Axios.get("http://localhost:8000/api/product/all").then((response) => {
    setlistOfproduct(response.data);
  });
}, []);

function updateProduct(e) {
  e.preventDefault();
  alert("Going to Update Product");
  const newPackage = {
    productName,
    productCategory,
    productPrice,
    contacts,
    productImage,
    quantity,
    status,
    smallDes,
     longDes,
  };
  
  
  Axios.put(`http://localhost:8000/api/product/${product_ids}`,newPackage).then(()=>{})
    .catch((err) => {
      console.log(err);
    });
    VueSweetalert2.fire({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1800,
      icon: 'success',
      title: 'Your Product details Updated Successfully',
  }).then(function () {
      // Redirect the user
      window.location.href = "/admin/productadmin";
    });
  
  }
    const  deleteProduct= () => {
      alert("You want to delete Course");
      Axios.delete(`http://localhost:8000/api/product/${product_ids}`).then((res) => {
          
       
        });
        VueSweetalert2.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1800,
            icon: 'success',
            title: 'Product Deleted Successfully',
        }).then(function () {
          // Redirect the user
          window.location.href = "/admin/productadmin";
        });
      };


const loadPackageDetailsedit = (StoreProduct) => {
  document.getElementById("reg").setAttribute("disabled", "true");
  document.getElementById("delete").setAttribute("disabled", "true");
  setproduct_id(StoreProduct._id);
  setproduct_name(StoreProduct.productName);
  setproduct_category(StoreProduct.productCategory);
  setcontacts(StoreProduct.contacts);
  setproductImage(StoreProduct.productImage);
  setproduct_quantity(StoreProduct.quantity);
  setproduct_price(StoreProduct.productPrice);
  setstatus(StoreProduct.status);
  setsmalldesc(StoreProduct.smallDes);
  setlongDesc(StoreProduct.longDes);
};

const loadPackageDetailsdelete = (StoreProduct) => {
  document.getElementById("reg").setAttribute("disabled", "true");
  document.getElementById("edit").setAttribute("disabled", "true");
  setproduct_id(StoreProduct._id);
  setproduct_name(StoreProduct.productName);
  setproduct_category(StoreProduct.productCategory);
  setcontacts(StoreProduct.contacts);
  setproductImage(StoreProduct.productImage);
  setproduct_quantity(StoreProduct.quantity);
  setproduct_price(StoreProduct.productPrice);
  setstatus(StoreProduct.status);
  setsmalldesc(StoreProduct.smallDes);
  setlongDesc(StoreProduct.longDes);
};


//image 
const addcoverimage= () => {
  let imgDiv = document.getElementById("imgInputDiv");

  let imgUploader = document.createElement("input");
  imgUploader.setAttribute("id", "imgUploader");
  imgUploader.setAttribute("type", "file");
  imgUploader.setAttribute("accept", "image/png, image/gif, image/jpeg");
  imgUploader.setAttribute("class", "d-none")
  imgDiv.appendChild(imgUploader);

  let imgUploaderElement = document.getElementById("imgUploader");
  console.log(imgUploaderElement);

  if (imgUploaderElement !== undefined && imgUploaderElement !== null) {
      imgUploaderElement.click();
      imgUploaderElement.addEventListener("change", () => {
          imgUploaderElement = document.getElementById("imgUploader");
          console.log(imgUploaderElement);
          if (imgUploaderElement.files[0] !== null && imgUploaderElement.files[0] !== undefined) {
              if (imgUploaderElement.files.length > 0) {
                  const fileReader = new FileReader();

                  fileReader.onload = function (event) {
                    setproductImage(event.target.result);
                  };

                  fileReader.readAsDataURL(imgUploaderElement.files[0]);
              }
          }
      });
  }

  document.getElementById("btnEditImg").removeAttribute("disabled");
  document.getElementById("btnImgDelete").removeAttribute("disabled");
}

const updatecoverimage = () => {
  document.getElementById("ProfileImage").removeAttribute("src");
  document.getElementById("btnAddImg").setAttribute("disabled", "true");

  let imgDiv = document.getElementById("imgInputDiv");

  let imgUploader = document.createElement("input");
  imgUploader.setAttribute("id", "imgUploader");
  imgUploader.setAttribute("type", "file");
  imgUploader.setAttribute("required", "true");
  imgUploader.setAttribute("accept", "image/png, image/gif, image/jpeg");
  imgUploader.setAttribute("class", "d-none")
  imgDiv.appendChild(imgUploader);

  let imgUploaderElement = document.getElementById("imgUploader");
  console.log(imgUploaderElement);

  if (imgUploaderElement !== undefined && imgUploaderElement !== null) {
      imgUploaderElement.click();
      imgUploaderElement.addEventListener("change", () => {
          imgUploaderElement = document.getElementById("imgUploader");
          console.log(imgUploaderElement);
          if (imgUploaderElement.files[0] !== null && imgUploaderElement.files[0] !== undefined) {
              if (imgUploaderElement.files.length > 0) {
                  const fileReader = new FileReader();

                  fileReader.onload = function (event) {
                    setproductImage(event.target.result);
                  };

                  fileReader.readAsDataURL(imgUploaderElement.files[0]);
              }
          }
      });
  }

}
const removecoverImages = () => {
document.getElementById("ProfileImage").removeAttribute("src");
document.getElementById("btnImgDelete").setAttribute("disabled", "true");
} 




  return (
    <div>
      <div className="main_container">
     <div className="item fw-bold fs-5">Product Management</div>
        <div className="item">
          <div className="row mt-5 ps-3">
            <div className="row">
              <div className=" col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="d-flex justify-content-start align-items-center">
                    <button id="btn-generate-report" className="btn me-3">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
              <div className=" col-lg-6 col-md-12 col-sm-12">
                <div className="row"></div>
              </div>
            </div>
          </div>
          <div className="row mt-5 px-3">
          <form>
                            <div className="row">
                                <div className="col d-flex justify-content-end align-items-center">
                                    <div className="col d-flex justify-content-end">
                                        <div>
                                            <button className="btn btnAddImg" id="btnAddImg" type="button" onClick={() => {
                                                      addcoverimage()
                                                    }}>
                                                <i className="fa fa-plus text-white" aria-hidden="true"/>
                                            </button>
                                            <button className="btn btnEditImg" id="btnEditImg" type="button" onClick={() => {
                                                      updatecoverimage()
                                                    }}>
                                                <i className="fa-solid fa-pen text-white"/>
                                            </button>
                                            <button className="btn btnImgDelete" id="btnImgDelete" type="button" onClick={() => {
                                                        removecoverImages()
                                                    }} >
                                                 
                                                <i className="fa-solid fa-trash-can d-inline text-white"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="imgInputDiv">
                                        <div>
                                            <img id="ProfileImage" className="imgDiv" src={productImage}
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

              <div className="row mt-3">
             
                <div className="col-sm-6">
                  <input
                    value={productName}
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    onChange={(event) => {
                      setproduct_name(event.target.value);
                    }}
                  />
                 <p class="alert-txt">{formErrors.productName}</p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <select
                  value={productCategory}
                    name="type"
                    className="form-select"
                    aria-label="role" 
                    onChange={(event) => {
                      setproduct_category(event.target.value);
                    }}
                  >
                    <option selected disabled value="0" >
                     Product Category
                    </option>
                    <option value="Handloom Textiles">Handloom Textiles</option>
                    <option value="Wood Carvings">Wood Carvings</option>
                    <option value="Brass Metalwork">Brass Metalwork</option>
                    <option value="Lacquer(Laksha)">Lacquer(Laksha)</option>
                    <option value="Batik Textiles">Batik Textiles</option>
                  </select>
                  <p class="alert-txt">{formErrors.productCategory}</p>
                </div>

                <div className="col">
                  <input
                    type="text"
                    value={contacts}
                    className="form-control"
                    placeholder="Manufacture Contacts"
                    onChange={(event) => {
                      setcontacts(event.target.value);
                    }}
                  />
                  <p class="alert-txt">{formErrors.contacts}</p>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <input
                    type="text"
                    value={quantity}
                    className="form-control"
                    placeholder="Quantity"
                    onChange={(event) => {
                      setproduct_quantity(event.target.value);
                    }}
                  />
                   <p class="alert-txt">{formErrors.quantity}</p>
                </div>
                <div className="col">
                  <input
                   value={productPrice}
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    onChange={(event) => {
                      setproduct_price(event.target.value);
                    }}
                  />
                  <p class="alert-txt">{formErrors.productPrice}</p>
                </div>
                <div className="col">
                  <select
                  value={status}
                    name="status"
                    className="form-select"
                    aria-label="role"
                    onChange={(event) => {
                      setstatus(event.target.value);
                    }}
                  >
                    <option selected disabled value="0">
                      Status
                    </option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>
                <p class="alert-txt">{formErrors.status}</p>
              </div>
              
              <div className="row mt-4">
                <div className="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      value={smallDes}
                      id="exampleFormControlTextarea1"
                      rows="2"
                      placeholder="Small Description"
                      onChange={(event) => {
                       setsmalldesc(event.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <p class="alert-txt">{formErrors.smallDes}</p>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      value={longDes}
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Additional Info"
                      onChange={(event) => {
                        setlongDesc(event.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <p class="alert-txt">{formErrors.longDes}</p>
              </div>

              <div className="row mt-5">
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    type="submit"
                    id="reg"
                    className="btn btnRegister "
                    onClick={handleSubmit}
                  >
                    Add Product
                  </button>
                  <button
                    type="button"
                    id="edit"
                    className="btn btnUpdate"
                   onClick={updateProduct}
                  >
                    Update 
                  </button>
                  <button type="button" id="delete" className="btn btnDelete" 
                   onClick={deleteProduct} >
                  Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="row mt-5 px-3">
            <h6 className="mb-0 fw-bold mt-2 mb-2 fs-5">Current Products</h6>
            <div className="row mb-5">
              <div className="d-flex justify-content-end align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <input
                    id="searchID"
                    type="text"
                    className="form-control col-8 me-5 px-5"
                    placeholder="Product Name"
                   onChange={(e) => {
                      setpkgSearch(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="button"
                    className="form-control btnSearch text-white"
                    value="Search"
                  />
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table
                className="table table-striped custom-table"
                id="assignLabsTable"
              >
                <thead>
                  <tr>
                    <th scope="col">Product ID</th>
                    <th scope="col">Cover Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Type</th>
                    <th scope="col">contacts</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {listOfproduct &&
                     listOfproduct
                      .filter((value) => {
                        if (PackageSearch === "") {
                          return value;
                        } else if (
                          value.productName
                            .toLowerCase()
                            .includes(PackageSearch.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((StoreProduct, i) => (
                        <tr class="crs-tr" data-status="active">
                          <td className="crs-td">{StoreProduct._id}</td>
                          <td className="crs-td">< img src={StoreProduct.productImage} class="crsthumimg" alt=""/></td>
                          <td className="crs-td">
                            {StoreProduct.productName}
                          </td>
                          <td className="crs-td">
                            {StoreProduct.productCategory}
                          </td>
                          <td className="crs-td">{StoreProduct.contacts}</td>
                          <td className="crs-td">
                            {StoreProduct.quantity}
                          </td>
                          <td className="crs-td">{StoreProduct.productPrice}</td>
                          <td className="crs-td">{StoreProduct.status}</td>
                          <td>
                    <i className="fa-solid fa-pen me-3 text-primary d-inline fa-2x" onClick={() => {
                      loadPackageDetailsedit(StoreProduct);
                    }}/>
                    <i className="fa-solid fa-trash-can d-inline me-2 text-danger d-inline fa-2x" onClick={() => {
                      loadPackageDetailsdelete(StoreProduct);
                    }}/>
                </td>
                        </tr>
                      ))}
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdmin;