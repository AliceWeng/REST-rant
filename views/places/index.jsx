const React = require("react");
const def = require("../default");

function index(data) {
    let placesFormatted = data.places.map(place => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    });
    return (
        <def>
            <main>
                <h1>Places Index Page</h1>
                {placesFormatted}
            </main>
        </def>
    )
}

module.exports = index;