var Taxii = /** @class */ (function () {
    function Taxii(location, color) {
        this.location = location;
        this.color = color;
    } // sadece oluşturuldugunda ops. olarak yazılsın. Sonradan okunamasın.
    // sadece sınıf içerisinden ulaşılabilir.
    Taxii.prototype.travelTo = function (point) {
        console.log("Taxi X: " + this.location.x + " Y: " + this.location.y + " konumundan " + point.x + " Y: " + point.y + " e do\u011Fru hareket ediyor.");
    };
    return Taxii;
}());
var taxi1 = new Taxii({ x: 5, y: 5 }, 'Red');
taxi1.travelTo({ x: 1, y: 2 });
