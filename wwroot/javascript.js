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
        Day: title,
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
    breakdownTotalHours(data);


    

    //text[6] = text[6].split('":\"');
    //text[6] = text[6][1].toString().slice(0, -1);
    //data.push(text[6]);
    //text[7] = text[7].split('":\"');
    //text[7] = text[7][1].toString().slice(0, -1);
    //data.push(text[7]);
    //text[8] = text[8].split('":\"');
    //text[8] = text[8][1].toString().slice(0, -1);
    //data.push(text[8]);
    //text[9] = text[9].split('":\"');
    //if ((text.length-1) === 9) {
    //    text[9] = text[9][1].toString().slice(0, -3);
    //} else {
    //    text[9] = text[9][1].toString().slice(0, -2);
    //}
    //data.push(text[9]);
}

function breakdownMostApps() {

}

function breakdownMostHours() {

}

function breakdownLongestApp() {

}

function breakdownMostUses() {

}

function breakdownTotalHours(data) {
    var total = 0;
    for (var i = 0; i < data.length; i = i + 4) {
        total += parseInt(data[i + 2]);
    }
    document.getElementById("TotalHours").innerHTML = total + " Minutes of total screen time!";
}

function breakdownPercentage() {

}

function breakdownTop5() {

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

