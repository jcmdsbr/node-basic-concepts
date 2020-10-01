const mongoose = require("mongoose");
const environments = require("../appsettings");

const options = {
    poolSize: 5,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const mongodb = {
    use: () => {
        mongoose.connect(environments.connectionString, options);
        mongoose.set("useCreateIndex", true);

        mongoose.connection.on("error", (err) => {
            console.error("Error connecting to database" + err);
        });

        mongoose.connection.on("disconnected", () => {
            console.log("App disconnected from mongo atlas");
        });
    }
}

module.exports = mongodb;