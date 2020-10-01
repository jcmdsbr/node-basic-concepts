const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const mongodbContext = require("./mongo/context")

mongodbContext.use();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require("./routes/index")
const usersRoute = require("./routes/users")
const authRoute = require("./routes/auth");

app.use("/", indexRoute);
app.use("/users", usersRoute);
app.use("/auth", authRoute);


app.listen(3000);

module.exports = app;