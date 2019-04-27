const stopsBetweenStations = function(startline , startstation , endline, endstation){

    const subway ={
        Red: [ 'South Station' ,'Park Street' ,'Kendall' ,'Central' ,'Harvard' ,'Porter' ,'Davis' ,'Alewife' ] , 
       
       Green: ['Government Center', 'Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'], 
  
        Orange: ['North Station', 'Haymarket','Park Street','State','Downtown Crossing','Chinatown' , 'Back Bay' , 'Forest Hills']
  }
     
   
  if ( startline === endline){
     
      return subway[endline].indexOf(endstation) - subway[startline].indexOf(startstation) 
  
  
  } else if (startline !== endline) {
  
      return subway[startline].indexOf('Park Street') +   subway[endline].indexOf(endstation) 
       
  
  }  else  {
          return subway[endline].indexOf('Park Street') - subway[startline].indexOf(startline) 
       
  
  }  
  
  
  }