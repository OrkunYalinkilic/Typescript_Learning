var Taxiii = /** @class */ (function () {
    function Taxiii(_location, color) {
        this._location = _location;
        this.color = color;
    } // sadece oluşturuldugunda ops. olarak yazılsın. Sonradan okunamasın.
    // sadece sınıf içerisinden ulaşılabilir.
    Taxiii.prototype.travelTo = function (point) {
        console.log("Taxi X: " + this._location.x + " Y: " + this._location.y + " konumundan " + point.x + " Y: " + point.y + " e do\u011Fru hareket ediyor.");
    };
    Object.defineProperty(Taxiii.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error("Koordinat değerleri sıfırdan küçük olamaz");
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxiii;
}());
var taxi11 = new Taxiii({ x: 5, y: 5 }, 'Red');
taxi11.travelTo({ x: 1, y: 2 });
var taxi2 = new Taxiii();
taxi2.location = { x: 5, y: 1 };
var value = taxi2.location;
