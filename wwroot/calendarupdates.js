//Global variables being initialized.
var currentmonth = 0;
var currentday = new Date();
currentday = currentday.getDate();

/// This function updates the displayed month on the calendar to go backwards through 2022. (If March is loaded, February will now be shown)
function ChangeMonthUp(Month) {
    Month = parseInt(Month) - 1;
    if (Month > -1)
        UpdateCalendar(Month);
    if (Month <= -1) {
        Month = 11
        UpdateCalendar(Month);
    }
}
/// This function updates the displayed month on the calendar to go forwards through 2022. (If March is loaded, April will now be shown)
function ChangeMonthDown(Month) {
    Month = parseInt(Month) + 1;
    if (Month < 12)
        UpdateCalendar(Month);
    if (Month >= 12) {
        Month = 0
        UpdateCalendar(Month);
    }
}

/// When the calendar page loads, the current month of the host device will be displayed.
function SelectMonth() {
    Month = new Date();
    var Month = Month.getMonth();
    currentmonth = Month;
    UpdateCalendar(Month);
}

/// The main function of the calendar. Using the month's id given from the previous procedures, this loads the chosen month onto the webpage.
function UpdateCalendar(Month) {
    // j is the iterator through the days of the month.
    var j = 0;
    if (Month == 0) { //Jan 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "January 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 5 && i < 37) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 5))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
     }

    else if (Month == 1) { //Feb 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "February 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 1 && i < 30) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 1))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 2) { //Mar 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "March 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 1 && i < 33) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 1))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 3) { //Apr 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "April 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 4 && i < 35) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 4))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 4) { //May 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "May 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 6 && i < 38) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 6))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 5) { //June 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "June 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 2 && i < 33) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 2))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 6) { //July 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "July 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 4 && i < 36) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 4))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 7) { //Aug 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "August 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 0 && i < 32) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 8) { //Sept 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "September 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 3 && i < 34) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 3))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 9) { //Oct 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "October 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 5 && i < 37) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 5))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 10) { //Nov 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "November 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 1 && i < 32) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 1))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }

    else if (Month == 11) { //Dec 2022
        // Updates the header of the calendar
        document.getElementsByClassName("CalendarYearTitle").id = Month;
        document.getElementsByClassName("CalendarYearTitle")[0].innerHTML = "December 2022";

        // Iterates through the 7 x 6 elements of the calendar grid and activates or hides the elements, depending on the days of the month.
        for (var i = 1; i < 43; i++) {
            var item = "Item" + i;
            if (i > 3 && i < 35) {
                j += 1;
                document.getElementById(item).innerHTML = j;
                document.getElementById(item).className = "Active";
                if (Month == currentmonth) {
                    if (i == (currentday + 3))
                        document.getElementById(item).className = "Today";
                }
            } else {
                document.getElementById(item).innerHTML = "";
                document.getElementById(item).className = "Empty";
            }
        }
    }
}