const User = require("../models/user.models");
const _ = require("lodash");

const getOneUserData = async (req, res) => {
    try {
        const oneUser = await User.findOne(
            {
                _id: _.get(req, "userData.userId", ""),
            },
            { password: 0 }
        );
        res.status(201).json({ data: oneUser });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(500).json({ error: "email already used" });
        }
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getOneUserData };
