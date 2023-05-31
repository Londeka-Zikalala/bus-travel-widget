//Get references to html elements
const pointsElem = document.querySelector('.points');
const travelLocationElem =  document.querySelector('.travel-location');
const travelTimeElem = document.querySelector('.travel-time');
const returnTripElem =  document.querySelector('.checkbox');
const calculateBtnElem =  document.querySelector('.calculate-btn');
const singleTripsElem =  document.querySelector('.single-trip');
const pricePerTripElem =  document.querySelector('.price-per-trip');
const numberOfReturnTripsElem =  document.querySelector('.return-trip');
const pricePerReturnTripElem =  document.querySelector('.price-per-return');

//Create a function  instance 

const travel = busTravel();

//DOM code
function busTravelDom(){
travel.setPoints(Number(pointsElem.value))
travel.setLocation(travelLocationElem.value)
travel.setTime(travelTimeElem.value)


if (returnTripElem.checked) {
    travel.setReturnTrip();
    singleTripsElem.innerHTML = '';
    pricePerTripElem.innerHTML = travel.getCostPerTrip();
    numberOfReturnTripsElem.innerHTML = ''; 
    pricePerReturnTripElem.innerHTML = travel.getReturnTripCost();
  } else if (pointsElem.value > 0) {
    singleTripsElem.innerHTML = '';
    pricePerTripElem.innerHTML = travel.getCostWithPoints();
    numberOfReturnTripsElem.innerHTML = '';
    pricePerReturnTripElem.innerHTML = travel.getReturnTripCost();
  }


}


//EventListener
calculateBtnElem.addEventListener('click', busTravelDom)
