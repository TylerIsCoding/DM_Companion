const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./config/database");
const cors = require("cors");
const bodyParser = require("body-parser");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const [registerRoute, loginRoute, usersRoute, refreshRoute] = [
    require("./routes/register"),
    require("./routes/auth"),
    require("./routes/users"),
    require("./routes/refresh"),
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

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes

app.use("/signup", registerRoute);
app.use("/login", loginRoute);
app.use("/refresh", refreshRoute);

app.use(verifyJWT);
app.use("/users", usersRoute);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on port ${process.env.PORT}...`);
});
