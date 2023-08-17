const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const connectDB = require("./config/database");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/main");

require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.DB_STRING,
        }),
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(logger("dev"));

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/", mainRoutes);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on port ${process.env.PORT}...`);
});
