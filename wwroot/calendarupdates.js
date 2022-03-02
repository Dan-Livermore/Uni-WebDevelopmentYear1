

function changeMonthUp(Month) {
    Month = parseInt(Month) - 1;
    if (Month > -1)
        updateCalendar(Month);
    if (Month <= -1) {
        Month = 11
        updateCalendar(Month);
    }
}

function changeMonthDown(Month) {
    Month = parseInt(Month) + 1;
    if (Month < 12)
        updateCalendar(Month);
    if (Month >= 12) {
        Month = 0
        updateCalendar(Month);
    }
}

function selectMonth() {
    let Month = new Date();
    Month = Month.getMonth();
    updateCalendar(Month);
}

function updateCalendar(Month) {
    var j = 0;
    if (Month == 0) { //Jan 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "January 2022";
        
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 5 && i < 37) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
     }

    else if (Month == 1) { //Feb 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "February 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 1 && i < 30) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 2) { //Mar 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "March 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 1 && i < 33) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 3) { //Apr 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "April 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 4 && i < 35) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 4) { //May 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "May 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 6 && i < 38) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 5) { //June 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "June 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 2 && i < 33) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 6) { //July 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "July 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 4 && i < 36) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 7) { //Aug 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "August 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 0 && i < 32) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 8) { //Sept 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "September 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 3 && i < 34) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 9) { //Oct 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "October 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 5 && i < 37) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 10) { //Nov 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "November 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 1 && i < 32) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 11) { //Dec 2022
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "December 2022";

        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 3 && i < 35) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }
}