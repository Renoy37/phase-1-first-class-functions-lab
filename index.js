// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

const fareDoubler =  createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

// const fare = 10
// const trippleFare = fareTripler(fare)
// console.log(trippleFare)

function selectDifferentDrivers (drivers,returnFirstTwoDrivers ) {
  return returnFirstTwoDrivers(drivers)
}
