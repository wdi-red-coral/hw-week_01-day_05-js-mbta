const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    let red = ['south station', 'park street', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife']
    if (startLine === endLine) {
        return red.indexOf(endStation) - red.indexOf(startStation)
    }
}