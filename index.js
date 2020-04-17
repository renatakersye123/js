"use strict";

var kaina;
var miestas;
var pristatymokaina = 20;
var pristatymoriba = 50;
var pristatymoporeikis;

do{
kaina = prompt("Įveskite kainą");
kaina = Number(kaina);
}
while (isNaN(kaina) || kaina <= 0);

var pristymoporeikis = confirm("Ar reikalingas pristatymas?");
if (confirm){
    do {
        miestas = prompt("Pristatymo miestas?");
        }
    while (miestas.length ===0);


    if ((kaina >= pristatymoriba)||(miestas==="Vilnius")) {
        console.log ('kaina:' +kaina)
        console.log ('Prekę nemokamai pristatysime į '+miestas+' per 1-3 dienas.');
    }

    else {
        var total = kaina + pristatymokaina;

        console.log('kaina:' +kaina);
        console.log('pristatymokaina'+pristatymokaina);
        console.log('total:' +total);
        console.log('Prekę pristatysime į '+miestas+' per 1-3 dienas.');
    }
}

else {
    console.log('kaina:' + kaina);
    console.log('Prekes galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a');
}


/*
var tax = 0.21;
var price;

do {
    price = prompt("Enter goods-price");
    price = Number(price);
}
while (isNaN(price) || price <= 0)

var tax = price * tax;
var total = price;
var minustax = price - tax;

console.log('goods price with tax: ' + total);
console.log('tax: ' + tax);
console.log('price minus tax: ' + minustax);
*/
