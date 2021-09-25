const Validator = require ('validator');

const isEmpty = require ('./is-empty');
module.exports= function validateregisterinput(data) {
  
    let errors={};
    data.name = !isEmpty(data.name) ? data.name: '';
    data.email = !isEmpty(data.email) ? data.email: '';
    data.company = !isEmpty(data.company) ? data.company: '';
    data.password = !isEmpty(data.password) ? data.password: '';
    
    if(!Validator.isLength(data.name, { min :2 , max:30 })) {
        errors.name ='name must be between 2 and 30 charachters';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.name = 'name field is required'
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = 'email field is required'
    }
    if(!Validator.isEmail(data.email)) {
        errors.email = 'email is invalid'
    }
    if(Validator.isEmpty(data.company)) {
        errors.company = 'company field is required'
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'password field is required'
    }
    
    if(!Validator.isLength(data.password, { min :6 , max:30 })) {
        errors.password ='password must be at least 6 charachters';
    }
    return {
        
        errors,
        isValid:isEmpty(errors)
    }
}