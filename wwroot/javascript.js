
let saveddata = [{
    "Username": "Shirley",
    "Application": "Snap!",
    "PlayMins": "23",
    "Score": "3",
    "Level": "1",
    "Day": "2022/03/01",
}];
var combinedapps = [];
let itemsstored = 1;

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
        Username: "DepressedWayfarer",
        Application: aname,
        PlayMins: tspent,
        Score: tused,
        Level: "1",
        Day: formatMonth(title),
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
    prepareData();

    breakdownMostApps();
    breakdownMostHours();
    breakdownLongestApp();
    breakdownMostUses();
    breakdownTotalHours();
    breakdownPercentage();
    breakdownTop5();
}

function prepareData() {
    saveddata.length = 0;
    var text = localStorage.getItem("DepressedWayfarers data");
    text = text.split(",");
    for (var i = 0; i < text.length; i++) {
        text[i] = text[i].split('":\"');
        text[i] = text[i][1].replace('\"', "");
        text[i] = text[i].replace('}', "");
        text[i] = text[i].replace(']', "");
        if (text[i] === "Shirley") {
            i = i + 5;
        } else {
            saveddata.push(text[i]);
        }
    }
    for (var i = 0; i < saveddata.length; i = i + 6) {
        var found = false;

        for (var j = 0; j < combinedapps.length; j = j + 3) {
            if (saveddata[i + 1] === combinedapps[j]) {
                combinedapps[j + 1] = parseInt(combinedapps[j + 1]) + parseInt(saveddata[i + 2]);
                combinedapps[j + 2] = parseInt(combinedapps[j + 2]) + parseInt(saveddata[i + 3]);
                found = true;
            }
        }
        if (found === false) {
            combinedapps.push(saveddata[i + 1]);
            combinedapps.push(parseInt(saveddata[i + 2]));
            combinedapps.push(parseInt(saveddata[i + 3]));
        }
    }
    console.log(saveddata);
    console.log(combinedapps);
}

function breakdownMostApps() {
    var days = [];
    for (var i = 5; i < saveddata.length; i = i + 6) {
        days.push(saveddata[i]);
    }
    days = days.sort();

    var day = "";
    var items = 0;
    for (var j = 0; j < days.length; j++) {
        if (days[j] == day) {
            items += 1;
            if (items >= (days.length / 2)) {
                console.log("most apps day is", day);
                var apps = [];
                for (var k = 5; k < saveddata.length; k = k + 6) {
                    if (saveddata[k] === day) {
                        apps.push(saveddata[k - 4]);
                    }
                }
                document.getElementById("MostApps").innerHTML = "The day with the most recorded apps is " + day + " where you used these apps: " + apps + " !";

            }
        } else {
            day = days[j];
            items = 1;
        }
    }


}

function breakdownMostHours(data) {

}

function breakdownLongestApp() {
    var name = "";
    var hours = 0;
    for (var i = 0; i < combinedapps.length; i = i + 3) {
        if (combinedapps[i + 1] > hours) {
            name = combinedapps[i];
            hours = combinedapps[i + 1];
        }
    }
    document.getElementById("LongestApp").innerHTML = "The app you have used the most is " + name + ", with " + hours + " hours!";
}

function breakdownMostUses() {
    var name = "";
    var uses = 0;
    for (var i = 0; i < combinedapps.length; i = i + 3) {
        if (combinedapps[i + 2] > uses) {
            name = combinedapps[i];
            uses = combinedapps[i + 2];
        }
    }
    document.getElementById("MostUses").innerHTML = "The app you have loaded the most times is " + name + ", which you have used " + uses + " times!";
}

function breakdownTotalHours() {
    var total = 0;
    for (var i = 0; i < saveddata.length; i = i + 6) {
        total += parseInt(saveddata[i + 2]);
    }
    document.getElementById("TotalHours").innerHTML = total + " Minutes of total screen time!";
}

function breakdownPercentage() {
    var earliest = saveddata[5];
    var latest = saveddata[5];
    var total = 0;
    for (var i = 5; i < saveddata.length; i = i + 6) {
        if (saveddata[i] < earliest) {
            earliest = saveddata[i];
        } else if (saveddata[i] > latest) {
            latest = saveddata[i];
        }
        total += parseInt(saveddata[i - 3]);
        
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

function breakdownTop5() {
    var one = "";
    var two = "";
    var three = "";
    var four = "";
    var five = "";
    var elements = combinedapps.length / 3;
    if (elements === 1) {
        document.getElementById("Top5").innerHTML = "Your Most used app is: " + combinedapps[0] + ".";
    } else if (elements === 2) {
        var output = Top5TwoElements(1, 4);
        document.getElementById("Top5").innerHTML = "Your 2 Most used apps are " + output[0] + " and " + output[1] + ".";
    } else if (elements === 3) {
        var output = Top5ThreeElements(1,4,7);
        document.getElementById("Top5").innerHTML = "Your 3 Most used apps are: " + output[0] + ", " + output[1] + " and " + output[2] + ".";
    } else if (elements === 4) {
        var output = Top5FourElements(1, 4, 7, 10);
        document.getElementById("Top5").innerHTML = "Your 4 Most used apps are: " + output[0] + ", " + output[1] + ", " + output[2] + " and " + output[3] + ".";
    } else if (elements > 4) {
        var output = Top5FiveElements(1, 4, 7, 10, 13);
        document.getElementById("Top5").innerHTML = "Your 5 Most used apps are: " + output[0] + ", " + output[1] + ", " + output[2] + ", " + output[3] + " and " + output[4] + ".";
    }
}

function Top5TwoElements(a, b) {
    if (combinedapps[a] >= combinedapps[b]) {
        one = combinedapps[a - 1];
        two = combinedapps[b - 1];
    } else {
        one = combinedapps[b - 1];
        two = combinedapps[a - 1];
    }
    return [ one , two ];
}

function Top5ThreeElements(a, b, c) {
    if (combinedapps[a] >= combinedapps[b] && combinedapps[a] >= combinedapps[c]) {
        //a
        var one = combinedapps[a - 1];
        var output = Top5TwoElements(b, c);
    } else if (combinedapps[b] >= combinedapps[a] && combinedapps[b] >= combinedapps[c]) {
        //b
        var one = combinedapps[b - 1];
        var output = Top5TwoElements(a, c);
    } else {
        //c
        var one = combinedapps[c - 1];
        var output = Top5TwoElements(a, b);
    }
    two = output[0];
    three = output[1];
    return [ one, two, three ];
}

function Top5FourElements(a, b, c, d) {
    if (combinedapps[a] >= combinedapps[b] && combinedapps[a] >= combinedapps[c] && combinedapps[a] >= combinedapps[d]) {
        //a
        var one = combinedapps[a - 1];
        var output = Top5ThreeElements(b, c, d);
    } else if (combinedapps[b] >= combinedapps[a] && combinedapps[b] >= combinedapps[c] && combinedapps[b] >= combinedapps[d]) {
        //b
        var one = combinedapps[b - 1];
        var output = Top5ThreeElements(a, c, d);
    } else if (combinedapps[c] >= combinedapps[a] && combinedapps[c] >= combinedapps[b] && combinedapps[c] >= combinedapps[d]) {
        //c
        var one = combinedapps[c - 1];
        var output = Top5ThreeElements(a, b, d);
    } else {
        //d
        var one = combinedapps[d - 1];
        var output = Top5ThreeElements(a, b, c);
    }
    two = output[0];
    three = output[1];
    four = output[2];
    return [ one, two, three, four ];
}

function Top5FiveElements(a, b, c, d, e) {
    if (combinedapps[a] >= combinedapps[b] && combinedapps[a] >= combinedapps[c] && combinedapps[a] >= combinedapps[d] && combinedapps[a] >= combinedapps[e]) {
        //a
        var one = combinedapps[a - 1];
        var output = Top5FourElements(b, c, d, e);
    }
    if (combinedapps[b] >= combinedapps[a] && combinedapps[b] >= combinedapps[c] && combinedapps[b] >= combinedapps[d] && combinedapps[b] >= combinedapps[e]) {
        //b
        var one = combinedapps[b - 1];
        var output = Top5FourElements(a, c, d, e);
    }
    if (combinedapps[c] >= combinedapps[a] && combinedapps[c] >= combinedapps[b] && combinedapps[c] >= combinedapps[d] && combinedapps[c] >= combinedapps[e]) {
        //c
        var one = combinedapps[c - 1];
        var output = Top5FourElements(a, b, d, e);
    }
    if (combinedapps[d] >= combinedapps[a] && combinedapps[d] >= combinedapps[b] && combinedapps[d] >= combinedapps[c] && combinedapps[d] >= combinedapps[e]) {
        //d
        var one = combinedapps[d - 1];
        var output = Top5FourElements(a, b, c, e);
    }
    if (combinedapps[e] >= combinedapps[a] && combinedapps[e] >= combinedapps[b] && combinedapps[e] >= combinedapps[c] && combinedapps[e] >= combinedapps[d]) {
        //e
        var one = combinedapps[e - 1];
        var output = Top5FourElements(combinedapps, a, b, c, d);
    }
    two = output[0];
    three = output[1];
    four = output[2];
    five = output[3];
    return [one, two, three, four, five];
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

