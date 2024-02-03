/*
create an instance busTravel() with: 

*Create global variables : travelCosts object, travelTime,startLocation,points, etc; 
create a function to set points, 
create a function to set a travel location
create a function to pick a return trip 
create a function to get the number of return trips
create a function to get the number of single trips
create a function to get the cost when there are points available
create a function to calculte the travel cost per trip

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
  var singleTotal = 0;
  var returnTotal = 0;

  
  function setPoints(num) {
      //take in the input for points and assign a value
      points = num;
      return points;
    }
  
  function setLocation(location) {
      //take the input for selected location
      startLocation = location;
      return startLocation;
    }
  
  function setTime(time) {
      //take the input selection for travel time
      travelTime = time;
  
      return travelTime;
    }
  
  function setReturnTrip()
  {
    //set selection for trip type
      returnTrip = true;
      return returnTrip;
    }
    function unsetReturnTrip() {
      // unset selection for trip type
      returnTrip = false;
      return returnTrip;
  }
  function getNumberOfSingleTrips() {
      //increment the value if return is not checked
      if (!returnTrip) {
        numberOfSingleTrips++;
      }
      return numberOfSingleTrips;
    }
  
  function getNumberOfReturnTrips() {
      //if return is checked, increment value
      if (returnTrip) {
        numberOfReturnTrips++;
      }
      return numberOfReturnTrips;
    }
  
    function getCostWithPoints() {
      var pointsCost = points*conversion;
      var cost = costPerTrip - pointsCost;
      return cost;
    }
  
    function getCostPerTrip() {
      costPerTrip = travelCosts[startLocation];
  
      if (travelTime === 'peak') {
        costPerTrip *= 1.25;
      }
  
      if (points > 0) {
        costPerTrip = getCostWithPoints();
      }
  
      if (!returnTrip) {
        costPerTrip *= 1;
        singleTotal += costPerTrip;
        
      }
      if (returnTrip) {
        costPerTrip *= 2;
        returnTotal += costPerTrip
      } 

      return costPerTrip;
  }
  
  function getTownName(townName) {
    let town;
    if (townName === "Khayelitsha") {
        town = "Khayelitsha"
    } else if(townName === "Dunoon"){
        town = "Dunoon"
      } else if(townName === "Mitchells Plain"){
        town = "Mitchells Plain"
    } return town
    }
    
  function getSingleTripsTotal() { 
      return singleTotal
  }
  
  function getReturnTripsTotal() {
    return returnTotal
  }
  
  function errorHandling(travelTime, startLocation) {
    if (!travelTime && !startLocation) {
      return "Please Pick a Travel Time And Select A Location"
    }
    else if(!travelTime) {
      return "Please Pick A Travel Time";
    }
    else if(!startLocation) {
      return "Please Select A Location";
    }
  
    return null; 
  }
  
    return {
      setPoints,
      setLocation,
      setTime,
      setReturnTrip,
      unsetReturnTrip,
      getCostPerTrip,
      getCostWithPoints,
      getNumberOfSingleTrips,
      getNumberOfReturnTrips,
      getTownName,
      getSingleTripsTotal,
      getReturnTripsTotal,
      errorHandling

    };
  }
  