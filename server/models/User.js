const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    username: {
        type: "String",
        required: true,
    },
    password: {
        type: "String",
        required: true,
    },
    roles: {
        User: {
            type: "Number",
            default: 2000,
        },
        Guest: Number,
    },
    refreshToken: {
        type: "String",
    },
});

UserSchema.pre("save", function save(next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model("User", UserSchema, "users");
