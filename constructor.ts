interface Point{
    x:number,
    y:number
}

interface Vehicle { //bir şemadır. Methodun içi olmaz.

    currentLocation:Point;
    travelTo(point: Point) : void;

}

class Tax implements Vehicle {
   
    color:string;
    currentLocation:Point;

    constructor(location?:Point, color?:string){ // location ve color: opsiyonel (girilmese de olur)
        this.currentLocation = location;
        this.color = color;
    }
    
    travelTo(point: Point) : void {
        console.log(`Taxi X: ${point.x} Y: ${point.y} konumuna hareket ediyor.`);

    }
}

let taxi_3: Tax = new Tax({x:2,y:2},'red');
let taxi_4: Tax = new Tax({x:23,y:32});
