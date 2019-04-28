const subwayLines = [{
    red: ["South Station", "Park Street", "Kendall", "Central", "Harvard"]
},
{
    green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]
},
{
    Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}
]

let stopsBetweenStations = function(startLine, startStation, endLine, endStation) {

const startStationIndex = subwayLines[startLine].filter(startStation);
const endStationIndex = subwayLines[endLine].filter(endStation);

for (let i = 0; i <= subwayLines.length; i++) {
    if (subwayLines[i] === subwayLines[startLine]) {
        subwayLines[startLine].filter(startStation)
    } else if (subwayLines[i] !== subwayLines[startLine]) {
        return ' the entred value is not valid try again';
    }
}
let distance = startStationIndex - endStationIndex
if (startLine === endLine) {
    return distance;
}

const startLineParkStreetIndex = subwayLines[startLine].filter('Park Street');
let distance2 = startStationIndex - startLineParkStreetIndex

const endLineParkStreetIndex = subwayLines[endLine].filter('Park Street');
let tripTime = endStationIndex - endLineParkStreetIndex

const totalTrip = tripToParkStreet + tripToDestination;

return totalTrip;

}
console.log('plese enter red/green ..etc line, then start station , and destination in this ordr ');
stopsBetweenStations('red', 'Central', 'red', 'Harvard');