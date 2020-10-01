const jwt = require("jsonwebtoken");
const environments = require("../appsettings");

module.exports = class JwtHelper {
    constructor(user) {
        this.user = user;
        this.expiresIn = expiresIn;
    }

    build = () => {
        return jwt.sign({
            id: this.user.id, email: this.user.email, createdAt: this.user.createdAt
        }, environments.jwtSecretKey, { expiresIn: environments.jwtExpiresIn });
    }
}