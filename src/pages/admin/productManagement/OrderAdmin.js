import React from "react";
import "./ProductAdmin.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./ProductAdmin.css"
import VueSweetalert2 from "sweetalert2";

function OrderAdmin() {


const [listOforder, setlistOforder] = useState([]);

const [PackageSearch, setpkgSearch] = useState("");


useEffect(() => {
    Axios.get("http://localhost:8000/api/order/all").then((response) => {
        setlistOforder(response.data);
    });
  }, []);
  



  return (
    <div>
      <div className="main_container">
     <div className="item fw-bold fs-5">Order Management</div>
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
                    placeholder="Customer Phone"
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
                    <th scope="col">Order ID</th>
                    <th scope="col">productName</th>
                    <th scope="col">productId</th>
                    <th scope="col"> deliveryAddress</th>
                    <th scope="col">productImage</th>
                    <th scope="col">customeremail</th>
                    <th scope="col">customerContacts</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {listOforder &&
                     listOforder
                      .filter((value) => {
                        if (PackageSearch === "") {
                          return value;
                        } else if (
                          value.customerContacts
                            .toLowerCase()
                            .includes(PackageSearch.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((StoreOrder, i) => (
                        <tr class="crs-tr" data-status="active">
                          <td className="crs-td">{StoreOrder._id}</td>
                          <td className="crs-td">{StoreOrder.productName}</td>
                          <td className="crs-td">
                            {StoreOrder.id}
                          </td>
                          <td className="crs-td">
                            {StoreOrder.deliveryAddress}
                          </td>
                          <td className="crs-td">< img src={StoreOrder.productImage} class="crsthumimg" alt=""/></td>
                          <td className="crs-td">
                            {StoreOrder.customeremail}
                          </td>
                          <td className="crs-td">{StoreOrder.customerContacts}</td>
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

export default OrderAdmin;