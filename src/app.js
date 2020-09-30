const express = require("express");
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const connectionString = ""
const options = {
    poolSize: 5,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(connectionString, options);
mongoose.set("useCreateIndex", true);

mongoose.connection.on("error", (err) => {
    console.error("Error connecting to database" + err);
});

mongoose.connection.on("disconnected", () => {
    console.log("App disconnected from mongo atlas");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require("./routes/index")
const usersRoute = require("./routes/users")

app.use("/", indexRoute);
app.use("/users", usersRoute);

app.listen(3000);

module.exports = app;