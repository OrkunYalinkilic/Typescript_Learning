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
var a = 5;
var b = 'a';
var c;
c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3]; //e ile f tamamen aynı yazım farkıvar sadece
var g = [1, 'a', true];
var h = ['a', 5, false]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 5] = "havale";
    Payment[Payment["kapidaodeme"] = 2] = "kapidaodeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
; // daha modern
var kredi = Payment.kredi; //0
var havale = Payment.havale; //5
var kapidaodeme = Payment.kapidaodeme; //2
var eft = Payment.eft; //3
