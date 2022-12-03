const React = require("react");
const def = require("./default");

function error404() {
    return (
        <def>
            <h1>404 : Page Not Found</h1>
            <p>Oops, sorry, we can't find this page!</p>
        </def>
    )
}

module.exports = error404;