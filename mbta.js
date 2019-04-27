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
  orange: [
    "North Station",
    "Haymarket",
    "Park Street",
    "State",
    "Downtown Crossing",
    "Chinatown",
    "Back Bay",
    "Forest Hills"
  ],

  stopsBetweenStations: function(startLine, startStation, endLine, endStation) {
    subwaysLines.array = [];

    //////red////////////////////////////////////////////////////////

    if (startLine == "red") {
 let start = subwaysLines.red.indexOf(startStation);
        
if(start<0 ){
console.log('wrong stations')
}
     
      if (endLine == "red") {
       let end = subwaysLines.red.indexOf(endStation);
        let stops = end - start;
        console.log(Math.abs(stops)+' stops');
      } else {
        
        subwaysLines.intersection(
          start,
          endLine,
          endStation,
          startStation,
          subwaysLines.red
        );
      }
    } //red

    /////////////green
   else if (startLine == "green") {
 let start = subwaysLines.green.indexOf(startStation);
        
if(start<0 ){
console.log('wrong stations')
}
      if (endLine == "green") {
       let end = subwaysLines.green.indexOf(endStation);
        let stops = end - start;
        console.log(Math.abs(stops)+' stops');
      } else {
       

        subwaysLines.intersection(start, endLine, endStation, startStation,subwaysLines.green);
      }
    } //green

else if (startLine == "orange") {
 let start = subwaysLines.orange.indexOf(startStation);
       
if(start<0 ){
console.log('wrong stations')
}
      if (endLine == "orange") {
        let end = subwaysLines.orange.indexOf(endStation);
        let stops = end - start;
        console.log(Math.abs(stops)+' stops');
      } else {
       // let sIndex = subwaysLines.orange.indexOf(startStation);

        subwaysLines.intersection(start, endLine, endStation, startStation,subwaysLines.orange);
      }
    } //green
else{

console.log('wrong startLine')
}

    return subwaysLines.array;
  },





  intersection: function(
    sIndex,
    endLine,
    endStation,
    startStation,
    startArray
  ) {
    //subwaysLines.array =subwaysLines.red;
    if (endLine == "green") {
      let eIndex = subwaysLines.green.indexOf(endStation);
        if(eIndex<0)console.log('wrong End station')
    
      if (eIndex >= 2) {
        //cheack endstation loaction after or be4 park street
        
        if (sIndex <= 1) {
          //cheack startSation loaction after or be4 park street
          for (let i = sIndex; i <= 1; i++) {
            subwaysLines.array.push(startArray[i]);
          
          }
          for (let i = 2; i <= eIndex; i++) {
            
            subwaysLines.array.push(subwaysLines.green[i]);
          }
        } else {
          for (let i = sIndex; i < startArray.length; i++) {
            subwaysLines.array.push(startArray[i]);
            
          }
          for (let i = 0; i <= eIndex; i++) {
            subwaysLines.array.push(subwaysLines.green[i]);
          }
        }
      } else if (eIndex == 1 || eIndex == 0) {
        for (let i = sIndex; i < subwaysLines.red.length; i++) {
          subwaysLines.array.push(subwaysLines.red[i]);
        }

        for (let i = 0; i <= eIndex; i++) {
          subwaysLines.array.push(subwaysLines.green[i]);
        }
      }

      let start = subwaysLines.array.indexOf(startStation);
      let end = subwaysLines.array.indexOf(endStation);
      let stops = end - start;
      console.log(stops);
    } else if (endLine == "red") {
      let eIndex = subwaysLines.red.indexOf(endStation);
 if(eIndex<0)console.log('wrong End station')
      if (eIndex >= 2) {
        for (let i = sIndex; i >= 0; i--) {
          subwaysLines.array.push(subwaysLines.green[i]);
        }

        for (let i = subwaysLines.red.length - 1; i >= eIndex; i--) {
          subwaysLines.array.push(subwaysLines.red[i]);
        }
      } else {
        for (let i = sIndex; i >= 1; i--) {
          subwaysLines.array.push(subwaysLines.green[i]);
        }

        for (let i = 0; i <= eIndex; i++) {
          subwaysLines.array.push(subwaysLines.red[i]);
        }
      }

      let start = subwaysLines.array.indexOf(startStation);
      let end = subwaysLines.array.indexOf(endStation);
      let stops = end - start;
      console.log(stops);
    } else if (endLine == "orange") {
      let eIndex = subwaysLines.orange.indexOf(endStation);
     
 if(eIndex<0)console.log('wrong End station')
      if (eIndex >= 3) {
        //cheack endstation loaction after or be4 park street
        ////// from here complete
        if (sIndex <= 1) {
          //cheack startSation loaction after or be4 park street
          //here contunio
          for (let i = sIndex; i <= 1; i++) {
            subwaysLines.array.push(startArray[i]);
            
          }
          for (let i = 3; i <= eIndex; i++) {
            subwaysLines.array.push(subwaysLines.orange[i]);
          }
        } else {
          if (startArray == subwaysLines.red) {
            for (let i = sIndex; i < startArray.length; i++) {
              subwaysLines.array.push(startArray[i]);
            }
            subwaysLines.array.push(subwaysLines.green[0]);
            for (let i = 2; i <= eIndex; i++) {
              subwaysLines.array.push(subwaysLines.orange[i]);
            }
          } else if (startArray == subwaysLines.green) {
            for (let i = sIndex; i < startArray.length; i++) {
              subwaysLines.array.push(startArray[i]);
            }
            for (let i = 0; i <= eIndex; i++) {
              subwaysLines.array.push(subwaysLines.orange[i]);
            }
          }

        }
      } else if (eIndex == 1 || eIndex == 0 || eIndex == 2) {
        if (startArray == subwaysLines.red) {
          for (let i = sIndex; i < startArray.length; i++) {
            subwaysLines.array.push(subwaysLines.startArray[i]);
          }
          for (let i = 0; i <= subwaysLines.green.length; i++) {
            subwaysLines.array.push(subwaysLines.green[i]);
          }
        } else if (startArray == subwaysLines.green) {
          for (let i = sIndex; i <= startArray.length; i++) {
            subwaysLines.array.push(startArray[i]);
          }
        }
for (let i = 0; i <= eIndex; i++) {
        subwaysLines.array.push(subwaysLines.orange[i]);
      }
      }
      
    }else{
console.log('wrong End line')
}

    let start = subwaysLines.array.indexOf(startStation);
    let end = subwaysLines.array.indexOf(endStation);
    let stops = end - start;
    console.log(stops+' stops');
  } //functionEnd
}; //object end