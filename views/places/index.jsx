const React = require("react");
const Default = require("../default");

function index(data) {
    let placesFormatted = data.places.map(place => {
        return (
            <div className="block">
                <h2>
                    <a href={`/places/${place.id}`}>
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}/>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    });
    return (
        <Default>
            <main>
                <h1>Places Index Page</h1>
                <div className="flex">
                    {placesFormatted}
                </div>
            </main>
        </Default>
    )
}

module.exports = index;