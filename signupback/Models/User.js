const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const UserSchema = new Schema({
  user :{
    type: Schema.Types.ObjectId,
    ref : 'users'
  },
  handle:{
    type:String,
    //required: true,
    max:40,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports  = mongoose.model("users", UserSchema);
