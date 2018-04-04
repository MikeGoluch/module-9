var star = "*";
//parametr numberOfRows musi być liczbą nieparzystą, czyli musi spełniac poniższy warunek
// if (numberOfRows % 2 === 1)

function drawTree(numberOfRows) {
    for(i = numberOfRows ; i > 0 ; i--) {
        console.log(star);
        star = star + "*";
    }
}

console.log(drawTree(5));

function drawTree1() {
    
}