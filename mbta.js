// create array and function for one train line
const red = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife" ]

const stopsBetweenStations = function (startStation, endStation) {
  let stationCount = 0;
  let startIndex =0;
  for (let i = 0; i < red.length; i++) {
   if (red[i] === startStation) {
     startIndex = i; 
      // console.log("abd");   
      // continue; 
    }
    // else return "Start station not found";
   }

   // const limit = red.length - startIndex; // no need 
   for (let i = startIndex; i < red.length; i++) {
     if (red[i] != endStation) {
       stationCount++; 
       // console.log("ppppp");
     } else return stationCount + " stops"; 
      }
  }

stopsBetweenStations("South Station", "Davis"); // "6 stops"
stopsBetweenStations("Kendall", "Alewife"); // "5 stops"
stopsBetweenStations("South Station", "Alewife"); // "7 stops"

//------------------------------------------------------------//
//---------- for all three

const subway = {
  red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
  green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
  orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
}

/* 

 The function will be invoked using the following pattern of arguments:

Start Line, Start Station, End Line, End Station

Here are some examples of how should be invoked.
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops

*/