var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi X: " + point.x + " Y: " + point.y + " konumuna hareket ediyor.");
    };
    return Taxi;
}());
var taxi_3 = new Taxi({ x: 2, y: 2 }, 'red');
var taxi_4 = new Taxi({ x: 23, y: 32 });
