let subway  = [
    {
        Red : [
            "South Station",
            "Park Street" , 
            "Kendall" ,
            "Central" ,
            "Harvard" ,
            "Porter" ,
            "Davis" , 
            "Alewife"
        ]
    },
    {
        Green : [
            "Government Center" ,
            "Park Street" ,
            "Boylston" ,
            "Arlington" ,
            "Copley" ,
            "Hynes" ,
            "Kenmore"
        ]
    },
    {
        Orange : [
            "North Station" ,
            "Haymarket" ,
            "Park Street" ,
            "State" ,
            "Downtown Crossing",
            "Chinatown",
            "Back Bay" ,
            "Forest Hills"
        ]
    }
];
// varibles for validation the keys of object in subway array 
let keyRed = "Red" ;
let keyGreen ="Green" ;
let keyOrange = "Orange" ;

// varibles that save the return value from the functions 
let redSub = redStation();
let greenSub = greenStation();
let orangeSub = orangeStation();

/*
The three functions below are to extract the array of stations name 
from each key object (using the olength of each object index) and save it in separate array. 
the functions are: 
    # redStation()
    # greenStation()
    # orangeStation()
*/
function redStation(){
    let newRed = [] ; 
    for(let i = 0 ; i <= subway[0].Red.length ; i ++ ){
        newRed.push(subway[0].Red[i])   
    }
    return newRed;
}

function greenStation(){
    let newGreen = [] ; 
    for(let i = 0 ; i <=subway[1].Green.length ; i ++ ){
        newGreen.push(subway[1].Green[i])   
    }
    return newGreen;
}

function orangeStation(){
    let newOrange = [] ; 
    for(let i = 0 ; i <=subway[2].Orange.length ; i ++ ){
        newOrange.push(subway[2].Orange[i])   
    }
    return newOrange;
}

/*
This function merge two different array from each other using concat() , 
then return the new array from that merge to use it in removeDuplicate() 
*/
function merge(arr1, arr2){
    let arr3 = arr1.concat(arr2);
    return arr3 ; 
}

/*
This function take the new merge array and remvoe duplicated values 
(remove the second duplicate index)  then save it in new array 
*/
function removeDuplicate(array){
    let unique = {};
    array.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  } );
  return Object.keys(unique);
}

/*
- This function will gonna to count the stopping points between a specefic range 
this function take 4 args the first 2 args is to check which station line condition 
will be excute, the last 2 args will specify the range of points. 
- the range start by finding the index of each point in the range using indexOf() 
then, through slice() we extract the selected part 
*/
function range(key1, key2, startPoint ,endPoint){
   
    if( (key1 === keyRed) &&  ( key2 === keyRed ) ) {
        let stopPoint = 0 ; 
        stopPoint = redSub.slice(redSub.indexOf(startPoint)+1, redSub.indexOf(endPoint)+1);
        console.log("You Have to stop: "+ stopPoint.length + " Stations");

    }else if( (key1 === keyGreen) && ( key2 === keyGreen ) ){
        let stopPoint = 0 ; 
        stopPoint = greenSub.slice(greenSub.indexOf(startPoint)+1, greenSub.indexOf(endPoint)+1);
        console.log("You Have to stop: "+ stopPoint.length + " Stations");

    }else if( (key1 === keyOrange) && (key2 === keyOrange)) {
        let stopPoint = 0 ; 
        stopPoint = orangeSub.slice(orangeSub.indexOf(startPoint)+1, orangeSub.indexOf(endPoint)+1);
        console.log("You Have to stop: "+ stopPoint.length + " Stations");

    }else if( (key1 === keyRed ) && ( key2 === keyGreen) ){
        let stopPoint = 0 ; 
        stopPoint = greenSub.slice(redSub.indexOf(startPoint)+1, greenSub.indexOf(endPoint)+1);
        console.log("You Have to stop: "+ stopPoint.length + " Stations");

    }else if(key1 == keyRed && key2 == keyOrange){
        let stopPoint = 0 ; 
        stopPoint = orangeSub.slice(redSub.indexOf(startPoint)+1, orangeSub.indexOf(endPoint)+1);
        console.log("You Have to stop: "+ stopPoint.length + " Stations");

    }else if( (key1 === keyGreen ) && (key2 === keyRed )) {
        let stopPoint = 0 ; 
        stopPoint = redSub.slice(greenSub.indexOf(startPoint)+1, redSub.indexOf(endPoint)+1);
        console.log("You Have to stop: "+ stopPoint.length + " Stations");

    }else if((key1 === keyGreen) && (key2 === keyOrange )){
        let stopPoint = 0 ; 
        stopPoint = orangeSub.slice(greenSub.indexOf(startPoint)+1, orangeSub.indexOf(endPoint) + 1);
        console.log("You Have to stop: "+ stopPoint.length + " Stations");

    }else if( (key1 === keyOrange)  && (key2 === keyRed)){
        let stopPoint = 0 ; 
        stopPoint = redSub.slice(orangeSub.indexOf(startPoint)+1, redSub.indexOf(endPoint)+1);
        console.log("You Have to stop: "+ stopPoint.length + " Stations");

    }else if((key1 === keyOrange) && (key2 === keyGreen )){
        let stopPoint = 0 ; 
        stopPoint = greenSub.slice(orangeSub.indexOf(startPoint)+1, greenSub.indexOf(endPoint)+1);
        console.log("You Have to stop: "+ stopPoint.length + " Stations");
    }
}
/*The main function that take 4 args
then it will check if StartLine matchign with each subway index  
*/
function stopsBetweenStations (StartLine , StartStation, EndLine, EndStation){
if ( keyRed in subway[0] || keyGreen in subway[1] || keyOrange in subway[2] ){
   
    if (StartLine.match(keyRed)){
        if(StartLine === EndLine){
            range (StartLine, EndLine, StartStation ,EndStation);

        }else if(StartLine !== EndLine){
            
            if( (StartLine === keyRed) &&  (EndLine === keyGreen) ){
                removeDuplicate( merge(redSub, greenSub));
                range (StartLine, EndLine, StartStation ,EndStation);

            }else if((StartLine === keyRed) &&  (EndLine === keyOrange)){
                removeDuplicate( merge(redSub, orangeSub));
                range (StartLine, EndLine, StartStation ,EndStation);
            }else{
                return "Sorry there is no line with this name !!" ;
            }  

        }else{
            return "Sorry there is no line with this name !!" ;
        }
        //End Red Line Subway 
    }else if(StartLine === keyGreen){
        if(StartLine === EndLine){
            range (StartLine, EndLine, StartStation ,EndStation);
    
        }else if(StartLine !== EndLine){
            if( (StartLine === keyGreen) &&  (EndLine === keyRed) ){
                removeDuplicate( merge( greenSub, redSub));
                range (StartLine, EndLine, StartStation ,EndStation);
            }else if((StartLine === keyGreen) && (EndLine === keyOrange )){
                removeDuplicate( merge( greenSub, orangeSub));
                range (StartLine, EndLine, StartStation ,EndStation);
            }else{
                return "Sorry there is no line with this name !!"  ;
            }
        }else{
            return "Sorry there is no line with this name !!" ;
        }

    }else if(StartLine === keyOrange){
        if(StartLine === EndLine){
            range (StartLine, EndLine, StartStation ,EndStation);

        }else if(StartLine !== EndLine){
            if( (StartLine === keyOrange) &&  (EndLine === redSub) ){
                removeDuplicate( merge(orangeSub, redSub));
                range (StartLine, EndLine, StartStation ,EndStation);
            }else if( (StartLine === keyOrange) && (EndLine === greenSub) ){
                removeDuplicate( merge(orangeSub, greenSub));
                range (StartLine, EndLine, StartStation ,EndStation);
            }else{
                return "Sorry there is no line with this name !!" ;
            }
        }else{
            return "Sorry there is no line with this name !!" ;
        }
    } //End Orange Line Subway 
}else{
   return "Sorry there is no line with this name !!" ;
}
    
}// end function 






