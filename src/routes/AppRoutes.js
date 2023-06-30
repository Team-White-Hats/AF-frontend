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
import TourTripAdmin from "../pages/admin/tourTripManagement/TourTripAdmin";
import TourTripIndex from "../pages/client/tourTripManagement/index";
import BookYourtrip from "../pages/client/tourTripManagement/bookYourTrip";
import BeforeYouGo from "../pages/client/tourTripManagement/beforeYouGo";
import AboutSriLanka from "../pages/client/tourTripManagement/aboutSriLanka";
import TourTripDetailsPage from "../pages/client/tourTripManagement/touTripDetailsPage";
import ProductHome from "../pages/client/productClient/ProductHome";
import ClientLayout from "../layout/client/ClientLayout";
import ProductView from "../pages/client/productClient/ProductView";
import TourTripDetailsBooking from "../pages/admin/tourTripManagement/TourTripBookingDetails";
import Login from "../components/client/login/login";
import Register from "../components/client/Register/Register";
import UserView from "../pages/admin/clientManagement/ClientView";
import Homepage from "../pages/client/HomePage";
import ProductDelivery from "../pages/client/productClient/ProductDelivery";
import EventDetails from '../pages/client/event/eventsDetailsPage/eventsDetailsPage'
import EventsHomePage from '../pages/client/event/eventsHomePage/eventsHomePage'
import RegisterEvent from '../pages/client/event/registerEventPage/registerEvent'
import EventAdmin from '../pages/admin/eventManagement/eventAdmin'
import OrderAdmin from '../pages/admin/productManagement/OrderAdmin'

const AppRoutes = () => {


	return (
		<div>
			<Router>
				<Switch>
				<Route path='/client/:paths/:path' exact>
					<div style={{"height": "auto"}}>
						<ClientHeader />
						<ClientLayout>
						<main>
						<Switch>
						   <Route path="/client/tour/home" render={(props) => <Homepage/>} exact/>;
						   <Route
								path="/client/tour/tour-trip-details"
								render={(props) => <TourTripIndex />}
								exact
							/>
							<Route
								path="/client/tour/book-your-trip"
								render={(props) => <BookYourtrip />}
								exact
							/>
							;
							<Route
								path="/client/tour/before-you-go"
								render={(props) => <BeforeYouGo />}
								exact
							/>
							;
							<Route
								path="/client/tour/about-sri-lanka"
								render={(props) => <AboutSriLanka />}
								exact
							/>
							;
							<Route
								path="/client/tour/tour-trip"
								render={(props) => <TourTripDetailsPage />}
								exact
							/>
							;

							
							<Route path="/client/review/reviewpage" render={(props) => <ReviewPage/>} exact/>; 
							<Route path="/client/user/login" render={(props) => <Login/>} exact/>; 
							<Route path="/client/user/register" render={(props) => <Register/>} exact/>; 
							<Route path="/client/product/producthome" render={(props) => <ProductHome/>}/>;
							<Route path="/client/product/:cat" render={(props) => <ProductView/>}/>;
							<Route path="/client/delivery/:id" render={(props) => <ProductDelivery/>}/>;
							<Route path="/client/event/:id" render={(props) => <EventDetails/>} exact/>; 
							<Route path="/client/eventhome/home" render={(props) => <EventsHomePage/>} exact/>; 
							<Route path="/client/eventregister/register" render={(props) => <RegisterEvent/>} exact/>; 

							</Switch>
                                </main>
								<Footer/>
                            </ClientLayout>
                        </div>
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
									path="/admin/orderAdmin"
									render={(props) => <OrderAdmin />}
									exact
								/>
								;
								<Route
									path="/admin/tourtripadmin"
									render={(props) => <TourTripAdmin />}
									exact
								/>
								;
								<Route
									path="/admin/tourtripbooking"
									render={(props) => <TourTripDetailsBooking />}
									exact
								/>
								;
								<Route path="/admin/reviewadmin" render={(props) => <ReviewView/>} exact/>;
								<Route path="/admin/useradmin" render={(props) => <UserView/>} exact/>;
								<Route path="/admin/eventsadmin" render={(props) => <EventAdmin/>} exact/>;
							</Switch>
						</AdminLayout>
					</Route>
				</Switch>
			</Router>
		</div>
	);
};
export default AppRoutes;
