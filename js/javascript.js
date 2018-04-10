var buttonClass = document.getElementsByClassName("button");

var newUlElem = document.createElement("ul");

for(var i = 0 ; i < buttonClass.length ; i++) {

    var newLiElem = document.createElement("li");

    var buttonWord = buttonClass[i].innerHTML;

    newLiElem.innerHTML = buttonWord;

    newUlElem.appendChild(newLiElem);
}


document.body.appendChild(newUlElem);