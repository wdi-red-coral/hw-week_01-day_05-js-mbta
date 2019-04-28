
// It works but sometimes it add or subtract 1 from the total of stops that is related to the intersection 
  const subwayLines = { 
    Red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'], 
    Green : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    Orange : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
    }; 

    let startLine, startStation , endLine, endStation; 
    let interSection, start, end; 
    let flag, flag1, flag2 =0; 
    const interPoint; 

 const countStops = function (startLine ,startStation, endLine ,endStation){ 
       
        
 if (startLine === 'Red') {   /// Check the color of the lines
    if (startStation === endStation){ // if start and end equals retuen zero
            return (flag +" stops"); 
    }

      if (startStation === 'Park Street' || endStation === 'Park Street'){   ///Checking the intersection point
           
        interSection = subwayLines[startLine].indexOf('Park Street');
            start = subwayLines[startLine].indexOf(startStation); 
            end = subwayLines[endLine].indexOf(endStation); 
            interPoint = Math.abs(((interSection - start) + (end - interSection)));
            return (interPoint +" stops"); 
        }  

         else {   /// going through one line back and forth 
           for (let i=0; i< subwayLines.Red.length; i++){
             if (subwayLines.Red.indexOf(startStation) < subwayLines.Red.indexOf(endStation)) {
             flag1 = (subwayLines.Red.indexOf(endStation)- subwayLines.Red.indexOf(startStation)); 
                return flag1+" stops";
             } else if (subwayLines.Red.indexOf(startStation) > subwayLines.Red.indexOf(endStation)){
                flag2 = Math.abs(subwayLines.Red.indexOf(endStation)- subwayLines.Red.indexOf(startStation)); 
                return flag2+" stops"; 
    
            } 
          } 
        }     
 } else if (startLine === 'Green') {  /// Check the color of the lines
    if (startStation === endStation){    
            return (flag +" stops");
     } 
    if (startStation === 'Park Street' || endStation === 'Park Street'){  ///Checking the intersection point
      
        interSection = subwayLines[startLine].indexOf('Park Street');
        start = subwayLines[startLine].indexOf(startStation); 
        end = subwayLines[endLine].indexOf(endStation); 
        interPoint = Math.abs(((interSection - start) + (end - interSection)));
        return (interPoint +" stops"); 
    }    
     else {  /// going through one line back and forth
          for (let i=0; i< subwayLines.Green.length; i++){
            if (subwayLines.Green.indexOf(startStation) < subwayLines.Green.indexOf(endStation)) {
             flag1 = (subwayLines.Green.indexOf(endStation)- subwayLines.Green.indexOf(startStation)); 
                return flag1+" stops";
            } else if (subwayLines.Green.indexOf(startStation) > subwayLines.Green.indexOf(endStation)){
                flag2 = Math.abs(subwayLines.Green.indexOf(endStation)- subwayLines.Green.indexOf(startStation)); 
                return flag2+" stops";
    
            } 
          } 
        } 
     } 
 else if (startLine === 'Orange'){  /// Check the color of the lines
   if (startStation === endStation){    
            return (flag +" stops");
   } 
   if (startStation === 'Park Street' || endStation === 'Park Street'){ ///Checking the intersection point
            
        interSection = subwayLines[startLine].indexOf('Park Street');
        start = subwayLines[startLine].indexOf(startStation); 
        end = subwayLines[endLine].indexOf(endStation); 
        interPoint = Math.abs(((interSection - start) + (end - interSection)));
        return (interPoint +" stops"); 
    }    
     else {  /// going through one line back and forth
        for (let i=0; i< subwayLines.Orang.length; i++){
          if (subwayLines.Orang.indexOf(startStation) < subwayLines.Orang.indexOf(endStation)) {
             flag1 = (subwayLines.Orang.indexOf(endStation)- subwayLines.Orang.indexOf(startStation)); 
                return flag1+" stops";
           } else if (subwayLines.Orang.indexOf(startStation) > subwayLines.Orang.indexOf(endStation)){
                flag2 = Math.abs(subwayLines.Orang.indexOf(endStation)- subwayLines.Orang.indexOf(startStation)); 
                return flag2+" stops";
    
            } 
        } 
      } 
     } 
    } 
      countStops ('Orange','Park Street', 'Red','South Station');

      