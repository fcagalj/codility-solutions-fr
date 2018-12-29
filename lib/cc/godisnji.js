
'use strict';

if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

// Lik ide na godisnji na Tajland. Ima godisnji tocno dva kalendarska miseca.
// Letovi za Tajland su samo ponediljkom a iz Tajlanda Nediljom
// Kao input dobijes godinu u kojoj ide na godisnji, mjesec kad ide i mjesec kad se vraca te koji je dan u tjednu prvi dan u godini
// Tribas vratit koliko tjedana moze bit ma Tajlandu
// Moras handleat i prijestupne godine


exports.solution = solution;


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//mocha --grep godisnji
//node-debug _mocha --grep godisnji


function solution (year, beginingMonth, endingMonth, firstDayOfYear) {

  let months = {
    'January'  : 31,
    'February' : year % 4 === 0 ? 28 : 29,
    'March'    : 31,
    'April'    : 30,
    'May'      : 31,
    'June'     : 30,
    'July'     : 31,
    'August'   : 31,
    'September': 30,
    'October'  : 31,
    'November' : 30,
    'December' : 31
  };

  let daysToFirstMonday = firstDayOfYear !== 'Monday' ? 7 - days.indexOf(firstDayOfYear) : 0;

  console.log('daysToFirstMonday: ', daysToFirstMonday);

  let daysToBeginingOfTrip = 0;
  let daysToEndOfTrip = 0;

  for (const [month, days] of Object.entries(months)) {
    if(month === beginingMonth){
      break;
    }
    daysToBeginingOfTrip+=days;
  }
  daysToBeginingOfTrip++;

  let startingDayInMonth = daysToBeginingOfTrip % 7 + daysToFirstMonday;
  let lostDaysInMonth = startingDayInMonth === 0 ? 0 : 8 - startingDayInMonth;


  console.log('daysToBeginingOfTrip: ', daysToBeginingOfTrip);
  console.log('daysToBeginingOfTrip % 7: ', daysToBeginingOfTrip % 7);
  console.log('startingDayInMonth: ', startingDayInMonth);
  console.log('lostDaysInMonth: ', lostDaysInMonth);

  for (const [month, days] of Object.entries(months)) {
    if(month === endingMonth){
      break;
    }
    daysToEndOfTrip+=days;
  }

  let startingDayInLastMonth = daysToEndOfTrip % 7 + daysToFirstMonday;
  let lostDaysInLastMonth = startingDayInLastMonth === 0 ? 0 : 8 - startingDayInMonth;


  console.log('daysToBeginingOfTrip: ', daysToBeginingOfTrip);
  console.log('daysToBeginingOfTrip % 7: ', daysToBeginingOfTrip % 7);
  console.log('startingDayInMonth: ', startingDayInMonth);
  console.log('lostDaysInMonth: ', lostDaysInMonth);


  let daysBetween = 0;
  for (const [month, days] of Object.entries(months)) {
    let current = months.indexOf(month);
    if(months.indexOf(beginingMonth) > current && months.indexOf(endingMonth) < current){
      daysBetween+=days;
    }
  }
  console.log('daysBetween: ', daysBetween);

}






















function solutionS (year, beginingMonth, endingMonth, firstDayOfYear) {
  const months = {
    'January': 31,
    'February': 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31,
  };
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (year % 4 === 0) {
    months['February'] = 29;
  }
  let daysUntilStartOfA = 0;
  for (const [month, num] of Object.entries(months)) {
    if (month === beginingMonth) {
      break;
    }
    daysUntilStartOfA += num;
  }
  const monthsNames = Object.keys(months);
  const vacationMonths = monthsNames.slice(monthsNames.indexOf(beginingMonth), monthsNames.indexOf(endingMonth) + 1);
  let totalVacationDays = 0;
  for (const m of vacationMonths) {
    totalVacationDays += months[m];
  }
  const indexOfFirstDayInA = (daysUntilStartOfA + week.indexOf(firstDayOfYear)) % 7;
  // return week[indexOfFirstDayInA];
  const lostDays = (7 - indexOfFirstDayInA) % 7;
  const reducedDays = totalVacationDays - lostDays;
  return Math.floor(reducedDays / 7);

}

function solutionFrFirst(year, beginningMonth, endingMonth, firstDayOfYear) {

  let dayGoing = new Date(0);
  dayGoing.setFullYear(year);
  dayGoing.setMonth(_getMonthNum(beginningMonth));
  dayGoing.setDate(1);
  dayGoing.setHours(0);

  console.log('beginningMonth: %s(%s)', beginningMonth, _getMonthNum(beginningMonth));
  console.log('endingMonth: %s(%s)', endingMonth, _getMonthNum(endingMonth));
  let dayReturning = new Date(0);
  console.log('set dayReturning: ', dayReturning);
  dayReturning.setFullYear(year);
  dayReturning.setMonth(_getMonthNum(endingMonth));
  dayReturning.setDate(_daysInMonth(year, endingMonth));
  dayReturning.setHours(0);

  _setMonday(dayGoing);
  _setMondayAfterPreviusSunday(dayReturning);
  console.log('Going on: %s, on day: %s', dayGoing, dayGoing.getDay());
  console.log('Returning on: %s, on day: %s', dayReturning, dayReturning.getDay());

  return _calculateWeeksBetween(dayGoing, dayReturning);
}


function _calculateWeeksBetween(firstDate, lastDate) {
  let ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
  let date1Unix = firstDate.getTime();
  let date2Unix = lastDate.getTime();
  let differenceUnix = Math.abs(date1Unix - date2Unix);
  console.log('differenceUnix::', differenceUnix / ONE_WEEK);
  return Math.round(differenceUnix / ONE_WEEK);
}

function _setMonday(day) {
  day.setDate(day.getDate() + (1 - day.getDay()) % 7);
}

function _setMondayAfterPreviusSunday(d) {
  return d.setDate(d.getDate() - d.getDay() + 1);
}

function _getMonthNum(month) {
  return months.indexOf(month);
}

function _daysInMonth(year, month) {
  let months = {
    January: 31,
    February: year % 4 === 0 ? 28 : 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
  };
  return months[month];
}
