const subwaysLines = {
  array: [],
  red: [
    "South Station",
    "Park Street",
    "Kendall",
    "Central",
    "Harvard",
    "Porter",
    "Davis",
    "Alewife"
  ],
  green: [
    "Government Center",
    "Park Street",
    "Boylston",
    "Arlington",
    "Copley",
    "Hynes",
    "Kenmore"
  ],

  stopsBetweenStations: function(startLine, startStation, endLine, endStation) {
    subwaysLines.array = [];

    //////red////////////////////////////////////////////////////////
    if (startLine == "red") {
      console.log("you are red");
      if (endLine == "red") {
        let start = subwaysLines.red.indexOf(startStation);
        let end = subwaysLines.red.indexOf(endStation);
        let stops = end - start;
        console.log(Math.abs(stops));
      } else {
        let sIndex = subwaysLines.red.indexOf(startStation);
        ubwaysLines.intersection(sIndex, endLine, endStation, startStation);
      }
    } //red
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //console.log(array);
    /////////////green
    if (startLine == "green") {
      let sIndex = subwaysLines.green.indexOf(startStation);

      subwaysLines.intersection(sIndex, endLine, endStation, startStation);
    } //green

    return subwaysLines.array;
  },

  intersection: function(sIndex, endLine, endStation, startStation) {
    //subwaysLines.array =subwaysLines.red;
    if (endLine == "green") {
      let eIndex = subwaysLines.green.indexOf(endStation);
      console.log("you are red and green");

      if (eIndex >= 2) {
        for (let i = sIndex; i <= 1; i++) {
          subwaysLines.array.push(subwaysLines.red[i]);
          console.log("for1" + subwaysLines.array);
        }
        for (let i = 2; i <= eIndex; i++) {
          console.log("for2");
          subwaysLines.array.push(subwaysLines.green[i]);
        }
      } else if (eIndex == 1 || eIndex == 0) {
        for (let i = sIndex; i < subwaysLines.red.length; i++) {
          console.log("for1");
          subwaysLines.array.push(subwaysLines.red[i]);
        }

        for (let i = 0; i <= eIndex; i++) {
          console.log("for3");
          subwaysLines.array.push(subwaysLines.green[i]);
        }
      }

      let start = subwaysLines.array.indexOf(startStation);
      let end = subwaysLines.array.indexOf(endStation);
      let stops = end - start;
      console.log(stops);
    } else if (endLine == "red") {
      let eIndex = subwaysLines.red.indexOf(endStation);
      if (eIndex >= 2) {
        for (let i = sIndex; i >= 0; i--) {
          console.log("for1");
          subwaysLines.array.push(subwaysLines.green[i]);
        }

        for (let i = subwaysLines.red.length - 1; i >= eIndex; i--) {
          console.log("for3");
          subwaysLines.array.push(subwaysLines.red[i]);
        }
      }

      let start = subwaysLines.array.indexOf(startStation);
      let end = subwaysLines.array.indexOf(endStation);
      let stops = end - start;
      console.log(stops);
    }
  }
}; //object end
