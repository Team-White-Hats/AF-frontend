import React from "react";
import "./ProductAdminStyle.css";

function ProductAdmin() {

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
                                            <button className="btn btnAddImg" id="btnAddImg" type="button">
                                                <i className="fa fa-plus text-white" aria-hidden="true"/>
                                            </button>
                                            <button className="btn btnEditImg" id="btnEditImg" type="button">
                                                <i className="fa-solid fa-pen text-white"/>
                                            </button>
                                            <button className="btn btnImgDelete" id="btnImgDelete" type="button" >
                                                 
                                                <i className="fa-solid fa-trash-can d-inline text-white"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="imgInputDiv">
                                        <div>
                                            <img id="ProfileImage" className="imgDiv"
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

              <div className="row mt-3">
             
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                   
                  />
                
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <select
                    name="type"
                    className="form-select"
                    aria-label="role" 
                    
                  >
                    <option selected disabled value="0" >
                     Product Category
                    </option>
                    <option value="Car">Batik textiles</option>
                    <option value="Van">Handicrafts</option>
                    <option value="Mini Van">Gems and jewelry</option>
                    <option value="Tuk Tuk">ART works</option>
                  </select>
                </div>

                <div className="col">
                  <input
                    type="text"
                   
                    className="form-control"
                    placeholder="Manufacture Contacts"
                   
                  />
                 
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <input
                    type="text"
                    
                    className="form-control"
                    placeholder="Quantity"
                    
                  />
                  
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    
                  />
                 
                </div>
                <div className="col">
                  <select
                    name="status"
                    className="form-select"
                    aria-label="role"
                   
                  >
                    <option selected disabled value="0">
                      Status
                    </option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>
              </div>
              
              <div className="row mt-4">
                <div className="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                     
                      id="exampleFormControlTextarea1"
                      rows="2"
                      placeholder="Small Description"
                     
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                    
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Additional Info"
                      
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    type="submit"
                    id="reg"
                    className="btn btnRegister "
                   
                  >
                    Add Product
                  </button>
                  <button
                    type="button"
                    id="edit"
                    className="btn btnUpdate"
                   
                  >
                    Update 
                  </button>
                  <button type="button" id="delete" className="btn btnDelete">
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
