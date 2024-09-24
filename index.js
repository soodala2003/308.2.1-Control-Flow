// Part 1: Growing Pains
let radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;

function growth(plants_num, weeks) {  
    let plants_count = plants_num * 2**weeks;
    let plants_area = plants_count * 0.8;
    if (plants_area > area * 0.8) {
        return "Pruned";
    } else if (plants_area <= area * 0.8 && plants_area >= area * 0.5) {
        return "Monitored";
    } else {
        return "Planted";
    }
}

console.log(growth(20, 1));
console.log(growth(20, 2));
console.log(growth(20, 3));

//"Part 2: Thinking Bigger"
/* plants_count = plants_num * 2**weeks
plants_area = plants_count * 0.8

plants_area <= area * 0.8 to not prune them
plants_count * 0.8 <= area * 0.8
plants_num * 2**weeks * 0.8 <= PI * radius * radius * 0.8
radius >= Math.sqrt(plants_num * 2**weeks / PI)
radius >= Math.sqrt(plants_num * 2**weeks / PI / 0.8) 
*/

let plants_num = 100;
let weeks = 10; 
let ex_radius = Math.ceil(Math.sqrt(plants_num * 2**weeks / PI / 0.8));

console.log("The radius of this expanded garden would be " + ex_radius + " meters.");

// Part 3: Error in Judgement
try {
    let plants_num = 100;
    let weeks = 0;
    let plants_count = plants_num * 2**weeks;
    let plants_area = plants_count * 0.8

    if (plants_area <= area) {
        growth(plants_num, weeks);
        debugger;
    } else if (plants_area > area) {
        throw "Error - the " + radius + "-meter-radius garden is not available for " + plants_num + " plants.";
    }
    console.log(growth(plants_num, weeks));
} catch (err) {
    console.log(err);
} 

