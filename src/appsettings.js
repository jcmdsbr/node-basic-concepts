const env = process.env.NODE_ENV || "dev";


const environments = () => {
    switch (env) {
        case "dev":
            return {
                connectionString: "CONNECTION_STRING_DEV",
                jwtSecretKey: "SECRET_KEY_DEV",
                jwtExpiresIn: "7d"
            }
        case "qa":
            return {
                connectionString: "CONNECTION_STRING_QA",
                jwtSecretKey: "SECRET_KEY_QA",
                jwtExpiresIn: "5d"
            }
        case "prd":
            return {
                connectionString: "CONNECTION_STRING_PRD",
                jwtSecretKey: "SECRET_KEY_PRD",
                jwtExpiresIn: "1d"
            }
    }
}

module.exports = environments;