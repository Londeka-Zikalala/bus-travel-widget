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

}


//EventListener
calculateBtnElem.addEventListener('click', busTravelDom)
