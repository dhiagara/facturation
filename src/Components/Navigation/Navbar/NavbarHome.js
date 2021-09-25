import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import * as reactbootstrap from "react-bootstrap";
import Signin from "../../Signin";
import Signup from "../../Signup";
import "./NavbarHome.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../Actions/AuthActions";
import {  clearcurrentprofile } from "../../../Actions/profileactions";

import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  Container,
} from "react-bootstrap";

class NavbarHome extends Component {
  onLogoutClick() {
    this.props.clearcurrentprofile()
    this.props.logoutUser(this.props.history);
    
  }

  render() {
    const { isAuthanticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Button onClick={this.onLogoutClick.bind(this)} className="nav-link">
            {console.log("hhfh")}
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            Logout
          </Button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">
            Login
          </Link>
          <Link to="/Profiledash">Profiledash</Link>
        </li>
      </ul>
    );

    return (
      <reactbootstrap.Navbar collapseOnSelect expand="lg">
        <Container>
          <Nav className="ml-auto">
            {/* <Form class="form-inline">
            <Link to="/Signin">
              <Button   className="btn-dark"> sign in</Button>
            </Link>
            <Link to="/Signup">
              <Button variant="dark"> sign up</Button>
            </Link>
          </Form> */}
            <li>{isAuthanticated ? authLinks : guestLinks}</li>
          </Nav>
        </Container>
      </reactbootstrap.Navbar>
    );
  }
}
Navbar.propTypes = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
  logoutUser,
  clearcurrentprofile
})(NavbarHome);
