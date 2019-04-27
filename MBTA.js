let red = [{
    name:"South Station",
    order:1
},{
    name:"Park Street",
    order:2
},{
    name:"Kendall",
    order:3
},{
    name:"Central",
    order:4
},{
    name:"Harvard",
    order:5
},{
    name:"Porter",
    order:6
},{
    name:"Davis",
    order:7
},{
    name:"Alewife",
    order:8
}];
//red array
//====================================================================
let orange = [{
    name:"North Station",
    order:1
},{
    name:"Haymarket",
    order:2
},{
    name:"Park Street",
    order:3
},{
    name:"State",
    order:4
},{
    name:"Downtown Crossing",
    order:5
},{
    name:"Chinatown",
    order:6
},{
    name:"Back Bay",
    order:7
},{
    name:"Forest Hills",
    order:8
}];
//orange array
//====================================================================
let green = [{
    name:"Government Center",
    order:1
},{
    name:"Park Street",
    order:2
},{
    name:"Boylston",
    order:3
},{
    name:"Arlington",
    order:4
},{
    name:"Copley",
    order:5
},{
    name:"Hynes",
    order:6
},{
    name:"Kenmore",
    order:7
}];
//green array
//====================================================================
const stopsBetweenStations=function(colorStart,start,colorEnd,end){
    //============================================
    let startOrder;
    let endOrder;
    let stops=-1;
    let stations=[];
    //============================================
    //============================================
    if(colorStart.toLowerCase()==="red"){
        for(i=0;i<red.length;i++){
            if(start.toLowerCase()===red[i].name.toLowerCase()){
            startOrder=red[i].order;
            break;
            }
        }
    }
    if(colorEnd.toLowerCase()==='red'){
        for(i=0;i<red.length;i++){
            if(end.toLowerCase()===red[i].name.toLowerCase()){
                endOrder=red[i].order;
                break;
            }
        }
    }
    if(colorStart.toLowerCase()==="green"){
        for(i=0;i<green.length;i++){
            if(start.toLowerCase()===green[i].name.toLowerCase()){
            startOrder=green[i].order;
            break;
            }
        }
    }
    if(colorEnd.toLowerCase()==='green'){
        for(i=0;i<green.length;i++){
            if(end.toLowerCase()===green[i].name.toLowerCase()){
                endOrder=green[i].order;
                break;
            }
        }
    }
    if(colorStart.toLowerCase()==="orange"){
        for(i=0;i<orange.length;i++){
            if(start.toLowerCase()===orange[i].name.toLowerCase()){
            startOrder=orange[i].order;
            break;
            }
        }
    }
    if(colorEnd.toLowerCase()==='orange'){
        for(i=0;i<orange.length;i++){
            if(end.toLowerCase()===orange[i].name.toLowerCase()){
                endOrder=orange[i].order;
                break;
            }
        }
    }
    //============================================
    //============================================
    if((colorStart.toLowerCase()==='red')&&(colorEnd.toLowerCase()==='red')){
        if(startOrder<endOrder){
            for(i=startOrder-1;i<=endOrder;i++){
                stations.push(red[i].name);
                if(stops===0){
                    console.log('Rider boards the train a Red Line and '+red[startOrder-1].name);
                }
                else if(stops>0){
                    console.log('Rider arrives at Red Line and '+red[startOrder-1].name);
                }
                stops++;
            }
        }
        else if(startOrder>endOrder){
            for(i=startOrder-1;i>=endOrder;i--){
                stations.push(red[i].name);
                if(stops===0){
                console.log('Rider boards the train a Red Line and '+red[startOrder-1].name);
            }
            else if(stops>0){
                console.log('Rider arrives at Red Line and '+red[startOrder-1].name);
            }
                stops++;
            }
        }
        console.log('Rider exits the train at Red Line and '+red[endOrder-1].name);
        console.log(stops+' stops');
    }
    //============================================
    //============================================
    if((colorStart.toLowerCase()==='green')&&(colorEnd.toLowerCase()==='green')){
        if(startOrder<endOrder){
            for(startOrder;startOrder<=endOrder;startOrder++){
                stations.push(green[startOrder-1].name);
                stops++;
            }
        }
        else if(startOrder>endOrder){
            for(startOrder;startOrder>=endOrder;startOrder--){
                stations.push(green[startOrder-1].name);
                if(stops===0){
                console.log('Rider boards the train a Green Line and '+green[startOrder-1].name);
            }
            else if(stops>0){
                console.log('Rider arrives at Green Line and '+green[startOrder-1].name);
            }
                stops++;
            }
        }
        console.log('Rider exits the train at Green Line and '+green[endOrder].name);
        console.log(stops+' stops');
    }
    //============================================
    //============================================
    if((colorStart.toLowerCase()==='orange')&&(colorEnd.toLowerCase()==='orange')){
        if(startOrder<endOrder){
            for(startOrder;startOrder<=endOrder;startOrder++){
                stations.push(orange[startOrder-1].name);
                stops++;
            }
        }
        else if(startOrder>endOrder){
            for(startOrder;startOrder>=endOrder;startOrder--){
                stations.push(orange[startOrder-1].name);
                if(stops===0){
                console.log('Rider boards the train a Orange Line and '+orange[startOrder-1].name);
            }
            else if(stops>0){
                console.log('Rider arrives at Orange Line and '+orange[startOrder-1].name);
            }
                stops++;
            }
        }
        console.log('Rider exits the train at Orange Line and '+orange[endOrder].name);
        console.log(stops+' stops');
    }
    //============================================
    //============================================
    
}