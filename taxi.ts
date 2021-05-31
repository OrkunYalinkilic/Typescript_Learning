import { Point } from './Point';
import { Vehicle } from './Vehicle';


export class Taxi implements Vehicle {

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
