"use strict";

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