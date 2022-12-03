const React = require("react");
const Default = require("./default");

function error404() {
    return (
        <Default>
            <h1>404 : Page Not Found</h1>
            <p>Oops, sorry, we can't find this page!</p>
        </Default>
    )
}

module.exports = error404;