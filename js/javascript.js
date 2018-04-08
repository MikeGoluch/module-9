var buttonClass = document.getElementsByClassName("button");
console.log(buttonClass);

var newUlElem = document.createElement("ul");
console.log(newUlElem);

for(var i = 0 ; i < buttonClass.length ; i++) {

    var newLiElem = document.createElement("li");

    newLiElem = buttonClass[i].innerHTML;
    console.log(newLiElem);

    newUlElem.appendChild(newLiElem);
}