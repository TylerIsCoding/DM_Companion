const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./config/database");
const cors = require("cors");
const bodyParser = require("body-parser");
const [registerRoute, loginRoute, usersRoute] = [
    require("./routes/register"),
    require("./routes/auth"),
    require("./routes/users"),
];

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger("dev"));

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/signup", registerRoute);
app.use("/login", loginRoute);
app.use("/users", usersRoute);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on port ${process.env.PORT}...`);
});
