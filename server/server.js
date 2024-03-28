const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./config/database");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const bodyParser = require("body-parser");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");

const [
    registerRoute,
    loginRoute,
    usersRoute,
    refreshRoute,
    logoutRoute,
    encounterRoute,
] = [
    require("./routes/register"),
    require("./routes/auth"),
    require("./routes/users"),
    require("./routes/refresh"),
    require("./routes/logout"),
    require("./routes/encounter"),
];

require("dotenv").config({ path: "./config/.env" });

connectDB();

// JSON Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for cookies
app.use(cookieParser());

app.use(logger("dev"));

// CORS
app.use(credentials);
app.use(cors(corsOptions));

// API Routes

app.use("/signup", registerRoute);
app.use("/login", loginRoute);
app.use("/refresh", refreshRoute);
app.use("/logout", logoutRoute);
app.use("/encounter", encounterRoute);

app.use(verifyJWT);
app.use("/users", usersRoute);

// Using CLient App
app.use(express.static(__dirname + "/client/build"));

// Render client for any path
app.get("*", (req, res) =>
    res.sendFile(__dirname + "/client/build/index.html")
);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}...`);
});
