const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
    try {
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.key);
        req.userData = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Authentication failed" });
    }
};

module.exports = { verify };
