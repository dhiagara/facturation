import "./App.css";
import React from "react";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import Home from "./Components/Home";
import NavbarHome from "./Components/Navigation/Navbar/NavbarHome";
import Account from "./Components/pages/Account";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setauthtoken from "../src/Utils/setauthtoken";
import { setCurrentUser ,logoutUser } from "../src/Actions/AuthActions";
import {clearcurrentprofile } from '../src/Actions/profileactions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SideBar from "./Components/Navigation/SideBar/SideBar";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Customers from "./Components/pages/Customers";
import Resetpass from "./Components/pages/Resetpass";
import Dashboard from "./Components/pages/Dashboard";
import theme from "./Components/theme";
import store from "./store";
import Profiledash from './Components/Profiledash/Profiledash';
import PrivateRoute from './Components/common/PrivateRoute'

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setauthtoken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  console.log(decoded)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser);
    
    //  Clear current Profile
    store.dispatch(clearcurrentprofile);

    // Redirect to login
    //window.location.href = "/Signin";
  }
}

function App() {
  return (
    
    <Provider store={store}>
      <div className="App">
        <Router>
          <div className="row">
            <div className="col-1" style={{ padding: "0px" }}>
              <SideBar />
            </div>
            <div className="col-11" style={{ padding: "0px" }}>
              <NavbarHome />
            </div>
          </div>

          <Switch>
            {/* //<Redirect exact  to="/Signup" /> */}
            <Route path="/Signin">
              <Signin />
            </Route>
             <Route path="/Signup">
              <Signup /> 
            </Route> 
           
           
              {/* <Switch> */}
            <Route path="/Account"  > 
            <Account/>
            </Route>
           
            
           
            <Route path="/Customers">
              <Customers />
            </Route>
            <Route path="/Profiledash">
              <Profiledash />
            </Route>
            <Route path="/Resetpass">
              <Resetpass />
            </Route>
            <Route path="/Dashboard">
              <Dashboard theme={theme} />
            </Route>
            </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
