const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const passportSetup = require("./passport");
require('dotenv').config();

const authRoute = require("./routes/authRoute.js");

app.use(cookieSession({
	name: "session",
	keys: ["zain"],
	maxAge: 24*60*60*1000
}) );

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true
}));

app.use("/auth", authRoute);

//console.log(process.env.GOOGLE_CLIENT_ID);

app.listen(5000, () => {
	console.log(`Server running at port 5000`);
})