var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi X: " + point.x + " Y: " + point.y + " konumuna hareket ediyor.");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus X: " + point.x + " Y: " + point.y + " konumuna hareket ediyor.");
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
var taxi_2 = new Taxi();
taxi_2.currentLocation = { x: 2, y: 4 };
console.log("Taxi2X: " + taxi_2.currentLocation.x + " Taxi2Y: " + taxi_2.currentLocation.y);
