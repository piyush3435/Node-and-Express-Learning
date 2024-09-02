const number = 1000;
let divisibleBy = [];
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        divisibleBy.push(i);
    }
}

if (divisibleBy.length == 2) {
    console.log(number + " is Prime Number!");
}
else {
    console.log(number + " is not a Prime Number!\nIt is divisible by " + divisibleBy);
}