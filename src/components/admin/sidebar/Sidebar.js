import React from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (<div className="sidebar">
        <ul>
            <li><Link to="/admin/">
                <span className="icon"><i className="fa-solid fa-user-group"/></span>
                <span className="title">Client</span>
            </Link></li>
            <li><Link to="/admin/driver">
                <span className="icon"><i className="fas fa-calendar"/></span>
                <span className="title">Events</span>
            </Link></li>
            <li><Link to="/admin/productadmin">
                <span className="icon"><i className="fas fa-cubes" aria-hidden="true"/></span>
                <span className="title">Products</span>
            </Link></li>
            <li><Link to="/admin/productorder">
                <span className="icon"><i className="fa fa-shopping-cart" aria-hidden="true"/></span>
                <span className="title">Orders</span>
            </Link></li>
            <li><Link to="/admin/tourtripbooking">
                <span className="icon"><i class="fa-sharp fa-solid fa-calendar" aria-hidden="true"/></span>
                <span className="title">Trip Bookings</span>
            </Link></li>
            <li><Link to="/admin/tourtripadmin">
                <span className="icon"><i className="fa fa-car" aria-hidden="true"/></span>
                <span className="title">Tour Trips</span>
            </Link></li>
            <li><Link to="/admin/reviewadmin">
                <span className="icon"><i className="fa fa-archive" aria-hidden="true"/></span>
                <span className="title">Feedbacks</span>
            </Link></li>
        </ul>
    </div>);
}

export default Sidebar;