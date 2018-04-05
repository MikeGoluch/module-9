var star = "*";
var space = " ";


function drawTree(numberOfRows) {
    var star = "";
    var space = "";
    for(var i = 0 ; i < numberOfRows ; i++) {
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