const subwayLines = {
    Red:[
      'South Station',
      'Park Street',
      'Kendall',
      'Central',
      'Harvard',
      'Porter',
      'Davis',
      'Alewife'
    ],
    Green:[
      'Government Center',
      'Park Street',
      'Boylston',
      'Arlington',
      'Copley',
      'Hynes',
      'Kenmore']
    ,
    Orange:['North Station',
      'Haymarket',
      'Park Street',
      'State',
      'Downtown Crossing',
      'Chinatown',
      'Back Bay',
      'Forest Hills'],
};

let stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    const startStationIndex = subwayLines[startLine].indexOf(startStation);
    const endStationIndex = subwayLines[endLine].indexOf(endStation);
    
    if(startLine === endLine){
        return Math.abs(startStationIndex - endStationIndex);
    }

    const startLineParkStreetIndex = subwayLines[startLine].indexOf('Park Street');
    const tripToParkStreet = Math.abs(startStationIndex - startLineParkStreetIndex);
    const endLineParkStreetIndex = subwayLines[endLine].indexOf('Park Street');
    const tripToDestination = Math.abs(endStationIndex - endLineParkStreetIndex);
    const totalTrip = tripToParkStreet + tripToDestination ;

    return totalTrip;

    
}

