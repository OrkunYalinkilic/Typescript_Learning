import { Taxi } from './taxi';
import { Bus } from './Bus';

let taxi1 = new Taxi({ x: 5, y: 5 }, 'Red');
taxi1.travelTo({ x: 1, y: 2 });

let taxi2 = new Taxi();
taxi2.location = { x: 5, y: 1 };
let value = taxi2.location;

let bus1 = new Bus();
bus1.travelTo({x:2,y:3});


