// Code your solution in this file!
// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function (fareMultiplier) {
    return function (value) {
      return fareMultiplier * value;
    };
  };
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = (drivers, returnDrivers)  => returnDrivers(drivers);
  