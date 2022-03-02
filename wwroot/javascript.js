let saveddata = [];
let itemsstored = 0;

function hideStates() {
    // This function hides the other states so when the application is first loaded, only the account state is shown.
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("DataState").style.display="none";
    selectMonth();
}

function loadDay(ID){
    // This takes the name from the calendar and loads it into the data entry state
    document.getElementById("DataState").style.display="block";
    var title = document.getElementById(ID).innerHTML + " " + document.getElementsByClassName("CalendarYearTitle")[0].innerHTML;
    document.getElementById("title").innerHTML = title;
    currentid = ID;
}

    
function storeData(title, aname, tspent, tused) {

    let entry = {
        User: "DepressedWayfarer",
        Day: title,
        AppName: aname,
        TimeSpent: tspent,
        TimesUsed: tused,
    }
    
    saveddata.push(entry);
    itemsstored += 1;

    localStorage.setItem('DepressedWayfarers data', JSON.stringify(saveddata));
    
}


function fillData() {
    var text = localStorage.getItem("DepressedWayfarers data");//.split(",");
    console.log(text);
    text = text.split(",");
    console.log(text);
    text[1] = text[1].split('":\"');
    text[2] = text[2].split('":\"');
    text[3] = text[3].split('":\"');
    text[4] = text[4].split('":\"');
    console.log();
    document.getElementById("BreakdownDate1").innerHTML = "Date:     " + text[1][1].substring(0,text[1][1].length-1);
    document.getElementById("BreakdownAppName1").innerHTML = "App Name:     " + text[2][1].substring(0, text[2][1].length - 1);
    document.getElementById("BreakdownTimeSpent1").innerHTML = "Time Spent:     " + text[3][1].substring(0, text[3][1].length - 1)+ " minutes";
    document.getElementById("BreakdownTimesUsed1").textContent = "Times Used:     " + text[4][1].substring(0, text[4][1].length - 2);
    // The elements on the Breakdown state are corrected using the data stored in the local storage.
    //if (itemsstored == 1) {
    //    document.getElementById("BreakdownDate1").innerHTML = localStorage.getItem("Day:" || "[{}]");
    //    document.getElementById("BreakdownAppName1").innerHTML = localStorage.getItem("AppName");
    //    document.getElementById("BreakdownTimeSpent1").innerHTML = localStorage.getItem("TimeSpent");
    //    document.getElementById("BreakdownTimesUsed1").innerHTML = localStorage.getItem("TimesUsed");
    //}    //else if (itemsstored == 2) {
    //    document.getElementById("BreakdownDate2").innerHTML = localStorage.getItem("Day");
    //    document.getElementById("BreakdownAppName2").innerHTML = localStorage.getItem("AppName");
    //    document.getElementById("BreakdownTimeSpent2").innerHTML = localStorage.getItem("TimeSpent");
    //    document.getElementById("BreakdownTimesUsed2").innerHTML = localStorage.getItem("TimesUsed");
    //}
}

function changeState(currentID) {
    // This hides all other states but the one that is currently loaded and if it is on the breakdown state, it attempts to fill the placeholder values with ones stored locally
    if (currentID === "Account"){
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("AccountState").style.display="block";
    document.getElementById("DataState").style.display="none";
    } else if (currentID === "Calendar"){
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="block";
    document.getElementById("AccountState").style.display="none";
    document.getElementById("DataState").style.display="none";
    selectMonth();
    } else{
    document.getElementById("BreakdownState").style.display="block";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("AccountState").style.display="none";
    document.getElementById("DataState").style.display="none";
    fillData();
}
}

