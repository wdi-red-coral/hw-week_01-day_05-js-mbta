const mbta = [{ red:["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"]},
{ green:["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]},
{ orange:["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]}]


const stopsbs=function(startline,startstation,endline,endstation) {
let i,j;
    if (startline === "red") {
i=0;}
else if (startline === "green") {
    i=1;}
else if (startline === "orange" ) {
    i=2;}

    if (startline === endline){
return Math.abs(mbta[i][startline].indexOf(startstation) - mbta[i][endline].indexOf(endstation));

    }
    else 
	  if (endline === "red") {
j=0;}
else if (endline === "green") {
    j=1;}
else if (endline === "orange" ) {
    j=2;}
    return Math.abs(mbta[i][startline].indexOf(startstation) - mbta[i][startline].indexOf("Park Street")) + Math.abs(mbta[j][endline].indexOf(endstation) - mbta[j][endline].indexOf("Park Street"));
}
undefined
stopsbs("red","Park Street","green","Kenmore");
5
stopsbs("red","Park Street","red","Harvard");
3