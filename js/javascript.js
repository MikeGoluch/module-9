var buttonClass = document.getElementsByClassName("button");

var divTag = document.createElement("div");
divTag.setAttribute("id", "testUl");

var newUlElem = document.createElement("ul");
newUlElem.setAttribute("id", "styleUl");


divTag.appendChild(newUlElem);


for(var i = 0 ; i < buttonClass.length ; i++) {

    var newLiElem = document.createElement("li");

    newLiElem = buttonClass[i].innerHTML;
    
    var newLiElemDom = document.createTextNode(newLiElem);

    console.log(newLiElem);

    newUlElem.appendChild(newLiElemDom);
}


document.body.appendChild(divTag);