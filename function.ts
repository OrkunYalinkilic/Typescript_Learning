function getAverage(a:number,b:number,c?:number): string { // c isteğe bağlı. Yani fonksiyon 2 ya da 3 parametre alır. void vs de olabilir.
   
    let total = a+b;
    let count = 2;

    if(typeof c!=="undefined") {
        total+=c;
        count++;
    }
   
    const result = total/count;
    return 'result: ' + result;
}

getAverage(10,20,30);
getAverage(10,20);

function getAverage2(...a: number[]): string { // parametre sayısı belli değil. Parametre olarak Number dizisi alır.
   
    let total = 0;
    let count = 0;

    for(let i=0; i<a.length; i++){
        total+=a[i];
        count++;
    }

    const result = total/count;
    return 'result: ' + result;
}

getAverage2(1,2,3,2,1,100);



