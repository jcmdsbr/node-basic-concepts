const jwt = require("jsonwebtoken")
const environments = require("../appsettings");

const auth = (req, res, next) => {
    const token = req.headers.bearer;

    if (!token) return res.status(401).send({ error: "unauthorized" });

    jwt.verify(token, environments.jwtSecretKey, (err, decoded) => {
        if (err) return res.status(401).send({ error: "unauthorized" });
        res.locals.auth = decoded;
        return next();
    });
}

module.exports = auth;