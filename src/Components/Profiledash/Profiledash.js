import React , { Component } from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { getcurrentprofile } from '../../Actions/profileactions';

//import { componentDidMount } from 'react-addons-linked-state-mixin';
import { render } from '@testing-library/react';
import Spinner  from '../../Components/common/Spinner'
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import { withRouter } from "react-router";
class  Profiledash extends Component {
    
    
    componentDidMount() {
        this.props.getcurrentprofile();
    }
    
    render(){
       const  { user } = this.props.auth
       const {profile, loading} = this.props.profile;
       
       let dashboardcontent ;
       
       if( profile === null|| loading){
           dashboardcontent= <Spinner/>
           
       } else {
           //check if logged in user has a profile data
           if(Object.keys(profile).length > 0) {
               dashboardcontent = <h4> display profile</h4>
           } else {
               //user loged in but has no profile
               dashboardcontent = (
                   <div>
                       <p className='lead text-muted'> Welcome {user.name}</p>
                       <p> you have not yet created a profile , please  add some info</p>
                       <Link to = '/Account' className = 'bnt bnt-lg btn-info'> 
                        create profile </Link>
                   </div>
               )
           }
           
       }
        
      return (
          <div className='dashboard'>
              <div className='container'>
                  <div className ='row'>
                      <div className='col-md-12'> 
                      <h1 className ='display-4'> Profile</h1>
                      {dashboardcontent}
                      </div>
                  </div>
                  
              </div>
              
          </div>
      )  
    
    }
    
}
// profiledash.PropTypes ={
//     getcurrentprofile :PropTypes.func.isRequired,
//     auth:PropTypes.object.isRequired,
//     profile:PropTypes.object.isRequired
// }
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
}) ;
export default  withRouter(connect(mapStateToProps, {getcurrentprofile})(Profiledash));