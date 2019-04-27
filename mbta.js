//========================= Final Answer =========================//

const red = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"];
const green = ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]
const orange = ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"];
const subway = [red, green, orange];

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  switch (startLine) {
    case 'Red': startLine = 0;
      break;
    case 'Green': startLine = 1;
      break;
    case 'Orange': startLine = 2;
      break;
  }
  switch (endLine) {
    case 'Red': endLine = 0;
      break;
    case 'Green': endLine = 1;
      break;
    case 'Orange': endLine = 2;
      break;
  }

  if (startLine === endLine) {  
    return Math.abs(subway[startLine].indexOf(startStation) - subway[endLine].indexOf(endStation)) + " stops."
  } else {

        if (startStation === 'Park Street') {
          return Math.abs(subway[startLine].indexOf('Park Street') - subway[endLine].indexOf(endStation)) + " stops.";
        } else { 
      if (endStation === 'Park Street') {
        return subway[startLine].indexOf(startStation) - subway[endLine].indexOf('Park Street') + " stops.";
      } else
        return Math.abs(subway[startLine].indexOf(startStation) - subway[startLine].indexOf('Park Street')) + Math.abs(subway[endLine].indexOf('Park Street') - subway[endLine].indexOf(endStation)) + " stops.";
    } 
  }
}


stopsBetweenStations('Green', 'Kenmore', 'Green', 'Park Street') // 5 stops
"5 stops."

stopsBetweenStations('Green', 'Kenmore', 'Red', 'South Station') // 6 stops
"6 stops."

stopsBetweenStations('Red', 'Alewife', 'Red', 'Park Street') // 6 stops
"6 stops."

stopsBetweenStations('Red', 'Park Street', 'Red', 'Alewife') // 6 stops
"6 stops."

stopsBetweenStations('Red', 'Park Street', 'Green', 'Copley') // 3 stops
"3 stops."

stopsBetweenStations('Green', 'Copley', 'Red', 'Park Street') // 3 stops
"3 stops."

stopsBetweenStations('Orange', 'State', 'Orange', 'Forest Hills') // 4 stops
"4 stops."

stopsBetweenStations('Orange', 'Forest Hills', 'Orange', 'State') // 4 stops
"4 stops."

stopsBetweenStations('Red', 'South Station', 'Orange', 'Chinatown') // 4 stops
"4 stops."