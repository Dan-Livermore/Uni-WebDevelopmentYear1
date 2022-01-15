function hideStates(){
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("DataState").style.display="none";
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
    }
    
}

function loadDay(Title){
    document.getElementById("DataState").style.display="block";
    var x = document.getElementById("Title");
    x.innerHTML = Title;
}


function storeData(title, aname, tspent, tused){
    var w = document.getElementById("BreakdownDate").innerHTML;
    console.log(w);
    w = w.toString().replace(w,"Day:  " + title.innerHTML);
    console.log(w);
    document.getElementById("BreakdownDate").innerHTML = w;

    var x = document.getElementById("BreakdownAppName").innerHTML;
    console.log(x);
    x = x.toString().replace(x,"App Name:  " + aname.innerHTML);
    console.log(x);
    document.getElementById("BreakdownAppName").innerHTML = x;

    var y = document.getElementById("BreakdownTimeSpent").innerHTML;
    y = y.toString().replace(y,"Total Time Spent:  " + tspent.innerHTML);
    document.getElementById("BreakdownTimeSpent").innerHTML = y;

    var z = document.getElementById("BreakdownTimesUsed").innerHTML;
    z = z.toString().replace(z,"Times Used:  " + tused.innerHTML);
    document.getElementById("BreakdownTimesUsed").innerHTML = z;

}