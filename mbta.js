const subwayLines = {
    Red: [ 
    "south station",
    "park street",
    "kendall",
    "central",
    "harvard",
    "porter",
    "davis",
    "alewife"
    ],
    Green: [
    "governemt center",
    "park street",
    "boylston",
    "arlington",
    "copley",
    "hynes",
    "kenmore"
    ],
    Orange: [
    "north station",
    "haymarket",
    "park street",
    "state",
    "downtown crossing",
    "chinatown",
    "back bay",
    "forest hill"
    ],
    }
    undefined
    let stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    const startStationIndex = subwayLines[startLine].indexOf(startStation);
    const endStation = subwayLines[endLine].indexOf(endStation);
    if(startLine === endLine){
    return startStationIndex - endStationIndex;
    }
    }