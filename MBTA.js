const mbta = [ //================================subway==================================

    { orange:["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]},
        
    { green:["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]},
    
    { red:["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"]},]
        
    const bustop = function (initline,initstation,lastline,laststation) 
        
    { let i,j;if(initline === "red") {i=0;}
        
    else if (initline === "green") {i=1;}
        
    else if (initline === "orange" ) {i=2;}
        
    if (initline === lastline)
        
    {return Math.abs(mbta[i][initline].indexOf(initstation)
        
    - mbta[i][lastline].indexOf(laststation));}
        
    else if (lastline === "red") {j=0;}
        
    else if (lastline === "green") {j=1;}
        
    else if (lastline === "orange" ) {j=2;}
        
    return Math.abs(mbta[i][initline].indexOf(initstation)
    
    - mbta[i][initline].indexOf("Park Street"))
        
    + Math.abs(mbta[j][lastline].indexOf(laststation)
    
    - mbta[j][lastline].indexOf("Park Street"));} 
        
    // mbta("initline","initstation","lastline","laststation")
    