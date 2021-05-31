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
        console.log(`Taxi X: ${point.x} Y: ${point.y} konumuna hareket ediyor.`);

    }
}

class Bus implements Vehicle {
    //..
    currentLocation:Point;
    travelTo(point: Point) : void {
        console.log(`Bus X: ${point.x} Y: ${point.y} konumuna hareket ediyor.`);
    }
}

let taxi_1 : Taxi = new Taxi();
taxi_1.travelTo({x:1,y:2});

let taxi_2 = new Taxi();
taxi_2.currentLocation = { x:2, y:4 }

console.log(`Taxi2X: ${taxi_2.currentLocation.x} Taxi2Y: ${taxi_2.currentLocation.y}`);

