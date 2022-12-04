const router = require("express").Router();
const places = require("../models/places")

router.get("/", (request, response) => {
    response.render("places/index", {places});
});

router.get("/new", (request, response) => {
    response.render("places/new");
});

router.get("/:id", (request, response) => {
    let id = Number(request.params.id);
    if(isNaN(id) || !places[id]) {
        response.render("error404");
    } else response.render("places/show", {place: places[id]});
});

router.post("/", (request, response) => {
    if(!request.body.pic) {
        request.body.pic = "http://placekitten.com/400/400";
    }
    if(!request.body.city) {
        request.body.city = "Anytown";
    }
    if(!request.body.state) {
        request.body.state = "USA";
    }
    places.push(request.body);
    response.redirect("/places");
});

module.exports = router;