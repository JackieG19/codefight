/*Given a year, return the century it is in. The first century spans from the year 1 up to and 
including the year 100, the second, from the year 101 up to and including the year 200.*/

// Input:  positive integer year
// Output: integer of the century the year is in.

function centuryFromYear(year) {
    return Math.floor((year + 99) / 100);
}
