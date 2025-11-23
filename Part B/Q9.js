function displayCar(){
    console.log("This is a Car");
}
function displayTruck(){
    console.log("This is a truck");

}
function displayBike(){
    console.log("This is a Bike");
}
//HOF 
function vehicleInfo(vehicleType,callbackFn){
    callbackFn();
}
//calling func:
vehicleInfo("Car", displayCar);
vehicleInfo("Truck",displayTruck);
vehicleInfo("Bike",displayBike);