//Get references to html elements
const pointsElem = document.querySelector('.points');
const travelLocationElem = document.querySelector('.travel-location');
const returnTripElem = document.querySelector('.checkbox');
const calculateBtnElem = document.querySelector('.calculate-btn');
const singleTripsElem = document.querySelector('.single-trip');
const pricePerTripElem = document.querySelector('.price-per-trip');
const numberOfReturnTripsElem = document.querySelector('.return-trip');
const pricePerReturnTripElem = document.querySelector('.price-per-return');
const singleTotalElem = document.querySelector('.single-total');
const returnTotalElem = document.querySelector('.return-total');
const resetElem = document.querySelector('.reset')
const errorElem = document.querySelector('.error');

//Create a function  instance 

const travel = busTravel();

function busTravelDom() {
  //set input values
  const travelTimeElem = document.querySelector('input[name="travel-time"]:checked');
  const errorMessage = travel.errorHandling(travelTimeElem ? travelTimeElem.value : null, travelLocationElem.value);
  if (errorMessage) {
    errorElem.textContent = errorMessage; // assuming there is an element with class 'error' to display error messages
    setTimeout(() => {
      errorElem.textContent = '';
    }, 3000); // error message disappears after 3 seconds
    return;
  }
  travel.setPoints(Number(pointsElem.value));
  travel.setLocation(travelLocationElem.value);
  travel.setTime(travelTimeElem.value);
  
 
//calculate the costs
  if (returnTripElem.checked) {
    travel.setReturnTrip();
    numberOfReturnTripsElem.innerHTML = travel.getNumberOfReturnTrips();
    pricePerReturnTripElem.innerHTML = "Price For " + travel.getTownName(travelLocationElem.value) + " is " + "R" + travel.getCostPerTrip();
    returnTotalElem.innerHTML = travel.getReturnTripsTotal()
  } else {
    travel.unsetReturnTrip();
    singleTripsElem.innerHTML = travel.getNumberOfSingleTrips();
    pricePerTripElem.innerHTML = "Price For " + travel.getTownName(travelLocationElem.value) + " is " + "R" + travel.getCostPerTrip();
    singleTotalElem.innerHTML = travel.getSingleTripsTotal()
  }
  //Set local storage
  localStorage.setItem('points', pointsElem.value);
  localStorage.setItem('location', travelLocationElem.value);
  localStorage.setItem('time', travelTimeElem.value);
  localStorage.setItem('returnTrip', returnTripElem.checked);
  localStorage.setItem('numberOfSingleTrips', travel.getNumberOfSingleTrips());
  localStorage.setItem('pricePerTrip', travel.getCostPerTrip());
  localStorage.setItem('numberOfReturnTrips', travel.getNumberOfReturnTrips());
  localStorage.setItem('pricePerReturnTrip', travel.getCostPerTrip());
  localStorage.setItem('singleTotal', travel.getSingleTripsTotal());
  localStorage.setItem('returnTotal', travel.getReturnTripsTotal());

}

//Get local storage
window.onload = function () {
  if (localStorage.getItem('points')) {
    pointsElem.value = localStorage.getItem('points');
  }
  if (localStorage.getItem('location')) {
    travelLocationElem.value = localStorage.getItem('location');
  }
  if (localStorage.getItem('time')) {
    let timeElems = document.querySelectorAll('input[name="travel-time"]');
    for (let i = 0; i < timeElems.length; i++) {
      if (timeElems[i].value === localStorage.getItem('time')) {
        timeElems[i].checked = true;
      }
    }
  }
  if (localStorage.getItem('returnTrip')) {
    returnTripElem.checked = localStorage.getItem('returnTrip') === 'true';
  }
  if (localStorage.getItem('numberOfSingleTrips')) {
    singleTripsElem.innerHTML = localStorage.getItem('numberOfSingleTrips');
  }
  if (localStorage.getItem('pricePerTrip')) {
    pricePerTripElem.innerHTML = "Price For " + travel.getTownName(travelLocationElem.value) + " is " + "R" + localStorage.getItem('pricePerTrip');
  }
  if (localStorage.getItem('numberOfReturnTrips')) {
    numberOfReturnTripsElem.innerHTML = localStorage.getItem('numberOfReturnTrips');
  }
  if (localStorage.getItem('pricePerReturnTrip')) {
    pricePerReturnTripElem.innerHTML = "Price For " + travel.getTownName(travelLocationElem.value) + " is " + "R" + localStorage.getItem('pricePerReturnTrip');
  }
  if (localStorage.getItem('singleTotal')) {
    singleTotalElem.innerHTML = localStorage.getItem('singleTotal');
  }
  if (localStorage.getItem('returnTotal')) {
    returnTotalElem.innerHTML = localStorage.getItem('returnTotal');
  }
}

function resetFunction() {
  //confirm reset before resetting 
  if (!confirm('Are you sure you want to reset?')) {
    return;
  }
  // Reset values in busTravel instance
  travel.setPoints(0);
  travel.setLocation("");
  travel.setTime("");
  travel.unsetReturnTrip();

  // Reset values in HTML elements
  pointsElem.value = "";
  travelLocationElem.value = "";
  let timeElems = document.querySelectorAll('input[name="travel-time"]');
  for (let i = 0; i < timeElems.length; i++) {
    timeElems[i].checked = false;
  }
  returnTripElem.checked = false;
  singleTripsElem.innerHTML = 0;
  pricePerTripElem.innerHTML = "Price For " + travel.getTownName(travelLocationElem.value) + " is " + "R" + 0;
  numberOfReturnTripsElem.innerHTML = 0;
  pricePerReturnTripElem.innerHTML = "Price For " + travel.getTownName(travelLocationElem.value) + " is " + "R" + 0;
  singleTotalElem.innerHTML = 0;
  returnTotalElem.innerHTML = 0;

  //remove from local storage
  localStorage.removeItem('points');
  localStorage.removeItem('location');
  localStorage.removeItem('time');
  localStorage.removeItem('returnTrip');
  localStorage.removeItem('numberOfSingleTrips');
  localStorage.removeItem('pricePerTrip');
  localStorage.removeItem('numberOfReturnTrips');
  localStorage.removeItem('pricePerReturnTrip');
  localStorage.removeItem('singleTotal');
  localStorage.removeItem('returnTotal');
}

//EventListeners
calculateBtnElem.addEventListener('click', busTravelDom)
resetElem.addEventListener('click', resetFunction)
