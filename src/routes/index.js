const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.send({ message: "Learning node" });
});

router.post("/", (req, res) => {
    return res.status(202).send({ message: "Learning node" });
});

module.exports = router;