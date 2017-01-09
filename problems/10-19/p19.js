// Counting Sundays

// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

const findDaysInMonth = {
  1: () => 31,
  2: y => (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0) ? 29 : 28),
  3: () => 31,
  4: () => 30,
  5: () => 31,
  6: () => 30,
  7: () => 31,
  8: () => 31,
  9: () => 30,
  10: () => 31,
  11: () => 30,
  12: () => 31,
};

const findDayOfWeek = (refDay, refMonth, refYear, goalDay, goalMonth, goalYear, dayOfWeek) => {
  let rDay = refDay;
  let rMonth = refMonth;
  let rYear = refYear;
  let dow = dayOfWeek;
  while (rDay !== goalDay && rMonth !== goalMonth && rYear !== goalYear) {
    rDay++;
    dow = (dow + 1) % 7;
    if (rDay > findDaysInMonth[rMonth](rYear)) {
      rDay -= findDaysInMonth[rMonth](rYear);
      rMonth++;
    }
    if (rMonth > 12) {
      rMonth = 1;
      rYear++;
    }
  }
  dow = (dow + 1) % 7;
  return dow;
};

const countSundays = (startDay, startMonth, startYear, endDay, endMonth, endYear) => {
  let day = startDay;
  let month = startMonth;
  let year = startYear;
  let numSundays = 0;

  let dayOfWeek = findDayOfWeek(1, 1, 1900, day, month, year, 1); // Sunday is 0

  while (day !== endDay || month !== endMonth || year !== endYear) {
    numSundays = (dayOfWeek === 0) && (day === 1) ? numSundays + 1 : numSundays;
    dayOfWeek = (dayOfWeek + 1) % 7;
    day++;
    if (day > findDaysInMonth[month](year)) {
      day -= findDaysInMonth[month](year);
      month++;
    }
    if (month > 12) {
      month = 1;
      year++;
    }
  }
  numSundays = (dayOfWeek === 0) && (day === 1) ? numSundays + 1 : numSundays;

  return numSundays;
};

console.log(countSundays(1, 1, 1901, 31, 12, 2000));
