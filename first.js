//Задача 10: Въведете число от клавиатурата и определете дали е просто. 

function primeNumber(x) {
    var isPrime = true;
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
}

var x = Math.floor(Math.random() * 100 + 1);
console.log(x);
primeNumber(x);