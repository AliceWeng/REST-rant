const router = require("express").Router();
const { response } = require("express");
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
        .populate("comments")
        .then(place => {
            response.render("places/show", {place});
        })
        .catch(() => {
            response.render("error404");
        })
});

router.get("/:id/edit", (request, response) => {
    db.Place.findById(request.params.id)
        .then(place => {
            response.render("places/edit", {place});
        })
});

router.get("/:id/comment", (request, response) => {
    db.Place.findById(request.params.id)
        .then(place => {
            response.render("places/comment", {place});
        })
});

router.put("/:id", (request, response) => {
    db.Place.findByIdAndUpdate(request.params.id, request.body)
        .then(() => {
            response.redirect(`/places/${request.params.id}`);
        })
});

router.post("/", (request, response) => {
    db.Place.create(request.body)
        .then(() => {
            response.redirect("/places");
        })
        .catch(error => {
            if(error && error.name == "ValidationError") {
                console.log(error)
                let message = "Validation Error: ";
                response.render("places/new", {message})
            } else response.render("error404");
        })
});

router.post("/:id/comment", (request, response) => {
    if(request.body.rant) {
        request.body.rant = true;
    } else request.body.rant = false;
    db.Place.findById(request.params.id)
        .then(place => {
            db.Comment.create(request.body)
            .then(comment => {
                place.comments.push(comment.id)
                place.save()
                .then(() => { 
                    response.redirect(`/places/${request.params.id}`)
                })
            })
        })
        .catch(() => {
            response.render("error404");
        })
});

router.delete("/:id", (request, response) => {
    db.Place.findByIdAndDelete(request.params.id)
        .then(deletedBread => {
            response.redirect("/places")
        })
});

module.exports = router;