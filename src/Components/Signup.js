import React, { Component } from "react";
import "./Signup.css";
import bootstrap from "bootstrap";
import  PropTypes from 'prop-types'

import * as reactbootstrap from "react-bootstrap";
import { withRouter } from 'react-router-dom'

import  { connect } from 'react-redux'
import  { registerUser } from '../Actions/AuthActions'
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      company: "",
      email: "",
      password: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changecompany = this.changecompany.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  changecompany(event) {
    this.setState({
      company: event.target.value,
    });
  }
  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
   
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(event) {
    event.preventDefault();
    const newuser = {
      name: this.state.name,
      company: this.state.company,
      email: this.state.email,
      password: this.state.password,
    };
    
    this.props.registerUser(newuser,this.props.history);
    
  }
  render() {
    const  { errors } = this.state
   
    return (
      <div>
        <div className="container h-100">
          
          <div className="row h-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <h1 className="h2">Create a new account</h1>
                  <p className="lead">
                    Start creating the best possible user experience for you
                    customers.
                  </p>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-4">
                      <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label>name</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={this.changeName}
                            value={this.state.name}
                          />
                        </div>
                        <div className="form-group">
                          <label>company</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            name="company"
                            placeholder="Enter your company name"
                            onChange={this.changecompany}
                            value={this.state.company}
                          />
                        </div>
                        <div className="form-group">
                          <label>email</label>
                          <input
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={this.changeemail}
                            value={this.state.email}
                          />
                        </div>
                        <div className="form-group">
                          <label>password</label>
                          <input
                            className="form-control form-control-lg"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            onChange={this.changepassword}
                            value={this.state.password}
                          />
                        </div>
                        <div className="text-center mt-3">
                          {/* <a href="index.html" className="btn btn-lg btn-primary">Sign up</a> */}
                          <button type="submit" className="btn btn-lg btn-primary">
                            Sign up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = (state )=> ({
  auth: state.auth,
  errors: state.errors
});

export default  connect(mapStateToProps, { registerUser })(withRouter(Signup));
