import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="top_navbar">
            <div className="hamburger">
                <div className="one"/>
                <div className="two"/>
                <div className="three"/>
            </div>
            <div className="col-12 top_menu">
                <div className="col-7  d-flex justify-content-end">
                   
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <ul className="mb-0">
                        <li className="mt-1">
                            <p className="d-inline me-2"><i className="fa fa-sign-out logoutIcon" aria-hidden="true"/>
                            </p>
                            <button style={{width: 100, height: 40, backgroundColor: "#009ffd"}} onClick={() => {
								window.location.href =
									"/client/tour/home";
							}}>Logout</button>
                            {/* <p className="d-inline ms-2 me-2 fw-bold profileText">Tharindu</p> */}
                        </li>
                        <li>
                            <Link to="/client">
                                <i className="fas fa-user"/>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Header;