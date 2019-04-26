const line = [{
      Red:["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
      Green:["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
      Orange:["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
    }]; 
  const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    if(startLine === endLine)
        return Math.abs((line[0][startLine].indexOf(startStation) - line[0][startLine].indexOf(endStation)));
    return Math.abs(line[0][startLine].indexOf(startStation) - line[0][startLine].indexOf("Park Street")) + Math.abs(line[0][endLine].indexOf("Park Street") - line[0][endLine].indexOf(endStation));
  }