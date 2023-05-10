import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ProductAdmin from "../pages/admin/productManagement/ProductAdmin";
import Sidebar from "../components/admin/sidebar/Sidebar";
import AdminLayout from "../layout/admin/AdminLayout";
import Header from "../components/admin/header/Header";
import ClientHeader from "../components/client/Header/Header";
import Footer from "../components/client/Footer/Footer";
import ProductHome from "../pages/client/productClient/ProductHome";

const AppRoutes = () => {


	return (
		<div>
        <Router>
            <Switch>
                <Route path='/client/:path?' exact>
                            <ClientHeader/>
                                <Switch>
                                <Route path="/client/producthome" render={(props) => <ProductHome/>} exact/>;
                                
                                </Switch>
                                <Footer/>
                </Route>

                <Route path='/admin/:path?' exact>
                <AdminLayout class="wrapper">
                        <Header/>
                        <Sidebar/>
                        <Switch>
                            <Route path="/admin/productadmin" render={(props) => <ProductAdmin/>} exact/>;
                        </Switch>
                    </AdminLayout>
                </Route>


            </Switch>
        </Router>
    </div>
	);
};
export default AppRoutes;
