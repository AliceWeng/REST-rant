require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hello world!");
});

app.get("*", (request, response) => {
    response.status(404).send("<h1>404 Page<h1/>")
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});