
const mbta = {
    Red :
        ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
    'Porter', 'Davis', 'Alewife'],

    Green :
        ['Government Station' , 'Park Street' , 'Boylston' , 'Arlington' , 'Copley',
            'Hynes' , 'Kenmore'],

    Orange :
        ['North Station' , 'Haymarket' , 'Park Street' , 'State' , 'Downtown Crossing' ,
            'Chinatown' , 'Back Bay' , 'Forest Hills']
};

const validateInput = function (fromLine , fromStop , toLine , toStop) {
    let line = '';
    let stop1 = '';
    let stop2 = '';

    if (fromLine === 'Red' || fromLine === 'Green' || fromLine === 'Orange') {

        if (toLine === 'Red' || toLine === 'Green' || toLine === 'Orange') {
            line = true;
            for (let i = 0; i < mbta[fromLine].length; i++) {
                if (mbta[fromLine][i] === fromStop) {
                    stop1=true;
                }
            }
            for (let j = 0; j < mbta[toLine].length; j++) {

                if (mbta[toLine][j] === toStop) {
                    stop2=true;
                }
            }
        } else {
            console.log('///////// -- INVALID INPUT -- ////////////');
            console.log(' "To" Invalid Line');
            console.log('Make Sure To Use "Capital Title" Style');
        }
    } else {
        console.log('///////// -- INVALID INPUT -- ////////////');
        console.log('"From" Invalid Line');
        console.log('Make Sure To Use "Capital Title" Style');

    }

    if (line === true && stop1 === true && stop2 === true ) {
        console.log('////////////// -- VALID INPUT -- ///////////////');
        console.log('Your data will be processed');


        //--------------
        //If data validation passed, travel() will be invoked
        travel(fromLine , fromStop , toLine , toStop);
        //--------------


    }
    else if (line === true && stop1 !== true && stop2 === true) {
        console.log('///////// -- INVALID INPUT -- ////////////');
        console.log('"'+ fromStop + '" does not exist on the "' + fromLine + '" line');
        console.log('Make Sure To Use "Capital Title" Style');
    }
    else if (line === true && stop1 === true && stop2 !== true) {
        console.log('///////// -- INVALID INPUT -- ////////////');
        console.log('"'+ toStop + '" does not exist on the "' + toLine + '" line');
        console.log('Make Sure To Use "Capital Title" Style');
    }

};

const stopsCounter = function (line , startStop , toStop) {
    let stops = (mbta[line].indexOf(startStop)) - (mbta[line].indexOf(toStop));
    if (stops<0) {
        return stops*-1;
    }
    else {
        return stops;
    }
};

const stopsSameLine = function (from , to , line) {

    if (mbta[line].indexOf(from) > mbta[line].indexOf(to)) {
        for (let i = mbta[line].indexOf(from); i >= mbta[line].indexOf(to); i--) {
            if (mbta[line].indexOf(to) === (i)) {
                console.log('You arrived at (' + mbta[line][i] + ') ');
                break;
            }
            else {
                console.log('Depart from (' + mbta[line][i] + ') Your next stop (' + mbta[line][i - 1] + ')');
            }
        }
    } else if (mbta[line].indexOf(from) < mbta[line].indexOf(to)) {
        for (let j = mbta[line].indexOf(from); j <= mbta[line].indexOf(to); j++) {
            if (mbta[line].indexOf(to) === (j)) {
                console.log('You arrived at ' + mbta[line][j]);
            } else {
                console.log('Depart from (' + mbta[line][j] + ') Your next stop (' + mbta[line][j + 1] + ')');
            }
        }
    }
};


const stopsDifferentLine = function (fromLine , fromStop , toLine , toStop) {

    if (mbta[fromLine].indexOf(fromStop) > mbta[fromLine].indexOf(toStop)) {
        for (let i = mbta[fromLine].indexOf(fromStop); i >= mbta[fromLine].indexOf(toStop); i--) {
            if (mbta[fromLine][i] !== ('Park Street')) {
                console.log('Depart from (' + mbta[fromLine][i]
                    + ') Your next stop (' + mbta[fromLine][i - 1] + ')');
            }
            else {
                console.log('You arrived at (Park Street), You can transfer to (' + toLine + ') line to get to ('
                    + toStop + ')');
                stopsSameLine('Park Street' , toStop , toLine);
                break;
            }
        }
    }
    else if (mbta[fromLine].indexOf(fromStop) < mbta[fromLine].indexOf(toStop)) {
        for (let j = mbta[fromLine].indexOf(fromStop); j <= mbta[fromLine].indexOf(toStop); j++) {
            if (mbta[fromLine][j] === 'Park Street') {
                console.log('You arrived at (Park Street), You can transfer to (' + toLine + ') line');

            }
            else {
                console.log('Depart from (' + mbta[fromLine][j]
                    + ') Your next stop (' + mbta[fromLine][j + 1] + ')');
                stopsSameLine('Park Street' , toStop , toLine);
                break;
            }
        }
    }
};
const travel = function (fromLine , fromStop , toLine , toStop) {

    let stops = 0;

        if (fromStop === toStop) {
            console.log('You are at the same station');
        }
        else if (fromLine === toLine) {
            stops = stopsCounter(fromLine , fromStop , toStop);
            if (mbta[fromLine][fromStop] === toStop) {
               stopsSameLine(fromStop , toStop , fromLine);
                console.log(' Your trip had |' + stops+ '| stops in total');
            }
        }

        else if (fromLine !== toLine && fromStop !== toStop) {
            stopsDifferentLine(fromLine , fromStop , toLine , toStop);
            stops = stopsCounter(fromLine , fromStop , 'Park Street');
                stops = stops + stopsCounter(toLine ,'Park Street' , toStop);
                console.log(' Your trip had |' + stops+ '| stops in total');
            }

};
/* By invoking validateInput() you will automatically invoke travel(), stopsCounter() and stopsDifferentLine() function

    + BONUS PART
    
This Program will validate user input and return easy-to-understand replies in case of failures

The program will also calculate stops during the whole journey with showing a stop-by-stop directions

*/
validateInput('Orange' , 'Chinatown' , 'Green' , 'Boylston');
