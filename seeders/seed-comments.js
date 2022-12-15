const db = require("../models");

async function seed() {
    // get the place
    let place = await db.Place.findOne({name: "H-Thai-ML"});

    // create a comment
    let comment = await db.Comment.create({
        author: "Famished Fran",
        rant: false,
        stars: 5.0,
        content: "Wow, simply amazing! Highly recommended!"
    });

    // add comment to place's comment array
    place.comments.push(comment.id);

    // save place
    await place.save();

    // exit program
    process.exit();
}

seed();