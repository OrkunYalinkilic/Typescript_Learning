interface Point {
    x: number,
    y: number
}

interface Vehiclee { //bir şemadır. Methodun içi olmaz.

    travelTo(point: Point): void;
}

class Taxiiii implements Vehiclee {

    constructor(private _location?: Point, private color?: string) { } // sadece oluşturuldugunda ops. olarak yazılsın. Sonradan okunamasın.
                                                                    // sadece sınıf içerisinden ulaşılabilir.
    travelTo(point: Point): void {
        console.log(`Taxi X: ${this._location.x} Y: ${this._location.y} konumundan ${point.x} Y: ${point.y} e doğru hareket ediyor.`);
    }

    get location(){
        return this._location;
    }

    set location(value:Point){
        if(value.x<0 || value.y<0) {
            throw new Error("Koordinat değerleri sıfırdan küçük olamaz");
        }
        this._location= value;
    }
}

let taxi111 = new Taxiii({ x: 5, y: 5 }, 'Red');
taxi11.travelTo({ x: 1, y: 2 });

let taxi2 = new Taxiii();
taxi2.location = {x:5,y:1};
let valuee = taxi2.location;


