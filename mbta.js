
const subway_lines = {
    Red: [
      'South Station',
      'Park Street',
      'Kendall',
      'Central',
      'Harvard',
      'Porter',
      'Davis',
      'Alewife'
    ],   length_of_Red:function(){return this.Red.length; },
Green: [
      'Government Center',
      'Park Street',
      'Boylston',
      'Arlington',
      'Copley',
      'Hynes',
      'Kenmore'
],
      length_of_Green:function(){return this.Green.length; },
    Orange: [
      'North Station',
      'Haymarket',
      'Park Street',
      'State',
      'Downtown Crossing',
      'Chinatown',
      'Back Bay',
      'Forest Hills'
    ], length_of_Orange:function(){
    return this.Orange.length;
      },
  }

function stopsBetweenStations(startLine, startStation, endLine, endStation){

 let start= subway_lines[startLine].indexOf(startStation);
 let end= subway_lines[endLine].indexOf(endStation);

 console.log(`starts in ${startLine} Line ,${startStation} Station`);
 console.log(`ends with ${endLine} Line ,${endStation} Station`);

if(startLine==endLine&&startStation==endStation){console.log(`it is ${0}`);return 0; }


 if (startLine=='Red'&&endLine=='Orange'|| startLine=='Orange'&&endLine=='Red')
 {
   let calc_red=start-subway_lines.length_of_Red();
   
   let calc_orange=end-subway_lines.length_of_Orange();
 
let length_of_Green=Math.abs(subway_lines.length_of_Green());
  if(calc_red>calc_orange){
 let abs_calc_red=Math.abs(calc_red);
let sum_red =Math.abs(abs_calc_red+length_of_Green);
 console.log(`stops Between Stations is ${sum_red}`);
  }  else{
 let abs_calc_orange=Math.abs(calc_orange);
let sum_green =Math.abs(abs_calc_orange+length_of_Green);
 console.log(`stops Between Stations is ${sum_green}`);
}}
 else{
    let sum=(start+end);
  postive= Math.abs(sum);
    console.log(`stops Between Stations is ${postive}`);

}}



 stopsBetweenStations( 'Red','Central','Orange','Haymarket'); console.log(` `);
 stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') ;console.log(` `);
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'); console.log(` `);
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore');console.log(` `);