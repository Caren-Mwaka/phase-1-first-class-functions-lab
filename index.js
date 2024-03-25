const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
}

console.log(returnFirstTwoDrivers());
function returnLastTwoDrivers(){
    return drivers.slice(-2);
}
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ];
  
  const getDriver = function () {
    return selectingDrivers[0]();
  }
console.log(getDriver())
function createFareMultiplier(fareMultiplier) {
    return function(fare) {
        return fare * fareMultiplier;
    };
  
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuintupler = createFareMultiplier(5);
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
}
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))