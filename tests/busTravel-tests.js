describe('The bus travel widget', function(){
it('should allow the user to set points', function(){
    var travelWidget = busTravel();
    assert.equal(5, travelWidget.setPoints(5))
})

it('should allow a user to pick a location', function (){
    var travelWidget = busTravel();

    assert.equal('Khayelitsha', travelWidget.setLocation('Khayelitsha'))
})

it('should allow a user to pick a travel time', function(){
    var travelWidget = busTravel();
    assert.equal('Peak', travelWidget.setTime('Peak'))
})

it('should allow a user to check "return"', function(){
    var travelWidget = busTravel();

    assert.equal(true, travelWidget.setReturnTrip())
})

})

describe('The calculations', function(){

it('should calculate the travel cost from Khayelitsha to the city centre',function(){
    var travelWidget = busTravel();
    travelWidget.setLocation('Khayelitsha')
    assert.equal(40, travelWidget.getCostPerTrip())

    
})
it('should calculate the travel cost from Dunoon to the city centre', function(){
    var travelWidget = busTravel();
    travelWidget.setLocation('Dunoon')
    assert.equal(25, travelWidget.getCostPerTrip())

})

it('should calculate the travel cost from Mitchells Plain to the city centre', function(){
    var travelWidget = busTravel();
    travelWidget.setLocation('Mitchells Plain')
    assert.equal(30, travelWidget.getCostPerTrip())

})
it('should calculate the travel cost when there are 5 and 0 points available', function(){
    var travelWidget = busTravel();
    travelWidget.setLocation('Mitchells Plain')
    travelWidget.setPoints(5)
    assert.equal(25, travelWidget.getCostPerTrip())

    travelWidget.setLocation('Mitchells Plain')
    travelWidget.setPoints(0)
    assert.equal(30, travelWidget.getCostPerTrip())

})


it('should calculate the return trips from the city centre to Khayelitsha, Dunoop and Mitchells Plain', function(){
    var travelWidget = busTravel();
    travelWidget.setReturnTrip();
    travelWidget.setPoints(5);
    travelWidget.setLocation('Khayelitsha');
    assert.equal(70, travelWidget.getCostPerTrip());

    travelWidget.setLocation('Dunoon');
    travelWidget.setPoints(0);
    travelWidget.setReturnTrip();
    assert.equal(50, travelWidget.getCostPerTrip());

    travelWidget.setLocation('Mitchells Plain');
    travelWidget.setPoints(10);
    travelWidget.setReturnTrip()
    assert.equal(40, travelWidget.getCostPerTrip())

})


})
describe('The display values', function(){
it('Should display the Number of Single Trips ', function(){
    var travelWidget = busTravel();
    travelWidget.setLocation('Khayelitsha')
    assert.equal(1, travelWidget.getNumberOfSingleTrips())
})
it('Should display the Price per Trip', function(){
    var travelWidget = busTravel();
    travelWidget.setLocation('Khayelitsha');
    travelWidget.setTime('offpeak');
    assert.equal(40, travelWidget.getCostPerTrip());

    travelWidget.setLocation('Khayelitsha');
    travelWidget.setPoints(40);
    travelWidget.setTime('peak');
    assert.equal(10, travelWidget.getCostPerTrip());

})
it('Should display the Price per Trip (Return) ', function(){
    var travelWidget = busTravel(); 
    travelWidget.setLocation('Khayelitsha');
    travelWidget.setReturnTrip();
    travelWidget.setTime('peak');
    assert.equal(100, travelWidget.getCostPerTrip());
  });

it('Should display the Number of Return Trips', function(){
    var travelWidget = busTravel();
    var travelWidget = busTravel();
    travelWidget.setReturnTrip()
    travelWidget.setLocation('Khayelitsha')
    assert.equal(1, travelWidget.getNumberOfReturnTrips())

})
})

