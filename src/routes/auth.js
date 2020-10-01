const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Users = require("../models/user");
const JwtHelper = require("../helpers/jwt");


router.post("/", async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) return res.status(400).send({ error: "Email and Password is required" })

        const user = await Users.findOne({ email }).select("+password"); // Force return password from mongo

        if (!user) return res.status(404).send({ error: "User not found" });

        if (!await bcrypt.compare(password, user.password)) return res.send({ error: "User or Password invalid!" });

        user.password = undefined;

        return res.send({ message: "Login has success", token: new JwtHelper(user).build() });
    }
    catch (error) {
        return res.status(500).send({ error: "Error: " + error });
    }
});

module.exports = router;