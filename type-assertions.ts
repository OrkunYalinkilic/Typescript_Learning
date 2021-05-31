/*
let message;
message = 'Hello World';
let count = message.length; // bu durumda length çalışmaz. Çünkü message en başta any olarak tanımlandı. Bir string değil 
let count = (<string>message).length; // bu durumda çalışır. Bilinçli olarak string dedik çünkü.
*/

/*
let message="Hello World";
let count = message.length; // . debildiğinde zaten tüm string metotları çıkıyor.
*/

let message;
message ="Hello world";
//let count = (<string>message).length;
let count =(message as string).length