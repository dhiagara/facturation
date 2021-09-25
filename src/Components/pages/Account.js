

import React , { Component } from 'react'
import './Account.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getcurrentprofile } from   '../../Actions/profileactions'
import { createProfile } from '../../Actions/profileactions';

 class  Account  extends Component  {
	 
	constructor(props){
		super(props);
		this.state = {
			
			//handle : '',
			name:'',
			username:'',
			categorie:'',
			email:'',
			phone:'',
			status:'',
			//about:'',
			street:'',
			city:'',
			errors : {}
		}
		this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}
	 
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
		  this.setState({ errors: nextProps.errors });
		}
	  }
	
	  
	
	onSubmit(e) {
		e.preventDefault();
	
		const profileData = {
		  //handle: this.state.handle,
		  username: this.state.username,
		  name: this.state.name,
		  email: this.state.email,
		  phone: this.state.phone,
		  categorie: this.state.categorie,
		  street: this.state.street,
		  city: this.state.city,
		  errors: this.state.errors
		};
	
		this.props.createProfile(profileData, this.props.history);
	  }
	  onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	  }
	  
	 render (){
		const  { errors } = this.state
    return (   


        <div class="container" >
<div class="row gutters">
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body">
		<div class="account-settings">
			<div class="user-profile">
				<div class="user-avatar">
					<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
				</div>
				<h5 class="user-name"> user-name</h5>
				<h6 class="user-email">adresse email</h6>
			</div>
			<div class="about">
				<h5>About</h5>
				<p>aboutttttttttttttttttt</p>
			</div>
		</div>
	</div>
</div>
</div>
<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body">
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mb-2 text-primary">Personal Details</h6>
				
			</div>
			
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				
				<div class="form-group" onSubmit={this.onSubmit} >
					<label for="fullName">Full Name</label>
					<input type="text" class="form-control"  placeholder="Enter full name"  name='name' value={this.state.name} onChange={this.onChange}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="eMail">Email</label>
					<input type="email" class="form-control"  placeholder="Enter email ID" name='email' value={this.state.email} onChange={this.onChange}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">Phone</label>
					<input type="text" class="form-control" id="phone" placeholder="Enter phone number" name='phone' value={this.state.phone} onChange={this.onChange}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="website">Categorie</label>
					<input type="url" class="form-control" id="categorie" placeholder="categorie" name='categorie' value={this.state.categorie} onChange={this.onChange}/>
				</div>
			</div>
		</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mt-3 mb-2 text-primary">Address</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="Street">Street</label>
					<input type="name" class="form-control" id="Street" placeholder="Enter Street" name='street' value={this.state.street} onChange={this.onChange}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="ciTy">City</label>
					<input type="name" class="form-control" id="ciTy" placeholder="Enter City" name='city' value={this.state.city} onChange={this.onChange}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="sTate">State</label>
					<input type="text" class="form-control" id="sTate" placeholder="Enter State" name='state' value={this.state.status} onChange={this.onChange}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="zIp"> username</label>
					<input type="text" class="form-control" id="zIp" placeholder="username"name='username' value={this.state.username} onChange={this.onChange}/>
				</div>
			</div>
		</div>
		
            {/* <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mb-2 text-primary">change password</h6>
			</div> */}
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="text-right">
					<button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
					<button  id="submit" name="submit" type="submit" class="btn btn-primary">Update  </button>
				</div>
			</div>
		</div>
        
	</div>
</div>
</div>
</div>
</div>

)
	}
}

const mapStateToProps = state => ({
	profile : state.profile,
	errors: state.errors,
	
	
})
export default  connect(mapStateToProps ,{ createProfile })(withRouter(Account));