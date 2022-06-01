function hideStates(){
    // This function hides the other states so when the application is first loaded, only the account state is shown.
    document.getElementById("BreakdownState").style.display="none";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("DataState").style.display="none";
    getYear();
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
    getYear();
    } else{
    document.getElementById("BreakdownState").style.display="block";
    document.getElementById("CalendarState").style.display="none";
    document.getElementById("AccountState").style.display="none";
    document.getElementById("DataState").style.display="none";
    fillData();
}
}

function getYear(){
    var Month = new Date();
    Month = Month.getMonth();
    if (Month == 0){ //Jan 2022
        document.getElementById("CalendarYearTitle").innerHTML = "January 2022";

        document.getElementById("Item1").innerHTML = "";
        document.getElementById("Item1").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item2").innerHTML = "";
        document.getElementById("Item2").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item3").innerHTML = "";
        document.getElementById("Item3").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item4").innerHTML = "";
        document.getElementById("Item4").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item5").innerHTML = "";
        document.getElementById("Item5").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item6").innerHTML = "1";
        document.getElementById("Item6").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";

        document.getElementById("Item7").innerHTML = "2";
        document.getElementById("Item7").className = "Active";
        document.getElementById("Item7").style.backgroundColor = "dodgerblue";

        document.getElementById("Item8").innerHTML = "3";
        document.getElementById("Item9").innerHTML = "4";
        document.getElementById("Item10").innerHTML = "5";
        document.getElementById("Item11").innerHTML = "6";
        document.getElementById("Item12").innerHTML = "7";
        document.getElementById("Item13").innerHTML = "8";
        document.getElementById("Item14").innerHTML = "9";

        document.getElementById("Item15").innerHTML = "10";
        document.getElementById("Item16").innerHTML = "11";
        document.getElementById("Item17").innerHTML = "12";
        document.getElementById("Item18").innerHTML = "13";
        document.getElementById("Item19").innerHTML = "14";
        document.getElementById("Item20").innerHTML = "15";
        document.getElementById("Item21").innerHTML = "16";

        document.getElementById("Item22").innerHTML = "17";
        document.getElementById("Item23").innerHTML = "18";
        document.getElementById("Item24").innerHTML = "19";
        document.getElementById("Item25").innerHTML = "20";
        document.getElementById("Item26").innerHTML = "21";
        document.getElementById("Item27").innerHTML = "22";
        document.getElementById("Item28").innerHTML = "23";

        document.getElementById("Item29").innerHTML = "24";
        document.getElementById("Item29").style.backgroundColor = "dodgerblue";
        document.getElementById("Item30").innerHTML = "25";
        document.getElementById("Item30").style.backgroundColor = "dodgerblue";
        document.getElementById("Item31").innerHTML = "26";
        document.getElementById("Item31").style.backgroundColor = "dodgerblue";
        document.getElementById("Item32").innerHTML = "27";
        document.getElementById("Item32").style.backgroundColor = "dodgerblue";
        document.getElementById("Item33").innerHTML = "28";
        document.getElementById("Item33").style.backgroundColor = "dodgerblue";
        document.getElementById("Item34").innerHTML = "29";
        document.getElementById("Item34").style.backgroundColor = "dodgerblue";
        document.getElementById("Item35").innerHTML = "30";
        document.getElementById("Item35").style.backgroundColor = "dodgerblue";

        document.getElementById("Item36").innerHTML = "31";
        document.getElementById("Item36").className = "Active";
        document.getElementById("Item36").style.backgroundColor = "dodgerblue";

        document.getElementById("Item37").innerHTML = "";
        document.getElementById("Item37").className = "Empty";
        document.getElementById("Item37").style.backgroundColor = "white";

        document.getElementById("Item38").innerHTML = "";
        document.getElementById("Item38").className = "Empty";
        document.getElementById("Item38").style.backgroundColor = "white";

        document.getElementById("Item39").innerHTML = "";
        document.getElementById("Item39").className = "Empty";
        document.getElementById("Item39").style.backgroundColor = "white";

        document.getElementById("Item40").innerHTML = "";
        document.getElementById("Item40").className = "Empty";
        document.getElementById("Item40").style.backgroundColor = "white";

        document.getElementById("Item41").innerHTML = "";
        document.getElementById("Item41").className = "Empty";
        document.getElementById("Item41").style.backgroundColor = "white";

        document.getElementById("Item42").innerHTML = "";
        document.getElementById("Item42").className = "Empty";
        document.getElementById("Item42").style.backgroundColor = "white";
    }

    else if (Month == 1){ //Feb 2022
        document.getElementById("CalendarYearTitle").innerHTML = "February 2022";

        document.getElementById("Item1").innerHTML = "";
        document.getElementById("Item1").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item2").innerHTML = "1";
        document.getElementById("Item2").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";

        document.getElementById("Item3").innerHTML = "2";
        document.getElementById("Item3").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";

        document.getElementById("Item4").innerHTML = "3";
        document.getElementById("Item4").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";

        document.getElementById("Item5").innerHTML = "4";
        document.getElementById("Item5").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";

        document.getElementById("Item6").innerHTML = "5";
        document.getElementById("Item6").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";

        document.getElementById("Item7").innerHTML = "6";
        document.getElementById("Item7").className = "Active";
        document.getElementById("Item7").style.backgroundColor = "dodgerblue";

        document.getElementById("Item8").innerHTML = "7";
        document.getElementById("Item9").innerHTML = "8";
        document.getElementById("Item10").innerHTML = "9";
        document.getElementById("Item11").innerHTML = "10";
        document.getElementById("Item12").innerHTML = "11";
        document.getElementById("Item13").innerHTML = "12";
        document.getElementById("Item14").innerHTML = "13";

        document.getElementById("Item15").innerHTML = "14";
        document.getElementById("Item16").innerHTML = "15";
        document.getElementById("Item17").innerHTML = "16";
        document.getElementById("Item18").innerHTML = "17";
        document.getElementById("Item19").innerHTML = "18";
        document.getElementById("Item20").innerHTML = "19";
        document.getElementById("Item21").innerHTML = "20";

        document.getElementById("Item22").innerHTML = "21";
        document.getElementById("Item23").innerHTML = "22";
        document.getElementById("Item24").innerHTML = "23";
        document.getElementById("Item25").innerHTML = "24";
        document.getElementById("Item26").innerHTML = "25";
        document.getElementById("Item27").innerHTML = "26";
        document.getElementById("Item28").innerHTML = "27";

        document.getElementById("Item29").innerHTML = "28";
        document.getElementById("Item29").className = "Active";
        document.getElementById("Item29").style.backgroundColor = "dodgerblue";

        document.getElementById("Item30").innerHTML = "";
        document.getElementById("Item30").className = "Empty";
        document.getElementById("Item30").style.backgroundColor = "white";

        document.getElementById("Item31").innerHTML = "";
        document.getElementById("Item31").className = "Empty";
        document.getElementById("Item31").style.backgroundColor = "white";

        document.getElementById("Item32").innerHTML = "";
        document.getElementById("Item32").className = "Empty";
        document.getElementById("Item32").style.backgroundColor = "white";

        document.getElementById("Item33").innerHTML = "";
        document.getElementById("Item33").className = "Empty";
        document.getElementById("Item33").style.backgroundColor = "white";

        document.getElementById("Item34").innerHTML = "";
        document.getElementById("Item34").className = "Empty";
        document.getElementById("Item34").style.backgroundColor = "white";

        document.getElementById("Item35").innerHTML = "";
        document.getElementById("Item35").className = "Empty";
        document.getElementById("Item36").style.backgroundColor = "white";

        document.getElementById("Item36").innerHTML = "";
        document.getElementById("Item36").className = "Empty";
        document.getElementById("Item36").style.backgroundColor = "white";

        document.getElementById("Item37").innerHTML = "";
        document.getElementById("Item37").className = "Empty";
        document.getElementById("Item37").style.backgroundColor = "white";

        document.getElementById("Item38").innerHTML = "";
        document.getElementById("Item38").className = "Empty";
        document.getElementById("Item38").style.backgroundColor = "white";

        document.getElementById("Item39").innerHTML = "";
        document.getElementById("Item39").className = "Empty";
        document.getElementById("Item39").style.backgroundColor = "white";

        document.getElementById("Item40").innerHTML = "";
        document.getElementById("Item40").className = "Empty";
        document.getElementById("Item40").style.backgroundColor = "white";

        document.getElementById("Item41").innerHTML = "";
        document.getElementById("Item41").className = "Empty";
        document.getElementById("Item41").style.backgroundColor = "white";

        document.getElementById("Item42").innerHTML = "";
        document.getElementById("Item42").className = "Empty";
        document.getElementById("Item42").style.backgroundColor = "white";
    }

    else if (Month == 2){ //Mar 2022
    document.getElementById("CalendarYearTitle").innerHTML = "March 2022";

    document.getElementById("Item1").innerHTML = "";
    document.getElementById("Item1").className = "Empty";
    document.getElementById("Item6").style.backgroundColor = "white";

    document.getElementById("Item2").innerHTML = "1";
    document.getElementById("Item2").className = "Active";
    document.getElementById("Item6").style.backgroundColor = "dodgerblue";

    document.getElementById("Item3").innerHTML = "2";
    document.getElementById("Item3").className = "Active";
    document.getElementById("Item6").style.backgroundColor = "dodgerblue";

    document.getElementById("Item4").innerHTML = "3";
    document.getElementById("Item4").className = "Active";
    document.getElementById("Item6").style.backgroundColor = "dodgerblue";

    document.getElementById("Item5").innerHTML = "4";
    document.getElementById("Item5").className = "Active";
    document.getElementById("Item6").style.backgroundColor = "dodgerblue";

    document.getElementById("Item6").innerHTML = "5";
    document.getElementById("Item6").className = "Active";
    document.getElementById("Item6").style.backgroundColor = "dodgerblue";

    document.getElementById("Item7").innerHTML = "6";
    document.getElementById("Item7").className = "Active";
    document.getElementById("Item7").style.backgroundColor = "dodgerblue";

    document.getElementById("Item8").innerHTML = "7";
    document.getElementById("Item9").innerHTML = "8";
    document.getElementById("Item10").innerHTML = "9";
    document.getElementById("Item11").innerHTML = "10";
    document.getElementById("Item12").innerHTML = "11";
    document.getElementById("Item13").innerHTML = "12";
    document.getElementById("Item14").innerHTML = "13";

    document.getElementById("Item15").innerHTML = "14";
    document.getElementById("Item16").innerHTML = "15";
    document.getElementById("Item17").innerHTML = "16";
    document.getElementById("Item18").innerHTML = "17";
    document.getElementById("Item19").innerHTML = "18";
    document.getElementById("Item20").innerHTML = "19";
    document.getElementById("Item21").innerHTML = "20";

    document.getElementById("Item22").innerHTML = "21";
    document.getElementById("Item23").innerHTML = "22";
    document.getElementById("Item24").innerHTML = "23";
    document.getElementById("Item25").innerHTML = "24";
    document.getElementById("Item26").innerHTML = "25";
    document.getElementById("Item27").innerHTML = "26";
    document.getElementById("Item28").innerHTML = "27";

    document.getElementById("Item29").innerHTML = "28";
    document.getElementById("Item29").className = "Active";
    document.getElementById("Item29").style.backgroundColor = "dodgerblue";

    document.getElementById("Item30").innerHTML = "29";
    document.getElementById("Item30").className = "Active";
    document.getElementById("Item30").style.backgroundColor = "dodgerblue";

    document.getElementById("Item31").innerHTML = "30";
    document.getElementById("Item31").className = "Active";
    document.getElementById("Item31").style.backgroundColor = "dodgerblue";

    document.getElementById("Item32").innerHTML = "31";
    document.getElementById("Item32").className = "Active";
    document.getElementById("Item32").style.backgroundColor = "dodgerblue";

    document.getElementById("Item33").innerHTML = "";
    document.getElementById("Item33").className = "Empty";
    document.getElementById("Item33").style.backgroundColor = "white";

    document.getElementById("Item34").innerHTML = "";
    document.getElementById("Item34").className = "Empty";
    document.getElementById("Item34").style.backgroundColor = "white";

    document.getElementById("Item35").innerHTML = "";
    document.getElementById("Item35").className = "Empty";
    document.getElementById("Item36").style.backgroundColor = "white";

    document.getElementById("Item36").innerHTML = "";
    document.getElementById("Item36").className = "Empty";
    document.getElementById("Item36").style.backgroundColor = "white";

    document.getElementById("Item37").innerHTML = "";
    document.getElementById("Item37").className = "Empty";
    document.getElementById("Item37").style.backgroundColor = "white";

    document.getElementById("Item38").innerHTML = "";
    document.getElementById("Item38").className = "Empty";
    document.getElementById("Item38").style.backgroundColor = "white";

    document.getElementById("Item39").innerHTML = "";
    document.getElementById("Item39").className = "Empty";
    document.getElementById("Item39").style.backgroundColor = "white";

    document.getElementById("Item40").innerHTML = "";
    document.getElementById("Item40").className = "Empty";
    document.getElementById("Item40").style.backgroundColor = "white";

    document.getElementById("Item41").innerHTML = "";
    document.getElementById("Item41").className = "Empty";
    document.getElementById("Item41").style.backgroundColor = "white";

    document.getElementById("Item42").innerHTML = "";
    document.getElementById("Item42").className = "Empty";
    document.getElementById("Item42").style.backgroundColor = "white";
    }

    else if (Month == 3){ //Apr 2022
    document.getElementById("CalendarYearTitle").innerHTML = "April 2022";

    document.getElementById("Item1").innerHTML = "";
    document.getElementById("Item1").className = "Empty";
    document.getElementById("Item6").style.backgroundColor = "white";

    document.getElementById("Item2").innerHTML = "";
    document.getElementById("Item2").className = "Empty";
    document.getElementById("Item6").style.backgroundColor = "white";

    document.getElementById("Item3").innerHTML = "";
    document.getElementById("Item3").className = "Empty";
    document.getElementById("Item6").style.backgroundColor = "white";

    document.getElementById("Item4").innerHTML = "";
    document.getElementById("Item4").className = "Empty";
    document.getElementById("Item6").style.backgroundColor = "white";

    document.getElementById("Item5").innerHTML = "1";
    document.getElementById("Item5").className = "Active";
    document.getElementById("Item6").style.backgroundColor = "dodgerblue";

    document.getElementById("Item6").innerHTML = "2";
    document.getElementById("Item6").className = "Active";
    document.getElementById("Item6").style.backgroundColor = "dodgerblue";

    document.getElementById("Item7").innerHTML = "3";
    document.getElementById("Item7").className = "Active";
    document.getElementById("Item7").style.backgroundColor = "dodgerblue";

    document.getElementById("Item8").innerHTML = "4";
    document.getElementById("Item9").innerHTML = "5";
    document.getElementById("Item10").innerHTML = "6";
    document.getElementById("Item11").innerHTML = "7";
    document.getElementById("Item12").innerHTML = "8";
    document.getElementById("Item13").innerHTML = "9";
    document.getElementById("Item14").innerHTML = "10";

    document.getElementById("Item15").innerHTML = "11";
    document.getElementById("Item16").innerHTML = "12";
    document.getElementById("Item17").innerHTML = "13";
    document.getElementById("Item18").innerHTML = "14";
    document.getElementById("Item19").innerHTML = "15";
    document.getElementById("Item20").innerHTML = "16";
    document.getElementById("Item21").innerHTML = "17";

    document.getElementById("Item22").innerHTML = "18";
    document.getElementById("Item23").innerHTML = "19";
    document.getElementById("Item24").innerHTML = "20";
    document.getElementById("Item25").innerHTML = "21";
    document.getElementById("Item26").innerHTML = "22";
    document.getElementById("Item27").innerHTML = "23";
    document.getElementById("Item28").innerHTML = "24";

    document.getElementById("Item29").innerHTML = "25";
    document.getElementById("Item29").className = "Active";
    document.getElementById("Item29").style.backgroundColor = "dodgerblue";

    document.getElementById("Item30").innerHTML = "26";
    document.getElementById("Item30").className = "Active";
    document.getElementById("Item30").style.backgroundColor = "dodgerblue";

    document.getElementById("Item31").innerHTML = "27";
    document.getElementById("Item31").className = "Active";
    document.getElementById("Item31").style.backgroundColor = "dodgerblue";

    document.getElementById("Item32").innerHTML = "28";
    document.getElementById("Item32").className = "Active";
    document.getElementById("Item32").style.backgroundColor = "dodgerblue";

    document.getElementById("Item33").innerHTML = "29";
    document.getElementById("Item33").className = "Active";
    document.getElementById("Item33").style.backgroundColor = "dodgerblue";

    document.getElementById("Item34").innerHTML = "30";
    document.getElementById("Item34").className = "Active";
    document.getElementById("Item34").style.backgroundColor = "dodgerblue";

    document.getElementById("Item35").innerHTML = "";
    document.getElementById("Item35").className = "Empty";
    document.getElementById("Item36").style.backgroundColor = "white";

    document.getElementById("Item36").innerHTML = "";
    document.getElementById("Item36").className = "Empty";
    document.getElementById("Item36").style.backgroundColor = "white";

    document.getElementById("Item37").innerHTML = "";
    document.getElementById("Item37").className = "Empty";
    document.getElementById("Item37").style.backgroundColor = "white";

    document.getElementById("Item38").innerHTML = "";
    document.getElementById("Item38").className = "Empty";
    document.getElementById("Item38").style.backgroundColor = "white";

    document.getElementById("Item39").innerHTML = "";
    document.getElementById("Item39").className = "Empty";
    document.getElementById("Item39").style.backgroundColor = "white";

    document.getElementById("Item40").innerHTML = "";
    document.getElementById("Item40").className = "Empty";
    document.getElementById("Item40").style.backgroundColor = "white";

    document.getElementById("Item41").innerHTML = "";
    document.getElementById("Item41").className = "Empty";
    document.getElementById("Item41").style.backgroundColor = "white";

    document.getElementById("Item42").innerHTML = "";
    document.getElementById("Item42").className = "Empty";
    document.getElementById("Item42").style.backgroundColor = "white";
    }

    else if (Month == 4){ //May 2022
        document.getElementById("CalendarYearTitle").innerHTML = "May 2022";

        document.getElementById("Item1").innerHTML = "";
        document.getElementById("Item1").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item2").innerHTML = "";
        document.getElementById("Item2").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item3").innerHTML = "";
        document.getElementById("Item3").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item4").innerHTML = "";
        document.getElementById("Item4").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item5").innerHTML = "";
        document.getElementById("Item5").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item6").innerHTML = "";
        document.getElementById("Item6").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";

        document.getElementById("Item7").innerHTML = "1";
        document.getElementById("Item7").className = "Active";
        document.getElementById("Item7").style.backgroundColor = "dodgerblue";

        document.getElementById("Item8").innerHTML = "2";
        document.getElementById("Item9").innerHTML = "3";
        document.getElementById("Item10").innerHTML = "4";
        document.getElementById("Item11").innerHTML = "5";
        document.getElementById("Item12").innerHTML = "6";
        document.getElementById("Item13").innerHTML = "7";
        document.getElementById("Item14").innerHTML = "8";

        document.getElementById("Item15").innerHTML = "9";
        document.getElementById("Item16").innerHTML = "10";
        document.getElementById("Item17").innerHTML = "11";
        document.getElementById("Item18").innerHTML = "12";
        document.getElementById("Item19").innerHTML = "13";
        document.getElementById("Item20").innerHTML = "14";
        document.getElementById("Item21").innerHTML = "15";

        document.getElementById("Item22").innerHTML = "16";
        document.getElementById("Item23").innerHTML = "17";
        document.getElementById("Item24").innerHTML = "18";
        document.getElementById("Item25").innerHTML = "19";
        document.getElementById("Item26").innerHTML = "20";
        document.getElementById("Item27").innerHTML = "21";
        document.getElementById("Item28").innerHTML = "22";

        document.getElementById("Item29").innerHTML = "23";
        document.getElementById("Item29").style.backgroundColor = "dodgerblue";
        document.getElementById("Item30").innerHTML = "24";
        document.getElementById("Item30").style.backgroundColor = "dodgerblue";
        document.getElementById("Item31").innerHTML = "25";
        document.getElementById("Item31").style.backgroundColor = "dodgerblue";
        document.getElementById("Item32").innerHTML = "26";
        document.getElementById("Item32").style.backgroundColor = "dodgerblue";
        document.getElementById("Item33").innerHTML = "27";
        document.getElementById("Item33").style.backgroundColor = "dodgerblue";
        document.getElementById("Item34").innerHTML = "28";
        document.getElementById("Item34").style.backgroundColor = "dodgerblue";
        document.getElementById("Item35").innerHTML = "29";
        document.getElementById("Item35").style.backgroundColor = "dodgerblue";

        document.getElementById("Item36").innerHTML = "30";
        document.getElementById("Item36").className = "Active";
        document.getElementById("Item36").style.backgroundColor = "dodgerblue";

        document.getElementById("Item37").innerHTML = "31";
        document.getElementById("Item37").className = "Active";
        document.getElementById("Item37").style.backgroundColor = "dodgerblue";

        document.getElementById("Item38").innerHTML = "";
        document.getElementById("Item38").className = "Empty";
        document.getElementById("Item38").style.backgroundColor = "white";

        document.getElementById("Item39").innerHTML = "";
        document.getElementById("Item39").className = "Empty";
        document.getElementById("Item39").style.backgroundColor = "white";

        document.getElementById("Item40").innerHTML = "";
        document.getElementById("Item40").className = "Empty";
        document.getElementById("Item40").style.backgroundColor = "white";

        document.getElementById("Item41").innerHTML = "";
        document.getElementById("Item41").className = "Empty";
        document.getElementById("Item41").style.backgroundColor = "white";

        document.getElementById("Item42").innerHTML = "";
        document.getElementById("Item42").className = "Empty";
        document.getElementById("Item42").style.backgroundColor = "white";
    }

    else if (Month == 5){ //June 2022
        document.getElementById("CalendarYearTitle").innerHTML = "June 2022";
    
        document.getElementById("Item1").innerHTML = "";
        document.getElementById("Item1").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";
    
        document.getElementById("Item2").innerHTML = "";
        document.getElementById("Item2").className = "Empty";
        document.getElementById("Item6").style.backgroundColor = "white";
    
        document.getElementById("Item3").innerHTML = "1";
        document.getElementById("Item3").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";
    
        document.getElementById("Item4").innerHTML = "2";
        document.getElementById("Item4").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";
    
        document.getElementById("Item5").innerHTML = "3";
        document.getElementById("Item5").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";
    
        document.getElementById("Item6").innerHTML = "4";
        document.getElementById("Item6").className = "Active";
        document.getElementById("Item6").style.backgroundColor = "dodgerblue";
    
        document.getElementById("Item7").innerHTML = "5";
        document.getElementById("Item7").className = "Active";
        document.getElementById("Item7").style.backgroundColor = "dodgerblue";
    
        document.getElementById("Item8").innerHTML = "6";
        document.getElementById("Item9").innerHTML = "7";
        document.getElementById("Item10").innerHTML = "8";
        document.getElementById("Item11").innerHTML = "9";
        document.getElementById("Item12").innerHTML = "10";
        document.getElementById("Item13").innerHTML = "11";
        document.getElementById("Item14").innerHTML = "12";
    
        document.getElementById("Item15").innerHTML = "13";
        document.getElementById("Item16").innerHTML = "14";
        document.getElementById("Item17").innerHTML = "15";
        document.getElementById("Item18").innerHTML = "16";
        document.getElementById("Item19").innerHTML = "17";
        document.getElementById("Item20").innerHTML = "18";
        document.getElementById("Item21").innerHTML = "19";
    
        document.getElementById("Item22").innerHTML = "20";
        document.getElementById("Item23").innerHTML = "21";
        document.getElementById("Item24").innerHTML = "22";
        document.getElementById("Item25").innerHTML = "23";
        document.getElementById("Item26").innerHTML = "24";
        document.getElementById("Item27").innerHTML = "25";
        document.getElementById("Item28").innerHTML = "26";
    
        document.getElementById("Item29").innerHTML = "27";
        document.getElementById("Item29").className = "Active";
        document.getElementById("Item29").style.backgroundColor = "dodgerblue";
    
        document.getElementById("Item30").innerHTML = "28";
        document.getElementById("Item30").className = "Active";
        document.getElementById("Item30").style.backgroundColor = "dodgerblue";
    
        document.getElementById("Item31").innerHTML = "29";
        document.getElementById("Item31").className = "Active";
        document.getElementById("Item31").style.backgroundColor = "dodgerblue";
    
        document.getElementById("Item32").innerHTML = "30";
        document.getElementById("Item32").className = "Active";
        document.getElementById("Item32").style.backgroundColor = "dodgerblue";
    
        document.getElementById("Item33").innerHTML = "";
        document.getElementById("Item33").className = "Empty";
        document.getElementById("Item33").style.backgroundColor = "white";
    
        document.getElementById("Item34").innerHTML = "";
        document.getElementById("Item34").className = "Empty";
        document.getElementById("Item34").style.backgroundColor = "white";
    
        document.getElementById("Item35").innerHTML = "";
        document.getElementById("Item35").className = "Empty";
        document.getElementById("Item36").style.backgroundColor = "white";
    
        document.getElementById("Item36").innerHTML = "";
        document.getElementById("Item36").className = "Empty";
        document.getElementById("Item36").style.backgroundColor = "white";
    
        document.getElementById("Item37").innerHTML = "";
        document.getElementById("Item37").className = "Empty";
        document.getElementById("Item37").style.backgroundColor = "white";
    
        document.getElementById("Item38").innerHTML = "";
        document.getElementById("Item38").className = "Empty";
        document.getElementById("Item38").style.backgroundColor = "white";
    
        document.getElementById("Item39").innerHTML = "";
        document.getElementById("Item39").className = "Empty";
        document.getElementById("Item39").style.backgroundColor = "white";
    
        document.getElementById("Item40").innerHTML = "";
        document.getElementById("Item40").className = "Empty";
        document.getElementById("Item40").style.backgroundColor = "white";
    
        document.getElementById("Item41").innerHTML = "";
        document.getElementById("Item41").className = "Empty";
        document.getElementById("Item41").style.backgroundColor = "white";
    
        document.getElementById("Item42").innerHTML = "";
        document.getElementById("Item42").className = "Empty";
        document.getElementById("Item42").style.backgroundColor = "white";
    }

}