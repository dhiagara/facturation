const express = require("express");
const { updateLocale } = require("moment");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/users");
const Account = require("./routes/Account");
const Posts = require("./routes/Posts.js");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const cors = require("cors");

// db config
const db = require("./config").DATABASE_ACCESS;
//connect to mongodb
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Mongo DB connected"))
.catch((err) => console.log(err));

// body parser middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();
//passport middleware
app.use(passport.initialize());
//passport config
require("./passport")(passport);
// mongoose.connect(process.env.DATABASE_ACCESS, () =>
//   console.log("database connected")
// );
//app.get("/", (req, res) => res.send("hello world"));



//app.use(express.json());
app.use(cors());
// use Routes
app.use("/users", users);
app.use("/addaccount", Account);
app.use("/Posts", Posts);
app.listen(4000, () => console.log(`server is up and running on port`));
