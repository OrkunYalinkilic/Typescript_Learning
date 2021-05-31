/*
let number = 5;
number = 'a';
*/

/*
let a;
a=5;
a='a';
a=true;
*/

/*
let a:number;
a=5;
a='a';
a=true;
*/

let a: number = 5;
let b: string = 'a';
let c: boolean;
c=true;
let d:any;
let e: number[] = [1,2,3];
let f: Array<number> = [ 1,2,3 ] //e ile f tamamen aynı yazım farkıvar sadece
let g: any[] = [1,'a',true];
let h: [string,number,boolean] = ['a',5,false]; //tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi=0, havale=5, kapidaodeme=2, eft=3}; // daha modern

let kredi = Payment.kredi; //0
let havale = Payment.havale; //5
let kapidaodeme = Payment.kapidaodeme; //2
let eft = Payment.eft; //3
