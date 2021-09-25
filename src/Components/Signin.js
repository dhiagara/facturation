import React, { Component } from "react";
import "./Signin.css";
import * as reactbootstrap from "react-bootstrap";
import bootstrap from "bootstrap";
import Resetpassword from "./pages/Resetpass";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../Actions/AuthActions";
import classnames from "classnames";

import { withRouter } from "react-router";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthanticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthanticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome back</h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <div className="text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="Andrew Jones"
                        className="img-fluid rounded-circle"
                        width="132"
                        height="132"
                      ></img>
                    </div>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.email,
                            }
                          )}
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={this.state.email}
                          onChange={this.onChange}
                        ></input>

                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label>password</label>
                        <input
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.password,
                            }
                          )}
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          value={this.state.password}
                          onChange={this.onChange}
                        ></input>
                        <small>
                          <a href="/Resetpass">Forgot password?</a>
                        </small>
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="custom-control custom-checkbox align-items-center">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            value="remember-me"
                            name="remember-me"
                            defaultChecked
                          ></input>
                          <label className="custom-control-label text-small">
                            Remember me next time
                          </label>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        {/* <a href="index.html" className="btn btn-lg btn-primary">Sign in</a> */}
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary"
                          onClick={() => this.onSubmit.bind(this)}
                        >
                          Sign in
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
    );
  }
}
Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps, { loginUser })(Signin));
