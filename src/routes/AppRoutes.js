import React from "react";
import { Route,Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../pages/client/HomePage'



const AppRoutes = () => {
    return (
        <div>
          <div>
            <Router>
                    <Route path='/client/:path?' exact>
                        <div style={{"height": "auto"}}>
                            
                                <main>
                                    <Switch>
                                        <Route path="/client" render={(props) => <Home/>} exact/>;
                                    </Switch>
                                </main>
                        </div>
                    </Route>
            </Router>
        </div>
        </div>
    );
};
export default AppRoutes;
