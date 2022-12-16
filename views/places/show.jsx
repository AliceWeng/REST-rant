const React = require("react");
const Default = require("../default");

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if(data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? "Rant!" : "Rave!"}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Default>
            <main>
                <div>
                    <img src={data.place.pic} alt={data.place.name}/>
                    <div>
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                        <h2>Description</h2>
                        <p>{`Located in ${data.place.city}, ${data.place.state} and serving ${data.place.cuisines}`}</p>
                    </div>
                </div>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                <div>
                    <h2>Comments</h2>
                    <p>{comments}</p>
                </div>
                <a href={`/places/${data.place.id}/comment`}>
                    Write A Comment
                </a>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Default>
    )
}

module.exports = show;