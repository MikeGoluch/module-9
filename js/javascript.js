var buttonClass = document.getElementsByClassName("button");
console.log(buttonClass);

var divTag = document.createElement("div");
divTag.setAttribute("id", "testUl");

var newUlElem = document.createElement("ul");

document.body.appendChild(divTag);
divTag.appendChild(newUlElem);


for(var i = 0 ; i < buttonClass.length ; i++) {

    var newLiElem = document.createElement("li");

    newLiElem = buttonClass[i].innerHTML;
    
    var newLiElemDom = document.createTextNode(newLiElem);

    console.log(newLiElem);

    newUlElem.appendChild(newLiElemDom);
}


