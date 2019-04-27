const lines=[{
    Red : ["South Station","Park Street", "Kendall", "Central","Harvard","Porter","Davis","Alewife"],
    Green :["Government","Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"],
    Orange :["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"],
    }];


const stopBetweenStations=function (startLine, startStation, endLine, endStation)
{
 
//Below is the frist part of the Bouns successfuly Done :)
 if (startLine!= "Red" && startLine!= "Green" &&startLine!= "Orange" ) 
    console.log("please enter a valid line");
else if (endLine!= "Red" && endLine!= "Green" && endLine!= "Orange" ) 
    console.log("please enter a valid line");
    
//  for(var i=0;i<lines[0].startLine.length;i++){     
 // if (lines[0].startLine[i] != startStation) 
  //          return ("please enter a valid Startstation");
//}
  
//for(var i=0;i<lines[0].endLine.length;i++){     
//    if (lines[0].endLine[i] != startStation) 
//              return ("please enter a valid Startstation");
//  }
//please look at my concept above for the stations' Bouns ,i belive that its
//partially correct but still have a tiny problem.

if (startStation==endStation)
{
return ("0 stops")
}
else if (startLine==endLine)
{
var x=Math.abs(lines[0][startLine].indexOf(startStation)-lines[0][endLine].indexOf(endStation))
return (x +" "+ "stops")
}
else{
var a = Math.abs(lines[0][startLine].indexOf(startStation)-lines[0][startLine].indexOf("Park Street"))
var b = Math.abs(lines[0][endLine].indexOf(endStation)-lines[0][endLine].indexOf("Park Street"))
return(a+b +" "+ "stops")}
}