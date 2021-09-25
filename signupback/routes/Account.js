const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//loadvalidation
const validateaccountinput = require("../Validation/account");
//load account model
const Account = require("../Models/Account");
// load user model
const User = require("../Models/User");
const { EmojiTransportationSharp } = require("@material-ui/icons");

//@ROUTE GET app/Profile/test
//@desc tests profile route
//@access public
router.get("/test", (req, res) => res.json({ msg: "profile work" }));

//@ROUTE GET app/account
//@desc Get current user profile (account)
//@access private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Account.findOne({ user: req.user.id })
      .then((account) => {
        if (!account) {
          errors.noaccount = "there is no account for this user";
          return res.status(404).json(errors);
        }
        res.json(account);
      })
      .catch((err) => res.status(404).json(err));
  }
);

//@ROUTE Get api/account/all
//@desc Get   all accounts
//@access private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors ={};
    Account.find()
    .then( accounts => {
      if(!accounts) {
        errors.noprofile = ' there are no profiles ';
        return res.status(404).json(errors);
      }
      
      res.json(accounts)
    })
    .catch(err => res.status(404).json({ account : 'there is no accoount for this user'}))
  });
    


//@ROUTE Get api/account/handle/ :handle
//@desc Get account by handle
//@access private
router.get(
  "/handle/:handle",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Account.findOne({ handle: req.params.handle})
    .then( account => {
      if(!account){
        errors.noprofile = 'there is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(account);
      
    })
    .catch(err => res.status(404).json(err))
  });

  
  //@ROUTE Get api/account/: user_id
//@desc Get account by handle
//@access private
router.get(
  "/user/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Account.findOne({ user: req.params.user_id})
    .then( account => {
      if(!account){
        errors.noprofile = 'there is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(account);
      
    })
    .catch(err => res.status(404).json({ account : 'there is no accoount for this user'}))
  });


//@ROUTE POST app/account
//@desc create user account
//@access private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateaccountinput(req.body);

    if (!isValid) {
        console.log(req.body);
    }
    //get fields
    const profilefields = {};
    profilefields.user = req.user.id;
    if (req.body.handle) profilefields.handle = req.body.handle;
    if (req.body.name) profilefields.name = req.body.name;
    if (req.body.username) profilefields.username = req.body.username;
    if (req.body.categorie) profilefields.categorie = req.body.categorie;
    if (req.body.email) profilefields.email = req.body.email;
    if (req.body.phone) profilefields.phone = req.body.phone;
    if (req.body.status) profilefields.status = req.body.status;
    if (req.body.about) profilefields.about = req.body.about;
    //address
    profilefields.address = {};
    if (req.body.street) profilefields.address.street = req.body.street;
    if (req.body.city) profilefields.address.city = req.body.city;

    Account.findOne({ user: req.user.id }).then((account) => {
      if (account) {
        //update
        Account.findOneAndUpdate(
          { user: req.user.id },
          { $set: profilefields },
          { new: true }
        ).then((account) => res.json(account));
      } else {
        //create

        //check if handle exists
        Account.findOne({ handle: profilefields.handle }).then((account) => {
          if (account) {
            errors.handle = "that handle already exists";
            res.status(400).json(errors);
          }
          //save profile
          new Account(profilefields)
            .save()
            .then((account) => res.json(account));
        });
      }
    });
  }
);

module.exports = router;
