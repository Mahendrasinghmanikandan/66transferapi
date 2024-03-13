const { model, Schema } = require("mongoose");

const userSchema = new Schema(
    {
        email: {
            required: [true, "provide your email"],
            type: String,
            unique: true,
        },
        password: {
            required: [true, "provide your password"],
            type: String,
        },
    },
    {
        timestamps: true,
        collection: "user",
    }
);

module.exports = model("User", userSchema);
