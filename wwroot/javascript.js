// global variables initalized
// Shows the required form the JSON array is meant to be
var storeddata = [{
    "Username": "Shirley",
    "Application": "Snap!",
    "PlayMins": "23",
    "Score": "3",
    "Level": "1",
    "Day": "2022/03/01",
}];
// These will be used to prepare the data stored in local storage
var saveddata = [];
var combinedapps = [];
var days = [];
var user = "User";
// Used in the breakdown section
var interval;
var latest;
var newdate;

/// Gets username from the log in to find the user's data in local storage.
function SetUser(username) {
    user = username;
    document.forms[0].reset();
}

/// This function hides the other states so when the application is first loaded, only the account state is shown.
function HideStates() {
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("DataState").style.display="none";
}

/// Loads the data entry section and adds the day to the form.
function LoadDay(ID){
    document.getElementById("DataState").style.display="block";
    var title = document.getElementById(ID).innerHTML + " " + document.getElementsByClassName("CalendarYearTitle")[0].innerHTML;
    document.getElementById("title").innerHTML = title;
    currentid = ID;
}

///Formats the data to be stored into local storage.
function StoreData(title, aname, tspent, tused) {
    // Formats the data into JSON
    let entry = {
        Username: user,
        Application: aname,
        PlayMins: tspent,
        Score: tused,
        Level: "1",
        Day: FormatMonth(title),
    }
    // Adds the new array to the other stored data
    storeddata.push(entry);
    // Clears form to show data is stored
    document.forms[1].reset();
    alert("Saved");

    // Commits the changes to storage.
    localStorage.setItem('DepressedWayfarers data', JSON.stringify(storeddata));



}

/// This sets the inital month shown as the title on the calendar and prepares the ID.
function FormatMonth(title) {
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



/// Uses the data from the local storage, performs algorithms on it and displays it to the breakdown page.
function FillData() {
    // Takes the first json array from local storage and splits the data up into each item.
    PrepareData();

    //Performs the algorithms to create the time review.
    BreakdownMostApps();
    BreakdownMostHours();
    BreakdownLongestApp();
    BreakdownMostUses();
    BreakdownTotalHours();
    BreakdownPercentage();
    BreakdownTop5();

    // Shows the user what the next day without any data on it is.
    NewAlert();
}

/// Takes the data from the local storage and organises it so it can be used later.
function PrepareData() {
    saveddata = []
    var text = localStorage.getItem("DepressedWayfarers data");
    storeddata = text;
    text = text.split(",");
    // Separates the JSON arrays
    for (var i = 0; i < text.length; i = i + 6) {
        text[i] = text[i].split('":\"');
        text[i] = text[i][1].replace('\"', "");
        // Only stores the data with a matching username
        if (text[i] === user){
            saveddata.push(text[i]);
            // Cleans the data
            for (var j = i+1; j < i+6; j++) {
                text[j] = text[j].split('":\"');
                text[j] = text[j][1].replace('\"', "");
                text[j] = text[j].replace('}', "");
                text[j] = text[j].replace(']', "");
                // Stores all the data into the array
                saveddata.push(text[j]);
            }
        }
    }
    for (var i = 0; i < saveddata.length; i = i + 6) {
        var found = false;
        // If the appname is the same, add the current value and the new entires together
        for (var j = 0; j < combinedapps.length; j = j + 3) {
            if (saveddata[i + 1] === combinedapps[j]) {
                combinedapps[j + 1] = parseInt(combinedapps[j + 1]) + parseInt(saveddata[i + 2]);
                combinedapps[j + 2] = parseInt(combinedapps[j + 2]) + parseInt(saveddata[i + 3]);
                found = true;
            }
        }
        // Else add new entry into the array
        if (found === false) {
            combinedapps.push(saveddata[i + 1]);
            combinedapps.push(parseInt(saveddata[i + 2]));
            combinedapps.push(parseInt(saveddata[i + 3]));
        }
    }
    console.log(saveddata);
    console.log(combinedapps);
}

// Sorts through the user's data and finds the day with the most apps used.
function BreakdownMostApps() {
    for (var i = 5; i < saveddata.length; i = i + 6) {
        days.push(saveddata[i]);
    }
    // Finds the most used day
    days = days.sort();
    console.log(days);
    var day = "";
    var items = 0;
    var previtems = 0;
    // Increment through the days until the most common day is found
    for (var j = 0; j < days.length; j++) {
        if (days[j] == day) {
            items += 1;
            if (items >= ((days.length / 2) - previtems)) {
                // Found the most common day
                var apps = [];
                for (var k = 5; k < saveddata.length; k = k + 6) {
                    if (saveddata[k] === day) {
                        // Stores its name to an array
                        apps.push(saveddata[k - 4]);
                    }
                }
                // The most used day and all the apps used are added to the breakdown window.
                document.getElementById("MostApps").innerHTML = "The day with the most recorded apps is " + day + " where you used these apps: " + apps + " !";
                j = days.length;
            }
        } else {
            day = days[j];
            if (previtems < items) {
                previtems = items;
            }
            items = 1;
        }
    }
}

// Combines all of the recorded activities and finds the day with the greatest total.
function BreakdownMostHours() {
    daytotal = [];
    var pointer = 0;
    // Iterates through the data, array by array
    for (var i = 0; i < saveddata.length; i = i + 6) {
        var found = false;
        for (var j = 0; j < days.length; j = j + 1) {
            if (saveddata[i + 5] === daytotal[j]) {
                found = true;
                pointer = j;
            }
        }
        // Adds the next elements values to the total
        if (found == true) {
            daytotal[pointer + 1] = parseInt(daytotal[pointer + 1]) + parseInt(saveddata[i + 2]);
        }
        else {
            daytotal.push(saveddata[i + 5]);
            daytotal.push(parseInt(saveddata[i + 2]));
        }
    }
    // Stores day with the time spent
    var greatesthours = ["",0];
    for (var k = 0; k < daytotal.length; k = k + 2) {
        if (daytotal[k + 1] > greatesthours[1]) {
            greatesthours[0] = daytotal[k];
            greatesthours[1] = daytotal[k + 1];
        }
    }
    var day = greatesthours[0].split("/")
    day[1] = parseInt(day[1]);
    DisplayDate(day);
    // Adds it to the window
    document.getElementById("MostHours").innerHTML = "The day with the most recorded screentime is " + newdate + " where you spent: " + greatesthours[1] + " minutes using apps!";
}

// Searches through the user's app totals and displays the app with the greatest time spent
function BreakdownLongestApp() {
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

// Finds the app that has the largest number of times used and sends it to the breakdown page
function BreakdownMostUses() {
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

// Adds all the app usage time together and displays it.
function BreakdownTotalHours() {
    var total = 0;
    for (var i = 0; i < saveddata.length; i = i + 6) {
        total += parseInt(saveddata[i + 2]);
    }
    document.getElementById("TotalHours").innerHTML = total + " Minutes of total screen time!";
}

/// Calculates the total percentage of time spent with apps by working out the total time spent and the amount of time between the first and last element stored
function BreakdownPercentage() {
    var earliest = saveddata[5];
    latest = saveddata[5];
    var total = 0;
    // Iterates through the data to find the days that are first and last from the stored data.
    for (var i = 5; i < saveddata.length; i = i + 6) {
        if (saveddata[i] < earliest) {
            earliest = saveddata[i];
        } else if (saveddata[i] > latest) {
            latest = saveddata[i];
        }
        // Total Time Spent of All Recorded Data
        total += parseInt(saveddata[i - 3]);
        
    }
    // Earliest and latest stores the app name, time spent and times used.
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
    // Calculates the number of days between the earliest and latest piece of data
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
    // Calculates the percentage
    var percentage = Math.round((total / daysrecorded * 100));
    document.getElementById("PercentOfLife").innerHTML = "You have spent " + percentage + "% of your life using apps!";
}

// Orders the first 5 apps by their time spent using them.
function BreakdownTop5() {
    // initates variables used later.
    var one = "";
    var two = "";
    var three = "";
    var four = "";
    var five = "";
    var elements = combinedapps.length / 3;
    // Takes the orders elements and displays them, calls the sorting algorithm depending on how many apps there are
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

// Finds which number is greater and returns it
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

// Finds what number is the greatest and then calls the previous function to rank the apps
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

// Repeats for the rest of the elements
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

/// Used to swap between the states of the webpage when selected from the top menu
function changeState(currentID) {
    // This hides all other states but the one that is currently loaded and if it is on the breakdown state
    ReturnBackground();
    if (currentID === "Account") {
        document.getElementById("BreakdownState").style.display = "none";
        document.getElementById("CalendarState").style.display = "none";
        document.getElementById("AccountState").style.display = "block";
        document.getElementById("DataState").style.display = "none";
    } else if (currentID === "Calendar") {
        document.getElementById("BreakdownState").style.display = "none";
        document.getElementById("CalendarState").style.display = "block";
        document.getElementById("AccountState").style.display = "none";
        document.getElementById("DataState").style.display = "none";
        // Loads the current month on the calendar
        SelectMonth();
    } else {
        document.getElementById("BreakdownState").style.display = "block";
        document.getElementById("CalendarState").style.display = "none";
        document.getElementById("AccountState").style.display = "none";
        document.getElementById("DataState").style.display = "none";
        EndBreakdown();
        // Enters the saved data onto the breakdown page
        FillData();
    }
}

/// Makes the background more interesting when displaying the broken down data.
function SetBackground() {
    // Changes the colour of the background every second
    interval = window.setTimeout("SetBackground()", 1000);
    var index = Math.round(Math.random() * 6);
    var ColorValue = "FFFFFF";
    if (index == 1)
        ColorValue = "00FF00";
    if (index == 2)
        ColorValue = "FF00FF";
    if (index == 3)
        ColorValue = "00FFFF";
    if (index == 4)
        ColorValue = "0000FF";
    if (index == 5)
        ColorValue = "FF0000";
    if (index == 6)
        ColorValue = "FFFF00";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}

/// Returns the background colour to the default when stopping the breakdowns
function ReturnBackground() {
    window.clearTimeout(interval);
    document.getElementsByTagName("body")[0].style.backgroundColor = "ghostwhite";
}

/// When the breakdown is selected load all the required elements
function StartBreakdown() {
    SetBackground();
    document.getElementById("MostHours").style.display = "block";
    document.getElementById("LongestApp").style.display = "block";
    document.getElementById("MostUses").style.display = "block";
    document.getElementById("TotalHours").style.display = "block";
    document.getElementById("PercentOfLife").style.display = "block";
    document.getElementById("Top5").style.display = "block";
    document.getElementById("MostApps").style.display = "block";

    document.getElementById("StartButton").style.display = "none";
    document.getElementById("EndButton").style.display = "block";
    document.getElementById("Usersname").style.display = "none";
    document.getElementById("BreakdownTitle").innerHTML = user + "'s data";
}

/// When stopping the breakdown return the elements that were originally on the window
function EndBreakdown() {
    ReturnBackground();
    document.getElementById("MostHours").style.display = "none";
    document.getElementById("LongestApp").style.display = "none";
    document.getElementById("MostUses").style.display = "none";
    document.getElementById("TotalHours").style.display = "none";
    document.getElementById("PercentOfLife").style.display = "none";
    document.getElementById("Top5").style.display = "none";
    document.getElementById("MostApps").style.display = "none";

    document.getElementById("StartButton").style.display = "block";
    document.getElementById("EndButton").style.display = "none";
    document.getElementById("Usersname").style.display = "block";
    document.getElementById("Usersname").innerHTML = "User: " + user;
    document.getElementById("BreakdownTitle").innerHTML = "Breakdown";
}

/// Finds the last day stored previously and displays the next free day to alert the user of an upcoming event that needs to be stored.
function NewAlert() {
    latest[2] = parseInt(latest[2]) + 1;
    if (latest[2] == 29 && latest[1] == 2) {
        latest[2] = 1;
        latest[1] = latest[1]+1;
    }
    else if (latest[2] == 31 && (latest[1] == 4 || latest[1] == 6 || latest[1] == 9 || latest[1] == 11)) {
        latest[2] = 1;
        latest[1] = latest[1] + 1;
    }
    else if (latest[2] == 32 && (latest[1] == 1 || latest[1] == 3 || latest[1] == 5 || latest[1] == 7 || latest[1] == 8 || latest[1] == 10 || latest[1] == 12)) {
        latest[2] = 1;
        latest[1] = latest[1] + 1;
    }
    DisplayDate(latest);
    document.getElementById("UpcomingEvent").innerHTML = "The next day without data is " + newdate + ".";
}

/// Reorganizes the date that is stored to fit DD/MM/YYYY rather than YYYY/MM/DD
function DisplayDate(date) {
    var day = parseInt(date[2]);
    if (date[1] === 1) {
        newdate = day + " January " + date[0];
    }
    else if (date[1] === 2) {
        newdate = day + " February " + date[0];
    }
    else if (date[1] === 3) {
        newdate = day + " March " + date[0];
    }
    else if (date[1] === 4) {
        newdate = day + " April " + date[0];
    }
    else if (date[1] === 5) {
        newdate = day + " May " + date[0];
    }
    else if (date[1] === 6) {
        newdate = day + " June " + date[0];
    }
    else if (date[1] === 7) {
        newdate = day + " July " + date[0];
    }
    else if (date[1] === 8) {
        newdate = day + " August " + date[0];
    }
    else if (date[1] === 9) {
        newdate = day + " September " + date[0];
    }
    else if (date[1] === 10) {
        newdate = day + " October " + date[0];
    }
    else if (date[1] === 11) {
        newdate = day + " November " + date[0];
    }
    else if (date[1] === 12) {
        newdate = day + " December " + date[0];
    }
}