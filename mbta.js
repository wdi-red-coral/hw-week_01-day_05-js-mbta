const line = [
    {
      Red:[
      "South Station",
      "Park Street",
      "Kendall",
      "Central",
      "Harvard",
      "Porter",
      "Davis",
      "Alewife"
      ],
      Green: [
      "Government Center",
      "Park Street",
      "Boylston",
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
    }
];
    
  const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    if(startLine === endLine)
        return sameLine(startLine, startStation, endStation);
    else
        return differentLine(startLine, startStation, endLine, endStation);
  }
  
  
  const sameLine = function(startLine, startStation, endStation){
    return Math.abs((line[0][startLine].indexOf(startStation) - line[0][startLine].indexOf(endStation)));
  }
  
  //console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'));
  
  const differentLine = function(startLine, startStation, endLine, endStation){
    return Math.abs(line[0][startLine].indexOf(startStation) - line[0][startLine].indexOf("Park Street")) + Math.abs(line[0][endLine].indexOf("Park Street") - line[0][endLine].indexOf(endStation));  
  }
  
  // console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'));