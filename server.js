const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routers/index");
const { connect } = require("./config/db");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// root routes
app.use("/api", router);

// db connection
connect()
    .then(() => {
        app.listen(8080, () => {
            console.log(`server started at 8080`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
