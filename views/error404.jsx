const React = require("react");
const Default = require("./default");

function error404() {
    return (
        <Default>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Oops, looks like you took a wrong turn. Let's get you back <a href="/">home</a>.</p>
                <img src="/images/oh-no.gif" alt="A kitten saying 'oh no' and moving it's paw over it's mouth."/>
            </main>
        </Default>
    )
}

module.exports = error404;