const React = require("react");
const Default = require("./default");

function home() {
    return (
        <Default>
            <main>
                <h1>Home</h1>
                <div>
                    <img className="sushi" src="./images/sushi.jpg" alt="salmon nigiri held by chopsticks"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@tamasp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tamas Pap</a> on <a href="https://unsplash.com/s/photos/sushi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Default>
    )
}

module.exports = home;