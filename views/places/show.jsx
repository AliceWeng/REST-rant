const React = require("react");
const Default = require("../default");

function show(data) {
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
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Default>
    )
}

module.exports = show;