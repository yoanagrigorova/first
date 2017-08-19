//Задача 10: Въведете число от клавиатурата и определете дали е просто. 

var x = Math.floor(Math.random() * 1000 + 1);
var isPrime = true;
console.log(x);
for (var i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
        isPrime = false;
    }
}
if (isPrime) {
    console.log("Prime number.");
} else {
    console.log('Not a prime number.');
}