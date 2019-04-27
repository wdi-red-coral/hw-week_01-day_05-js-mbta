const lineOfStation={
    red:["South Station",
        "Park Street"," Kendall","Central","Harvard" ,"Porter","Davis","Alewife"],
    
    green:["Government ","Center","Park Street","Boylston","Arlington", 
                "Copley","Hynes", "Kenmore"],
    
    orange:["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"],

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////





const  stopsBetweenStations= function(startLine,startStation,endLine,endStation){
      

    if (startLine === endLine){
    var start= lineOfStation[startLine].indexOf(startStation);
    var   end = lineOfStation[endLine].indexOf(endStation);

    if(start < end ){
        var total= end -start
}	else {
        total = start -end ;
}
    console.log(total);
}else {
     let interSection= lineOfStation[startLine].indexOf("Park Street")
   let  start= lineOfStation[startLine].indexOf(startStation);
    let  end = lineOfStation[endLine].indexOf(endStation);
    let total1= interSection-start;
    let total2 = end -interSection;
     
    
    if (total1<total2){
    var totalOfAll=	total1-total2;
    }else{
    totalOfAll=	total2-total1;	
    }
    
     console.log(Math.abs(totalOfAll-1));

}}
/////////////////////

