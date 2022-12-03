const router = require("express").Router();

router.get("/", (request, response) => {
    response.send("GET /places");
});

module.exports = router;