const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config");
const passport = require("passport");

const User = require("../Models/User");
//load input validation
const validateregisterinput = require ('../Validation/register');
const validatelogininput = require ('../Validation/login');
router.post("/signup", (req, res) => {
  
  // const{errors , isValid} = validateregisterinput(req.body);
  // // check validation 
  // if(!isValid) {
  //   return res.status(400).json(errors);
  // }
  
  //console.log(req.body);

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ email: "email already exists" });
      } else {
        const newuser = new User({
          name: req.body.name,
          company: req.body.company,
          email: req.body.email,
          password: req.body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newuser.password, salt, (err, hash) => {
            if (err) throw err;
            newuser.password = hash;
            newuser
              .save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          });
        });
      }
    })
    .catch((err) => console.log(err));
});

//@ROUTE GET app/Users/login
//@desc  Login user / returning  jwt token
//@access public
router.post("/login", (req, res) => {
  
  
  const{ errors , isValid} = validatelogininput(req.body);
  // check validation 
  if(!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // find user by email
  User.findOne({ email }).then(user => {
    //check for user
    if (!user) {
      errors.email = 'user not find';
      return res.status(404).json(errors);
    }

    //check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //user matched
        const payload = { id: user.id, name: user.name }; //create jwt payload
        //sign token
        jwt.sign(
          payload,
          keys.Secretorkey, 
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer" + token,
            });
          }
        );
      } else {
        errors.password = 'password  incorrect'
        return res.status(400).json(errors);
      }
    });
  });
});
//@ROUTE GET app/users/current
//@desc  return current user
//@access private
router.get("/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name:req.user.name,
      email:req.user.email
    });
  }
);

module.exports = router;
