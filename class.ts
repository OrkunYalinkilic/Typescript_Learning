interface Point{
    x:number,
    y:number
}

interface Vehicle { //bir şemadır. Methodun içi olmaz.

    currentLocation:Point;
    travelTo(point: Point) : void;

}

class Taxi implements Vehicle {
   //..
    currentLocation:Point;
    travelTo(point: Point) : void {
        console.log('Taxi X: ${point.x} Y: ${point.y} konumuna hareket ediyor.');
    }
}

class Bus implements Vehicle {
    //..
    currentLocation:Point;
    travelTo(point: Point) : void {
        console.log('Bus X: ${point.x} Y: ${point.y} konumuna hareket ediyor.');

    }
}

