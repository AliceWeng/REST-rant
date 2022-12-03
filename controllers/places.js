const router = require("express").Router();

router.get("/", (request, response) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: './images/h-thai-ml.jpg'
        // Photo by <a href="https://unsplash.com/@calumlewis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Calum Lewis</a> on <a href="https://unsplash.com/s/photos/thai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: './images/coding-cat.jpg'
        // Photo by <a href="https://unsplash.com/@agforl24?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tai Bui</a> on <a href="https://unsplash.com/s/photos/coding-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      }]
    response.render("places/index", {places});
});

module.exports = router;