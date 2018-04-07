function drawTree(numberOfRows) {
    var star = "";
    var space = "";
    for(var i = 0 ; i < numberOfRows ; i++) {
        var level = "";
        for(var j = 0 ; j < numberOfRows - i ; j++) {
            space = space + " ";
        }
        for(var k = 0 ; k <= i * 2 ; k++) {
            star = star + "*";
        }
        var spaceStar = space + star;
        console.log(spaceStar);
    }
}

console.log(drawTree(5));

/*
function drawTree(numberOfRows) {
    for(var i = 0 ; i < numberOfRows ; i++) {
        for(var j = 0 ; j < numberOfRows - i ; j++) {
            document.write(" ");
        }
        for(var k = 0 ; k <= i * 2 ; k++) {
            document.write("*");
        }
        console.log("\n");
    }
}

console.log(drawTree(5));
*/