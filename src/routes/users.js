const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const Users = require("../models/user");
const JwtHelper = require("../helpers/jwt");


router.get("/", auth, async (req, res) => {
    try {

        const users = await Users.find({});

        return res.send(users);

    } catch (error) {

        return res.status(500).send({ error: "users not found" });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).send({ error: "Email and Password is required" })

        let user = await Users.findOne({ email });

        if (user) return res.status(404).send({ error: "User already created " });

        user = await Users.create(req.body);

        return res.status(201).send({ token: new JwtHelper(user).build() });

    } catch (error) {

        return res.status(500).send({ error: "Error: " + error })
    }
});

module.exports = router;