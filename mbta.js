//========================= Final Answer =========================//

const subway = {
  Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
  Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
  Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
}
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {

  if (!(startLine in subway) || !(endLine in subway)) // true if "key" doesn't exist in object)
  {
    return "False subway line entry";
  } else {
  if (subway[startLine].indexOf(startStation) === -1 || subway[endLine].indexOf(endStation) === -1) {
    return "False station entry";
  } else {

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

stopsBetweenStations('Red', 'State', 'Orange', 'Chinatown') 
"False station entry"

stopsBetweenStations('blue', 'State', 'Orange', 'Forest Hills') 
"False subway line entry"