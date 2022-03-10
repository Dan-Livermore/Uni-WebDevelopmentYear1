let saveddata = [];
let itemsstored = 0;

function hideStates() {
    // This function hides the other states so when the application is first loaded, only the account state is shown.
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("DataState").style.display="none";
    //selectMonth();
}

function loadDay(ID){
    // Loads the data entry section and adds the day to the form.
    document.getElementById("DataState").style.display="block";
    var title = document.getElementById(ID).innerHTML + " " + document.getElementsByClassName("CalendarYearTitle")[0].innerHTML;
    document.getElementById("title").innerHTML = title;
    currentid = ID;
}

    
function storeData(title, aname, tspent, tused) {
    // Formats the data into JSON
    let entry = {
        User: "DepressedWayfarer",
        Day: formatMonth(title),
        AppName: aname,
        TimeSpent: tspent,
        TimesUsed: tused,
    }
    // Adds the new array to the other stored data
    saveddata.push(entry);
    itemsstored += 1;

    // Clears form to show data is stored
    document.forms[1].reset();
    alert("Saved");

    // Commits the changes to storage.
    localStorage.setItem('DepressedWayfarers data', JSON.stringify(saveddata));

}

function formatMonth(title) {
    var split = title.split(" ");

    if (split[1] === "January") {
        title = split[2] + "/01/";
    } else if (split[1] === "February") {
        title = split[2] + "/02/";
    } else if (split[1] === "March") {
        title = split[2] + "/03/";
    } else if (split[1] === "April") {
        title = split[2] + "/04/";
    } else if (split[1] === "May") {
        title = split[2] + "/05/";
    } else if (split[1] === "June") {
        title = split[2] + "/06/";
    } else if (split[1] === "July") {
        title = split[2] + "/07/";
    } else if (split[1] === "August") {
        title = split[2] + "/08/";
    } else if (split[1] === "September") {
        title = split[2] + "/09/";
    } else if (split[1] === "October") {
        title = split[2] + "/10/";
    } else if (split[1] === "November") {
        title = split[2] + "/11/";
    } else {
        title = split[2] + "/12/";
    }
    if (split[0] < 10) {
        split[0] = "0" + split[0];
    }
    title += split[0];
    return title;
}




function fillData() {
    // Takes the first json array from local storage and splits the data up into each item.
    var text = localStorage.getItem("DepressedWayfarers data");
    text = text.split(",");
    var data = [];

    for (var i = 1; i < text.length; i = i + 5) {
        text[i] = text[i].split('":\"');
        text[i] = text[i][1].toString().slice(0, -1);
        data.push(text[i]);
        text[i+1] = text[i+1].split('":\"');
        text[i+1] = text[i+1][1].toString().slice(0, -1);
        data.push(text[i+1]);
        text[i+2] = text[i+2].split('":\"');
        text[i+2] = text[i+2][1].toString().slice(0, -1);
        data.push(text[i+2]);
        text[i+3] = text[i+3].split('":\"');
        if ((text.length-1) === i+3) {
            text[i+3] = text[i+3][1].toString().slice(0, -3);
        } else {
            text[i+3] = text[i+3][1].toString().slice(0, -2);
        }
        data.push(text[i+3]);
    }
    console.log(data);
    breakdownMostApps(data);
    breakdownMostHours(data);
    breakdownLongestApp(data);
    breakdownMostUses(data);
    breakdownTotalHours(data);
    breakdownPercentage(data);
    breakdownTop5(data);
}

function breakdownMostApps(data) {

}

function breakdownMostHours(data) {

}

function breakdownLongestApp(data) {
   
}

function breakdownMostUses(data) {
}

function breakdownTotalHours(data) {
    var total = 0;
    for (var i = 0; i < data.length; i = i + 4) {
        total += parseInt(data[i + 2]);
    }
    document.getElementById("TotalHours").innerHTML = total + " Minutes of total screen time!";
}

function breakdownPercentage(data) {
    var earliest = data[0];
    var latest = data[0];
    var total = 0;
    for (var i = 0; i < data.length; i = i + 4) {
        if (data[i] < earliest) {
            earliest = data[i];
        } else if (data[i] > latest) {
            latest = data[i];
        }
        total += parseInt(data[i + 2]);
    }
    var daysrecorded = 0;
    earliest = earliest.split("/");
    latest = latest.split("/");
    earliest[0] = parseInt(earliest[0]);
    earliest[1] = parseInt(earliest[1]);
    earliest[2] = parseInt(earliest[2]);
    latest[0] = parseInt(latest[0]);
    latest[1] = parseInt(latest[1]);
    latest[2] = parseInt(latest[2]);
    var found = false
    while (found != true) {
        if (earliest[1] === latest[1]) {
            daysrecorded += latest[2];
            found = true;
        }
        else if (earliest[1] === 02) {
            daysrecorded += 28 - earliest[2];
            earliest[1] = 03;
            earliest[2] = 00;
        } else if (earliest[1] === 04 || earliest[1] === 06 || earliest[1] === 09 || earliest[1] === 11) {
            daysrecorded += 30 - earliest[2];
            earliest[1] = earliest[1] + 1;
            earliest[2] = 00;
        } else {
            daysrecorded += 31 - earliest[2];
            earliest[1] = earliest[1] + 1;
            earliest[2] = 00;
        }
    }
    daysrecorded *= 24 * 60;
    var percentage = Math.round((total / daysrecorded * 100));
    document.getElementById("PercentOfLife").innerHTML = "You have spent " + percentage + "% of your life using apps!";
}

function breakdownTop5(data) {
    var one = "";
    var two = "";
    var three = "";
    var four = "";
    var five = "";

    var elements = data.length / 4;
    var combinedapps = [];

    for (var i = 0; i < data.length; i = i + 4) {
        var found = false;
        for (var j = 0; j < combinedapps.length; j = j + 2) {
            //if name already there, add to it. else add name and hours
            if (data[i + 1] === combinedapps[j]) {
                console.log("meow");
                combinedapps[j + 1] = parseInt(combinedapps[j+1]) + parseInt(data[i + 2]);
                found = true;
            }
        }
        if (found === false) {
            combinedapps.push(data[i + 1]);
            combinedapps.push(parseInt(data[i + 2]));
        }
        
    }
    console.log(combinedapps);


    if (elements === 1) {
        document.getElementById("Top5").innerHTML = "Your Most used app is: " + one + ".";
    } else if (elements === 2) {
        document.getElementById("Top5").innerHTML = "Your 2 Most used apps are " + one + "," + two + ".";
    } else if (elements === 3) {
        document.getElementById("Top5").innerHTML = "Your 3 Most used apps are: " + one + "," + two + "," + three + ".";
    } else if (elements === 4) {
        document.getElementById("Top5").innerHTML = "Your 4 Most used apps are: " + one + "," + two + "," + three + "," + four + ".";
    } else if (elements > 4) {
        document.getElementById("Top5").innerHTML = "Your 5 Most used apps are: " + one + "," + two + "," + three + "," + four + "," + five + ".";
    }
}

function changeState(currentID) {
    // This hides all other states but the one that is currently loaded and if it is on the breakdown state
    if (currentID === "Account"){
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("AccountState").style.display="block";
    document.getElementById("DataState").style.display="none";
    } else if (currentID === "Calendar"){
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="block";
    document.getElementById("AccountState").style.display="none";
    document.getElementById("DataState").style.display = "none";
     // Loads the current month on the calendar
    selectMonth();
    } else{
    document.getElementById("BreakdownState").style.display="block";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("AccountState").style.display="none";
    document.getElementById("DataState").style.display="none";
    // Enters the saved data onto the breakdown page. MUST CHANGE
    fillData();
}
}

