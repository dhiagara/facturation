const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema 

const accountschema = new Schema ({
    
    
    handle : {
        type: String,
    },
    name :{
        type: String,
       // required: true,
        
    },
    username :{
        type :  String,
       // required:true,
    },
    categorie :{
        type : String,
        // required: true,
    },
    email :{
        type:String,
       // required:true,
    },
    phone : {
        type:String
    },
    status :{
        type:String,
        required:true,
    },
    about :{
        type:String,
    },
    address : [
        {
            street:{
                type:String,
                
            },
            city:{
                type:String,
            },
        }
        
    ],
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports  =mongoose.model('addaccount', accountschema);