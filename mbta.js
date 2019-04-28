  // 
const subwayLines = {
   Red: [
     'South Station',
     'Park Street',
     'Kendall',
     'Central',
     'Harvard',
     'Porter',
     'Davis',
     'Alewife'
   ],
   Green: [
     'Government Center',
     'Park Street',
     'Boylston',
     'Arlington',
     'Copley',
     'Hynes',
     'Kenmore'
   ],
   Orange: [
     'North Station',
     'Haymarket',
     'Park Street',
     'State',
     'Downtown Crossing',
     'Chinatown',
     'Back Bay',
     'Forest Hills'
   ]
 }
 
 const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
   // get the index of the startLine startStation
   const startStationIndex = subwayLines[startLine].indexOf(startStation)
   // get the index of the end station
   const endStationIndex = subwayLines[endLine].indexOf(endStation)
 
   
   if (startLine === endLine) {
     return Math.abs(startStationIndex - endStationIndex)
   }
 
  