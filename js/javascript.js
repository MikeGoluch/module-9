var buttonClass = document.getElementsByClassName("button");
console.log(buttonClass);
for(var i = 0 ; i < buttonClass.length ; i++) {
    var newElem = document.createElement("p");

    newElem.innerText = buttonClass[i];

    buttonClass[i].appendChild(newElem);

}