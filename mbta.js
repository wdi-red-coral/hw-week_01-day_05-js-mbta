const sLines = {
  Red: [
    "South Station",
    "Park Street",
    "Kendall",
    "Central",
    "Harvard",
    "Porter",
    "Davis",
    "Alewife"
   ],
  Green: ["Government Center",
    "Park Street",
    "Bolyston",
    "Arlington",
    "Copley",
    "Hynes",
    "Kenmore"
  ],
  Orange: [
    "North Station",
    "Haymarket",
    "Park Street",
    "State",
    "Downtown Crossing",
    "Chinatown",
    "Back Bay",
    "Forest Hills"
  ]
};

 let stopsOnOneLine = function(line, start, end) {
  let stops = sLines[line].indexOf(start) - sLines[line].indexOf(end);
  return stops
};

 let stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    stops = stopsOnOneLine(startLine, startStation, endStation);
  } 