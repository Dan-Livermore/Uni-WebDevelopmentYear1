function hideStates(){
    // This function hides the other states so when the application is first loaded, only the account state is shown.
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("DataState").style.display="none";
}


function loadDay(title){
    // This takes the name from the calendar and loads it into the data entry state
    document.getElementById("DataState").style.display="block";
    var x = document.getElementById("title");
    x.innerHTML = title;
}


function storeData(title, aname, tspent, tused){
    // The users data is enterred and stored into local storage so it doesnt get deleted when changing states.
    var w  = "Day:             " + title;
    localStorage.setItem("a", w);

    var x = "App Name:         " + aname;
    localStorage.setItem("b", x);

    var y = "Total Time Spent: " + tspent + " minutes";
    localStorage.setItem("c", y);

    var z = "Times Used:       " + tused;
    localStorage.setItem("d", z);
    
}


function fillData(){
    // The elements on the Breakdown state are corrected using the data stored in the local storage.
    document.getElementById("BreakdownDate").innerHTML = localStorage.getItem("a");
    document.getElementById("BreakdownAppName").innerHTML = localStorage.getItem("b");
    document.getElementById("BreakdownTimeSpent").innerHTML = localStorage.getItem("c");
    document.getElementById("BreakdownTimesUsed").innerHTML = localStorage.getItem("d");
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
    } else{
    document.getElementById("BreakdownState").style.display="block";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("AccountState").style.display="none";
    document.getElementById("DataState").style.display="none";
    fillData();
}
    
}