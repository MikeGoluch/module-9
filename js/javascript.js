function drawTree(numberOfRows) {
    for(var i = 0 ; i < numberOfRows ; i++) {
        var star = "";
        var space = "";
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

drawTree(5);

/*
function drawTree(numberOfRows) {
    for(var i = 0 ; i < numberOfRows ; i++) {
        var level = "";
        for(var j = 0 ; j < numberOfRows - i ; j++) {
            level += " ";
        }
        for(var k = 0 ; k <= i * 2 ; k++) {
            level += "*";
        }
        console.log(level);
    }
}

drawTree(5);
*/