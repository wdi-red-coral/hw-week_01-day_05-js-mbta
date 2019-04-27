const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    let lines = {
        Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
        Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
        Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
    }

    if (startLine === endLine) {
        return Math.abs(lines[endLine].indexOf(endStation) - lines[startLine].indexOf(startStation))
    } else {
        return Math.abs(lines[endLine].indexOf(endStation) + lines[startLine].indexOf('Park Street'))
    }
}