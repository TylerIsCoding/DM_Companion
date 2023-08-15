const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/database");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");

require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoClientPromise = new Promise((resolve) => {
    mongoose.connection.on("connected", () => {
        const client = mongoose.connection.getClient();
        resolve(client);
    });
});

const sessionStore = MongoStore.create({
    clientPromise: mongoClientPromise,
    dbName: "DMCOMPANION",
    collection: "sessions",
});

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
    })
);

app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/", router);
app.use("/users", router);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on port ${process.env.PORT}...`);
});
