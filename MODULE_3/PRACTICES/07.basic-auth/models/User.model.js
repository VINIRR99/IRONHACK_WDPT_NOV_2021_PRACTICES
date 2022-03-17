const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: [true, 'Username is req2uired.'],
            unique: true
        },
        email: {
            type: String,
            required: [true, 'Email is requ2ired.'],
            unique: true,
            lowercase: true,
            trim: true
        },
        // add password property here
        passwordHash: {
            type: String,
            required: [true, 'Password is re2quired.']
        }
    },
    { timestamps: true }
);

module.exports = model("User", userSchema);