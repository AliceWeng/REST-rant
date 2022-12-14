require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.use("/places", require("./controllers/places"));

app.get("/", (request, response) => {
    response.render("home");
});

app.get("*", (request, response) => {
    response.render("error404");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});

// response.send();
// response.status().send();