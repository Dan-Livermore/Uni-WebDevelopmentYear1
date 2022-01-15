var a = "temp";
var b = "temp";
var c = "temp";
var d = "temp";

function hideStates(){
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("DataState").style.display="none";
}


function loadDay(title){
    document.getElementById("DataState").style.display="block";
    var x = document.getElementById("title");
    x.innerHTML = title;
}


function storeData(title, aname, tspent, tused){
    var w  = "Day:              " + title;
    a = a.replace("temp", w);

    var x = document.getElementById("BreakdownAppName").innerHTML;
    x = x.toString().replace(x,"App Name:         " + aname);

    var y = document.getElementById("BreakdownTimeSpent").innerHTML;
    y = y.toString().replace(y,"Total Time Spent: " + tspent);

    var z = document.getElementById("BreakdownTimesUsed").innerHTML;
    z = z.toString().replace(z,"Times Used:       " + tused);
    
}


function fillData(w,x,y,z){
    document.getElementById("BreakdownDate").innerHTML = w;
    document.getElementById("BreakdownAppName").innerHTML = x;
    document.getElementById("BreakdownTimeSpent").innerHTML = y;
    document.getElementById("BreakdownTimesUsed").innerHTML = z;
}


function changeState(currentID) {
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
    fillData(document.getElementById('title').innerHTML, document.getElementById('aname').value, document.getElementById('tspent').value, document.getElementById('tused').value);
    }
}