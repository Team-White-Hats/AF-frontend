import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ProductAdmin from "../pages/admin/productManagement/ProductAdmin";
import Sidebar from "../components/admin/sidebar/Sidebar";
import AdminLayout from "../layout/admin/AdminLayout";
import Header from "../components/admin/header/Header";
import ClientHeader from "../components/client/Header/Header";
import Footer from "../components/client/Footer/Footer";
import TourTripAdmin from "../pages/admin/tourTripManagement/TourTripAdmin";
import TourTripIndex from "../pages/client/tourTripManagement/index";
import BookYourtrip from "../pages/client/tourTripManagement/bookYourTrip";
import BeforeYouGo from "../pages/client/tourTripManagement/beforeYouGo";
import AboutSriLanka from "../pages/client/tourTripManagement/aboutSriLanka";
import TourTripDetailsPage from "../pages/client/tourTripManagement/touTripDetailsPage";
import ProductHome from "../pages/client/productClient/ProductHome";
import ClientLayout from "../layout/client/ClientLayout";
import ProductView from "../pages/client/productClient/ProductView";

const AppRoutes = () => {


	return (
		<div>
			<Router>
				<Switch>
					<Route path="/client/:path?" exact>
						<ClientHeader />
						<ClientLayout>
						<Switch>
							<Route
								path="/client/tour-trip-details"
								render={(props) => <TourTripIndex />}
								exact
							/>
							;
							<Route
								path="/client/book-your-trip"
								render={(props) => <BookYourtrip />}
								exact
							/>
							;
							<Route
								path="/client/before-you-go"
								render={(props) => <BeforeYouGo />}
								exact
							/>
							;
							<Route
								path="/client/about-sri-lanka"
								render={(props) => <AboutSriLanka />}
								exact
							/>
							;
							<Route
								path="/client/tour-trip"
								render={(props) => <TourTripDetailsPage />}
								exact
							/>
							;

							<Route path="/client/producthome" render={(props) => <ProductHome/>} exact/>;
							<Route path="/client/:cat" render={(props) => <ProductView/>} exact/>;
						</Switch>
						<Footer />
						</ClientLayout>
					</Route>
               
					<Route path="/admin/:path?" exact>
						<AdminLayout class="wrapper">
							<Header />
							<Sidebar />
							<Switch>
								<Route
									path="/admin/productadmin"
									render={(props) => <ProductAdmin />}
									exact
								/>
								;
								<Route
									path="/admin/tourtripadmin"
									render={(props) => <TourTripAdmin />}
									exact
								/>
								;
							</Switch>
						</AdminLayout>
					</Route>
				</Switch>
			</Router>
		</div>
	);
};
export default AppRoutes;
