function stopsBetweenStations(startLine, startStation, endLine, endStation ){
    let subway = [];
    subway["Red"] = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"];
    subway["Green"] = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
    subway["Orange"] = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Black Bay', 'Forest Hills'];
    let intersection = "Park Street";
    let stops;
    let startIndex, endIndex;
    let line1Stops, line2Stops;
    if(startLine == endLine ){ 
        startIndex = subway[startLine].indexOf(startStation);
        endIndex = subway[endLine].indexOf(endStation);
        stops = endIndex - startIndex; 
    }else if(startLine != endLine){
        line1Stops = subway[startLine].indexOf(startStation)  - subway[startLine].indexOf(intersection);
        line2Stops = subway[endLine].indexOf(endStation)  - subway[endLine].indexOf(intersection);
        if( line1Stops < 0)
            line1Stops = line1Stops * -1;

        if( line2Stops < 0)
            line2Stops = line2Stops * -1;
        stops =   line1Stops  +  line2Stops;
          }
      if( stops < 0)
        stops = stops * -1;
       return stops + " stops";
}
   