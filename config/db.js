const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/transfer");
    } catch (err) {
        throw Error("db not connected");
    }
};

module.exports = { connect };
