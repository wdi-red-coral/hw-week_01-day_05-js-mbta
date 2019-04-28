let lines=[[{
    name:'South Station',
    order:0,
    startStation:'Rider boards the train a Red Line and South Station.',
    pauseStation:'Rider arrives at Red Line and South Station.',
    fullStopStation:'Rider exits the train at Red Line and South Station.'
},
{
    name:'Park Street',
    order:1,
    startStation:'Rider boards the train a Red Line and Park Street.',
    pauseStation:'Rider arrives at Red Line and Park Street.',
    fullStopStation:'Rider exits the train at Red Line and Park Street.',
    transfare:'Rider transfers from Line to Red at Park Street.'
},
{
    name:'Kendall',
    order:2,
    startStation:'Rider boards the train a Red Line and Kendall.',
    pauseStation:'Rider arrives at Red Line and Kendall.',
    fullStopStation:'Rider exits the train at Red Line and Kendall.'
},
{
    name:'Central',
    order:3,
    startStation:'Rider boards the train a Red Line and Central.',
    pauseStation:'Rider arrives at Red Line and Central.',
    fullStopStation:'Rider exits the train at Red Line and Central.'
},
{
    name:'Harvard',
    order:4,
    startStation:'Rider boards the train a Red Line and Harvard.',
    pauseStation:'Rider arrives at Red Line and Harvard.',
    fullStopStation:'Rider exits the train at Red Line and Harvard.'
},
{
    name:'Porter',
    order:5,
    startStation:'Rider boards the train a Red Line and Porter.',
    pauseStation:'Rider arrives at Red Line and Porter.',
    fullStopStation:'Rider exits the train at Red Line and Porter.'
},
{
    name:'Davis',
    order:6,
    startStation:'Rider boards the train a Red Line and Davis.',
    pauseStation:'Rider arrives at Red Line and Davis.',
    fullStopStation:'Rider exits the train at Red Line and Davis.'
},
{
    name:'Alewife',
    order:7,
    startStation:'Rider boards the train a Red Line and Alewife.',
    pauseStation:'Rider arrives at Red Line and Alewife.',
    fullStopStation:'Rider exits the train at Red Line and Alewife.'
}],
//red array


//====================================================================
[{
    name:'North Station',
    order:0,
    startStation:'Rider boards the train a Orange Line and North Station.',
    pauseStation:'Rider arrives at Orange Line and North Station.',
    fullStopStation:'Rider exits the train at Orange Line and North Station.'
},
{
    name:'Haymarket',
    order:1,
    startStation:'Rider boards the train a Orange Line and Haymarket.',
    pauseStation:'Rider arrives at Orange Line and Haymarket.',
    fullStopStation:'Rider exits the train at Orange Line and Haymarket.'
},
{
    name:'Park Street',
    order:2,
    startStation:'Rider boards the train a Orange Line and Park Street.',
    pauseStation:'Rider arrives at Orange Line and Park Street.',
    fullStopStation:'Rider exits the train at Orange Line and Park Street.',
    transfare:'Rider transfers from Line to Orange at Park Street.'
},
{
    name:'State',
    order:3,
    startStation:'Rider boards the train a Orange Line and State.',
    pauseStation:'Rider arrives at Orange Line and State.',
    fullStopStation:'Rider exits the train at Orange Line and State.'
},
{
    name:'Downtown Crossing',
    order:4,
    startStation:'Rider boards the train a Orange Line and Downtown Crossing.',
    pauseStation:'Rider arrives at Orange Line and Downtown Crossing.',
    fullStopStation:'Rider exits the train at Orange Line and Downtown Crossing.'
},
{
    name:'Chinatown',
    order:5,
    startStation:'Rider boards the train a Orange Line and Chinatown.',
    pauseStation:'Rider arrives at Orange Line and Chinatown.',
    fullStopStation:'Rider exits the train at Orange Line and Chinatown.'
},
{
    name:'Back Bay',
    order:6,
    startStation:'Rider boards the train a Orange Line and Back Bay.',
    pauseStation:'Rider arrives at Orange Line and Back Bay.',
    fullStopStation:'Rider exits the train at Orange Line and Back Bay.'
},
{
    name:'Forest Hills',
    order:7,
    startStation:'Rider boards the train a Orange Line and Forest Hills.',
    pauseStation:'Rider arrives at Orange Line and Forest Hills.',
    fullStopStation:'Rider exits the train at Orange Line and Forest Hills.'
}],
//orange array


//====================================================================
[{
    name:'Government Center',
    order:0,
    startStation:'Rider boards the train a Green Line and Government Center.',
    pauseStation:'Rider arrives at Green Line and Government Center.',
    fullStopStation:'Rider exits the train at Green Line and Government Center.'
},
{
    name:'Park Street',
    order:1,
    startStation:'Rider boards the train a Green Line and Park Street.',
    pauseStation:'Rider arrives at Green Line and Park Street.',
    fullStopStation:'Rider exits the train at Green Line and Park Street.',
    transfare:'Rider transfers from Line to Green at Park Street.',
},
{
    name:'Boylston',
    order:2,
    startStation:'Rider boards the train a Green Line and Boylston.',
    pauseStation:'Rider arrives at Green Line and Boylston.',
    fullStopStation:'Rider exits the train at Green Line and Boylston.'
},
{
    name:'Arlington',
    order:3,
    startStation:'Rider boards the train a Green Line and Arlington.',
    pauseStation:'Rider arrives at Green Line and Arlington.',
    fullStopStation:'Rider exits the train at Green Line and Arlington.'
},
{
    name:'Copley',
    order:4,
    startStation:'Rider boards the train a Green Line and Copley.',
    pauseStation:'Rider arrives at Green Line and Copley.',
    fullStopStation:'Rider exits the train at Green Line and Copley.'
},
{
    name:'Hynes',
    order:5,
    startStation:'Rider boards the train a Green Line and Hynes.',
    pauseStation:'Rider arrives at Green Line and Hynes.',
    fullStopStation:'Rider exits the train at Green Line and Hynes.'
},
{
    name:'Kenmore',
    order:6,
    startStation:'Rider boards the train a Green Line and Kenmore.',
    pauseStation:'Rider arrives at Green Line and Kenmore.',
    fullStopStation:'Rider exits the train at Green Line and Kenmore.'
}]];
//green array

//====================================================================
const stopsBetweenStations=function(colorStart,start,colorEnd,end){
    
    let startOrder;
    let endOrder;
    let startLine;
    let endLine;
    let stops=0;
    let sPSS;
    let sPSE

    //============================================
    if(colorStart.toLowerCase()==='red'){
        startLine=0;
        sPSS=lines[startLine][1].order;
        for(i=0;i<lines[startLine].length;i++){
            if(start.toLowerCase()===lines[startLine][i].name.toLowerCase()){
                startOrder=lines[startLine][i].order;
                break;
            }
        }
    }
    else if(colorStart.toLowerCase()==='green'){
        startLine=2;
        sPSS=lines[startLine][1].order;
        for(i=0;i<lines[startLine].length;i++){
            if(start.toLowerCase()===lines[2][i].name.toLowerCase()){
                startOrder=lines[2][i].order;
                break;
            }
        }
    }
    else if(colorStart.toLowerCase()==='orange'){
        startLine=1;
        sPSS=lines[startLine][1].order;
        for(i=0;i<lines[startLine].length;i++){
            if(start.toLowerCase()===lines[startLine][i].name.toLowerCase()){
                startOrder=lines[startLine][i].order;
                break;
            }
        }
    }
    if(colorEnd.toLowerCase()==='red'){
        endLine=0;
        sPSE=lines[startLine][1].order;
        for(i=0;i<lines[endLine].length;i++){
            if(end.toLowerCase()===lines[endLine][i].name.toLowerCase()){
                endOrder=lines[endLine][i].order;
                break;
            }
        }
    }
    
    else if(colorEnd.toLowerCase()==='green'){
        endLine=2;
        sPSE=lines[startLine][1].order;
        for(i=0;i<lines[endLine].length;i++){
            if(end.toLowerCase()===lines[endLine][i].name.toLowerCase()){
                endOrder=lines[endLine][i].order;
                break;
            }
        }
    }
    
    else if(colorEnd.toLowerCase()==='orange'){
        endLine=1;
        sPSE=lines[startLine][1].order;
        for(i=0;i<lines[endLine].length;i++){
            if(end.toLowerCase()===lines[endLine][i].name.toLowerCase()){
                endOrder=lines[endLine][i].order;
                break;
            }
        }
    }
    //============================================

    //============================================
    if(colorStart.toLowerCase()===colorEnd.toLowerCase()){
        if(startOrder<endOrder){
            for(startOrder;startOrder<=endOrder;startOrder++){
                if(stops===0){
                    console.log(lines[startLine][startOrder].startStation);
                }
                else if(stops>0){
                    console.log(lines[startLine][startOrder].pauseStation);
                }
                stops++;
            }
        }
        else if(startOrder>endOrder){
            for(startOrder ;startOrder>= endOrder;startOrder--){
                if(stops===0){
                console.log(lines[startLine][startOrder].startStation);
                }
                else if(stops>0){
                    console.log(lines[startLine][startOrder].pauseStation);
                }
                stops++;
            }
        }
        console.log(lines[startLine][endOrder].fullStopStation);
        console.log(stops-1+' stops');
    }
    //============================================

    //============================================
    else {
        if(startOrder<sPSS){
            for(startOrder;startOrder<=lines[startLine][sPSS].order;startOrder++){
                if(stops===0){
                    console.log(lines[startLine][startOrder].startStation);
                }
                else if(stops>0){
                    console.log(lines[startLine][startOrder].pauseStation);
                }
                stops++;
            }
            let a =stops;
            if(sPSE<endOrder){
                for(sPSE;sPSE<=endOrder;sPSE++){
                    if(stops===a){
                        console.log(lines[startLine][sPSE].transfare);
                    }
                    else if(stops>0){
                        console.log(lines[startLine][sPSE].pauseStation);
                    }
                    stops++;
                }
            }
            else if(sPSE>endOrder){
                for(sPSE;sPSE>=endOrder;sPSE--){
                    if(stops===a){
                        console.log(lines[startLine][sPSE].transfare);
                    }
                    else if(stops>0){
                        console.log(lines[startLine][sPSE].pauseStation);
                    }
                    stops++;
                }
            }
        }
        else if(startOrder>sPSS){
            for(startOrder;startOrder>=lines[startLine][sPSS].order;startOrder--){
                if(stops===0){
                    console.log(lines[startLine][startOrder].startStation);
                }
                else if(stops>0){
                    console.log(lines[startLine][startOrder].pauseStation);
                }
                stops++;
            }
            let a =stops;
            if(sPSE<endOrder){
                for(sPSE;sPSE<=endOrder;sPSE++){
                    if(stops===a){
                        console.log(lines[startLine][sPSE].transfare);
                    }
                    else if(stops>0){
                        console.log(lines[startLine][sPSE].pauseStation);
                    }
                    stops++;
                }
            }
            else if(sPSE>endOrder){
                for(sPSE;sPSE>=endOrder;sPSE--){
                    if(stops===a){
                        console.log(lines[startLine][sPSE].transfare);
                    }
                    else if(stops>0){
                        console.log(lines[startLine][sPSE].pauseStation);
                    }
                    stops++;
                }
            }
        }
        console.log(lines[startLine][endOrder].fullStopStation);
        console.log(stops-1+' stops');
    }
}