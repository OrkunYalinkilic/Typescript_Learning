var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log('Taxi X: ${point.x} Y: ${point.y} konumuna hareket ediyor.');
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log('Bus X: ${point.x} Y: ${point.y} konumuna hareket ediyor.');
    };
    return Bus;
}());
