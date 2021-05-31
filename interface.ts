interface Point{
    x:number,
    y:number
}

interface Passenger {
    name: string;
    phone: string;
}

interface Vehicle { //bir şemadır. Methodun içi olmaz.

    currentLocation:Point;
    travelTo(point: Point) : void;
    getDistance(pointA : Point, pointB : Point): number;
    addPassenger(passenger:Passenger): void;
    removePassenger(passenger:Passenger):void;
}

let travelTo = (point: Point)  => {
    //..
}

let getDistance = (pointA: Point, pointB:Point) =>{
    //..
}