const router = require("express").Router();
const db = require("../models");
const places = require("../models/places");


router.get("/", (request, response) => {
    db.Place.find()
        .then(places => {
            response.render("places/index", {places});
        })
        .catch(() => {
            response.render("error404");
        })
});

router.get("/new", (request, response) => {
    response.render("places/new");
});

router.get("/:id", (request, response) => {
    db.Place.findById(request.params.id)
        .then(place => {
            response.render("places/show", {place});
        })
        .catch(() => {
            response.render("error404");
        })
});

router.get("/:id/edit", (request, response) => {
    let id = Number(request.params.id);
    if(isNaN(id) || !places[id]) {
        response.render("error404");
    } else {
        response.render("places/edit", {place: places[id], id});
    }
});

router.put("/:id", (request, response) => {
    let id = Number(request.params.id);
    if(isNaN(id) || !places[id]) {
        response.render("error404");
    } else {
        if(!request.body.pic) {
            request.body.pic = "http://placekitten.com/400/400";
        }
        if(!request.body.city) {
            request.body.city = "Anytown";
        }
        if(!request.body.state) {
            request.body.state = "USA";
        }
        places[id] = request.body;
        response.redirect(`/places/${id}`);
    }
});

router.post("/", (request, response) => {
    db.Place.create(request.body)
        .then(() => {
            response.redirect("/places");
        })
        .catch(error => {
            if(error && error.name == "ValidationError") {
                let message = "Validation Error: ";
                response.render("places/new", {message})
            } else response.render("error404");
        })
});

router.delete("/:id", (request, response) => {
    /*db.Place.findByIdAndDelete(request.params.id)
        .then(deletedBread => {
            response.redirect("/places")
        })*/
    let id = Number(request.params.id);
    if(isNaN(id) || !places[id]) {
        response.render("error404");
    } else {
        places.splice(id, 1);
        response.redirect("/places");
    }
});

module.exports = router;