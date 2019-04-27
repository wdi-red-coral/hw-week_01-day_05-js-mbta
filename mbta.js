//--------------- IF FOR ONE SUBWAY LINE -----------------------------//
const red = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife" ]

const stopsBetweenStations = function (startStation, endStation) {
  let stationCount = 0;
  let startIndex =0;
  for (let i = 0; i < red.length; i++) {
   if (red[i] === startStation) {
     startIndex = i; 
      // console.log("abd");   
    }
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

//=========================================================================//
//----------------------- FOR ALL THREE LINES -----------------------------//
//----------------------- ONLY ONE WAY SUBWAY LINES -----------------------//

//--------------------- DECLARATIONS START --------------------------------//
const subway = {
  red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
  green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
  orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
}
// const path = [];
let stationsCount = 0;
//-------------------- DECLARATIONS END ------------------------------------//
//--------------------------- TO RED START ---------------------------------//
const toRed = function (startLine, startStation, endStation){
  // if strats in red line , fill untill start station
  const path = [];
  if (startLine === 'Red'){
    for (let i = subway.red.length-1; i >= 0; i--) {
    if (subway.red[i] != startStation) {
      path.push(subway.red[i]);
      console.log("abd");   
    }
  } return path.length + " stops";

// if starts in green line OR orange line , fill until park street but not park street (for)
// if start station is park street, return path, else push park street then check if it starts in orange line
// if it is not orange line return path 
// if it starts in orange line check if startstation is orange[0], if true push orange[1] then return path 
// if false return path 

  } else {
    if (startLine === 'Green' || startLine === 'Orange'){ // add OR start line = orange 
    for (let i = subway.red.length -1; subway.red[i] != 'Park Street' ; i--){
      path.push(subway.red[i]);
  }
  if (startStation != 'Park Street'){
    path.push('Park Street'); 
    /// i could add the orange line check here 
    if (startLine === 'Orange'){ if (startStation === subway.orange[0]) 
      path.push(subway.orange[1])
    return path.length + " stops"; }
    } else return path.length + " stops";
  } 
  
  }  
}
//-------------------------- TO RED END ------------------------------------//
//-------------------- TO GREEN START --------------------------------------//
const toGreen = function (startLine, startStation, endStation) {
  const path = [];
  if (startLine === 'Green') {
    for (let i = subway.green.length - 1; i >= 0; i--) {
      if (subway.green[i] != startStation) {
        path.push(subway.green[i]);
        console.log("abd");
      }
    } return path.length + " stops";

  } else {
    if (startLine === 'Red' || startLine === 'Orange') { 
      for (let i = subway.green.length - 1; subway.green[i] != 'Park Street'; i--) {
        path.push(subway.green[i]);
      }
      if (startStation != 'Park Street') {
        path.push('Park Street');
        if (startLine === 'Orange') {
          if (startStation === subway.orange[0])
            path.push(subway.orange[1])
          return path.length + " stops";
        }
      } else return path.length + " stops";
    }
  }  
}
//-------------------- TO GREEN END ----------------------------------------//
//-------------------- TO ORANGE START -------------------------------------//
const toOrange = function (startLine, startStation, endStation) {
  const path = [];
  if (startLine === 'Orange') {
    for (let i = subway.orange.length - 1; i >= 0; i--) {
      if (subway.orange[i] != startStation) {
        path.push(subway.orange[i]);
        console.log("abd");
      }
    } return path.length + " stops";

  } else {
    if (startLine === 'Green' || startLine === 'Red') {
      for (let i = subway.orange.length - 1; subway.orange[i] != 'Park Street'; i--) {
        path.push(subway.orange[i]);
      }
      if (startStation != 'Park Street') {
        path.push('Park Street');
      } else return path.length + " stops";
    }
  }  
}
//-------------------- TO ORANGE END ---------------------------------------//
//-------------------- stopsBetweenStations START --------------------------//
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {

  if (endLine === 'Red') {
    console.log(toRed(startLine, startStation, endStation));
  }
  else {
    if (endLine === 'Green') {
      console.log(toGreen(startLine, startStation, endStation));
    } else {
      console.log(toOrange(startLine, startStation, endStation));
    }
  }
}
//-------------------- stopsBetweenStations END ----------------------------//
//==========================================================================//

/* 

 The function will be invoked using the following pattern of arguments:

Start Line, Start Station, End Line, End Station

Here are some examples of how should be invoked.
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops

*/

//========================= another try out =========================//

const red = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"];
const green = ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]
const orange = ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"];
const subway = [red, green, orange];

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  switch (startLine) {
    case 'Red': startLine = 0;
      break;
    case 'Green': startline = 1;
      break;
    case 'Orange': srartLine = 2;
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

  if (startLine === endLine) { // this works two-ways on one line 
    return Math.abs(subway[startLine].indexOf(startStation) - subway[endLine].indexOf(endStation)) + " stops."// math.abs()
  } else {

    // to determine if it is from [0] or from the last index => compare it to 'park street' index if bigger then its from end if smaller then it's from up
    // when = park street but on different line => issue !!!!
    let tmp = Math.abs(subway[startLine].indexOf(startStation) - subway[startLine].indexOf('Park Street')); // this line has a problem 
    if (tmp > 0) {
      return subway[startLine].indexOf(startStation) - subway[startLine].indexOf('Park Street') + subway[endLine].indexOf(endStation) - subway[startLine].indexOf('Park Street');
    } else {
      // if (startStation === 'Park Street' || endStation === 'Park Street')
        if (startStation === 'Park Street') {
          return subway[startLine].indexOf('Park Street') + subway[endLine].indexOf(endStation);
        } else { // this one works
      if (endStation === 'Park Street') {
        return subway[startLine].indexOf(startStation) - subway[endLine].indexOf('Park Street');
      } else
        return Math.abs(subway[startLine].indexOf(startStation) - subway[startLine].indexOf('Park Street')) + Math.abs(subway[endLine].indexOf('Park Street') - subway[endLine].indexOf(endStation)) + " stops";
    } // this line works one way top-bottom on different lines
  }
}

}
/* 
stopsBetweenStations('Green', 'Kenmore', 'Red', 'South Station') // 6 stops
VM921:33 Uncaught TypeError: Cannot read property 'indexOf' of undefined
    at stopsBetweenStations (<anonymous>:33:42)
    at <anonymous>:1:1

stopsBetweenStations('Green', 'Copley', 'Red', 'Park Street') // 7 stops

VM921:33 Uncaught TypeError: Cannot read property 'indexOf' of undefined
    at stopsBetweenStations (<anonymous>:33:42)
    at <anonymous>:1:1
    */
