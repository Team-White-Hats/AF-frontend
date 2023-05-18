import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ProductAdmin from "../pages/admin/productManagement/ProductAdmin";
import Sidebar from "../components/admin/sidebar/Sidebar";
import AdminLayout from "../layout/admin/AdminLayout";
import Header from "../components/admin/header/Header";
import ClientHeader from "../components/client/Header/Header";
import Footer from "../components/client/Footer/Footer";
import ReviewPage from "../pages/client/reviewManagement/ReviewPage";
import ReviewView from "../pages/admin/reviewManagement/ReviewView";


const AppRoutes = () => {
	return (
		<div>
        <Router>
            <Switch>
                <Route path='/client/:path?' exact>
                            <ClientHeader/>
                                <Switch>
                            <Route path="/client/reviewpage" render={(props) => <ReviewPage/>} exact/>;  
                                
                                </Switch>
                                <Footer/>
                </Route>

                <Route path='/admin/:path?' exact>
                <AdminLayout class="wrapper">
                        <Header/>
                        <Sidebar/>
                        <Switch>
                            <Route path="/admin/productadmin" render={(props) => <ProductAdmin/>} exact/>;
                            <Route path="/admin/reviewadmin" render={(props) => <ReviewView/>} exact/>;
                            
                        </Switch>
                    </AdminLayout>
                </Route>


            </Switch>
        </Router>
    </div>
	);
};
export default AppRoutes;
