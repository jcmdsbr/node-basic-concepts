const express = require("express");
const router = express.Router();
const Users = require("../models/user")

router.get("/", (req, res) => {
    Users.find({}, (err, data) => {
        if (err) return res.send({ error: "users not found" });
        return res.send(data);
    });
});

router.post("/", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.send({ error: "Email and Password is required" })

    Users.findOne({ email }, (err, data) => {
        if (err) return res.send({ error: "Error: " + err });
        if (data) return res.send({ error: "User already created " });

        Users.create(req.body, (err, data) => {
            if (err) return res.send({ error: "Error: " + err });
            return res.send({ message: "User created" });
        });
    });
});

module.exports = router;