interface Point {
    x: number,
    y: number
}

interface Vehiclee { //bir şemadır. Methodun içi olmaz.

    travelTo(point: Point): void;
}

class Taxii implements Vehiclee {

    constructor(private location?: Point, private color?: string) { } // sadece oluşturuldugunda ops. olarak yazılsın. Sonradan okunamasın.
                                                                    // sadece sınıf içerisinden ulaşılabilir.
    travelTo(point: Point): void {
        console.log(`Taxi X: ${this.location.x} Y: ${this.location.y} konumundan ${point.x} Y: ${point.y} e doğru hareket ediyor.`);
    }

}

let taxi1 = new Taxii({ x: 5, y: 5 }, 'Red');
taxi1.travelTo({ x: 1, y: 2 });


