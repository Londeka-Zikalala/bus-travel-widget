/*
create an instance busTravel() with: 

*Create global variables : travel location and cost object; 
create a function to set points, 
create a function to set a travel location
create a function to pick a return trip 
create a function to calculte the travel cost
create a function to get the travel cost 

 */

function busTravel() {
    var travelCosts = {
      'Khayelitsha': 40,
      'Dunoon': 25,
      'Mitchells Plain': 30
    };
    var travelTime = "";
    var startLocation = "";
    var points = 0;
    var costPerTrip = 0;
    var returnTrip = false;
    var numberOfSingleTrips = 0;
    var numberOfReturnTrips = 0;
    var conversion = 1;
  
    function setPoints(num) {
      points = num;
      return points;
    }
  
    function setLocation(location) {
      startLocation = location;
      return startLocation;
    }
  
    function setTime(time) {
      travelTime = time;
      return travelTime;
    }
  
    function setReturnTrip() {
      returnTrip = true;
      return returnTrip;
    }
  
    function getNumberOfSingleTrips() {
      if (!returnTrip) {
        numberOfSingleTrips++;
      }
      return numberOfSingleTrips;
    }
  
    function getNumberOfReturnTrips() {
      if (returnTrip) {
        numberOfReturnTrips++;
      }
      return numberOfReturnTrips;
    }
  
    function getCostWithPoints() {
      var pointsCost = points*conversion;
      var totalCost = costPerTrip - pointsCost;
  
      return totalCost;
    }
  
    function getCostPerTrip() {
      costPerTrip = travelCosts[startLocation];
  
      if (travelTime === 'peak') {
        costPerTrip *= 1.25;
      }
  
      if (points > 0) {
        costPerTrip = getCostWithPoints();
      }
  
      if (returnTrip) {
        costPerTrip *= 2;
      }
  
      return costPerTrip;
    }
  
    return {
      setPoints,
      setLocation,
      setTime,
      setReturnTrip,
      getCostPerTrip,
      getCostWithPoints,
      getNumberOfSingleTrips,
      getNumberOfReturnTrips,
    };
  }
  