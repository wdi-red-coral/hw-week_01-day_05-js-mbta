const stopsBetweenStations = function (startingLine, startingStation, endingLine, endingStation) {

    const mbta = [

        {
            line: "Red",
            station: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],

        },
        {
            line: "Green",
            station: ["Government Cente", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]
        },
        {
            line: "Orange",
            station: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
        }
    ];
    let textEntries = true;
    const checkLineEntries = function (startingLine, startingStation, endingLine, endingStation) {
        for (let i = 0; i < mbta.length; i++) {
            if (mbta[i].line !== startingLine || mbta[i].line !== endingLine )
                textEntries = false;

        }
        for (let key in mbta) {
            for (let j = 0; j < mbta[i].station; i++) {
                if (mbta[i].station[j] !== startingStation || mbta[i].station[j] !== endingStation)
                    textEntries = false;
            }
        }
    }

    if (!textEntries) {
        console.log(" Please ensure you pick the correct line and Station Combo!")
    }
    else {
        let firstStation, lastStation, lineindex, totalDistance, startLineIndex, endLineIndex, lastStop, firstInter, secondInter;
        const dispalyDistance = function (line, start, finish) {
            for (let i = 0; i < mbta.length; i++) {
                if (mbta[i].line == line) {

                    for (let j = 0; j < mbta[i].station.length; j++) {
                        if (mbta[i].station[j] == start) firstStation = j;
                        if (mbta[i].station[j] == finish) lastStation = j;
                    }
                    return Math.abs(firstStation - lastStation);
                }
            }
        }

        if (startingLine != endingLine)

            totalDistance = dispalyDistance(startingLine, startingStation, 'Park Street') + dispalyDistance(endingLine, endingStation, 'Park Street');

        else totalDistance = dispalyDistance(startingLine, startingStation, endingStation);

        //if (totalDistance < 0)
        //console.log("Your Intput is not valid !");
        //else
        console.log("The distance from " + startingStation + " to " + endingStation + " includes " + totalDistance + " stops" + "\n\n");


        ///////////////////////Bonus Part

        const returnStation = function (lineindex, stationvalue) {
            for (let j = 0; j < mbta[lineindex].station.length; j++) {
                if (mbta[lineindex].station[j] == stationvalue) return j;
            }

        }
        const returnLineIndex = function (line) {
            for (let i = 0; i < mbta.length; i++) {
                if (mbta[i].line == line)
                    return i;
            }
        }

        const dispalySteps = function (startingLine, startingStation, endingLine, endingStation) {

            startLineIndex = returnLineIndex(startingLine);
            endLineIndex = returnLineIndex(endingLine);
            lastStop = returnStation(endLineIndex, endingStation);
            firstInter = returnStation(startLineIndex, 'Park Street');
            secondInter = returnStation(endLineIndex, 'Park Street');

            if (startingLine != endingLine) {
                for (let i = 0; i <= firstInter; i++) {
                    if (i == 0 && mbta[startLineIndex].station[i] !=endingStation ) console.log("Rider boards the train a " + startingLine + " Line and " + mbta[startLineIndex].station[i]);
                    //else if (i == firstInter) console.log(" start intersection  " +startingLine+" and "+ mbta[startLineIndex].station[i]);
                    else console.log("Rider arrives at " + startingLine + " Line and " + mbta[startLineIndex].station[i]);
                }
                for (let i = secondInter; i <= lastStop; i++) {
                    if (i == secondInter) console.log("Rider transfers from " + startingLine + " Line to " + endingLine + " Line at " + mbta[endLineIndex].station[i]);
                    else console.log("Rider arrives at " + endingLine + " Line and " + mbta[endLineIndex].station[i]);
                    if (i == lastStop) console.log("Rider exits the train at " + endingLine + " Line and " + mbta[endLineIndex].station[i]);

                }
            }
            else {
                endLineIndex = returnLineIndex(endingLine);
                lastStop = returnStation(endLineIndex, endingStation);
                firstInter = returnStation(startLineIndex, startingStation);
                if (lastStop == firstInter) console.log("You are still at the Same Station!!!");
                else {
                    for (let j = 0; j <= mbta[endLineIndex].station.length; j++) {
                        if (j == 0 && mbta[endLineIndex].station[j]!=endingStation) console.log("Rider boards the train a " + endingLine + " Line and " + mbta[endLineIndex].station[j]);
                        else if (j == lastStop) console.log("Rider exits the train at " + endingLine + " Line and " + mbta[endLineIndex].station[j]);
                        else console.log("Rider arrives at " + endingLine + " Line and " + mbta[endLineIndex].station[j]);
                    }
                }
            }
        }
        dispalySteps(startingLine, startingStation, endingLine, endingStation);
    }

}
