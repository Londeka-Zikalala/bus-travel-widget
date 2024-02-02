//Get references to html elements
const pointsElem = document.querySelector('.points');
const travelLocationElem =  document.querySelector('.travel-location');

const returnTripElem =  document.querySelector('.checkbox');
const calculateBtnElem =  document.querySelector('.calculate-btn');
const singleTripsElem =  document.querySelector('.single-trip');
const pricePerTripElem =  document.querySelector('.price-per-trip');
const numberOfReturnTripsElem =  document.querySelector('.return-trip');
const pricePerReturnTripElem =  document.querySelector('.price-per-return');

//Create a function  instance 

const travel = busTravel();

//DOM code
function busTravelDom() {
    const travelTimeElem = document.querySelector('input[name="travel-time"]:checked');
    console.log(travelTimeElem.value)
    travel.setPoints(Number(pointsElem.value));
    travel.setLocation(travelLocationElem.value);
    travel.setTime(travelTimeElem.value);

    if (returnTripElem.checked) {
        travel.setReturnTrip();
        singleTripsElem.innerHTML = '';
        pricePerTripElem.innerHTML = '';
        numberOfReturnTripsElem.innerHTML = travel.getNumberOfReturnTrips();
        pricePerReturnTripElem.innerHTML = travel.getCostPerTrip();
  } else {
    singleTripsElem.innerHTML = travel.getNumberOfSingleTrips();
    pricePerTripElem.innerHTML = travel.getCostPerTrip();
    numberOfReturnTripsElem.innerHTML = '';
    pricePerReturnTripElem.innerHTML = '';
  }
}


//EventListener
calculateBtnElem.addEventListener('click', busTravelDom)