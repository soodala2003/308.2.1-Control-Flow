// Part 1: Growing Pains

let radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;

let plants_area = 0.8 * 20;
let plants_num = 20;
let weeks = 1;
let is

function growth(weeks) {
    if (20 * 2**weeks > area * 0.8) {
        console.log("Pruned");
    }
    else if ((20 * 2**weeks) > area * 0.5 && (20 * 2**weeks) < area * 0.8 ) {
        console.log("Monitored");
    }

    else {
        console.log("Planted");
    }
}

console.log(growth(1));
console.log(growth(2));
console.log(growth(3));