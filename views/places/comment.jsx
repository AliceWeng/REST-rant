const React = require("react");
const Default = require("../default");

function comment(data) {
    return (
        <Default>
            <form method="POST" action={`/places/${data.place.id}/comment`}>
                <div>
                    <label htmlFor="author">Author</label>
                    <input name="author" id="author"/>
                </div>
                <div>
                    <label htmlFor="rant">Rant</label>
                    <input type="checkbox" name="rant" id="rant"/>
                </div>
                <div>
                    <label htmlFor="stars">Stars</label>
                    <input name="stars" id="stars"/>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="content"></textarea>
                </div>
                <div>
                    <input type="submit" value="Submit New Comment"/>
                </div>
            </form>
        </Default>
    )
}

module.exports = comment;