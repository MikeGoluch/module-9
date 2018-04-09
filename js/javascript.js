var list = document.getElementById('list');
var addButtonElem = document.getElementById('addElem');

addButtonElem.addEventListener("click" , function listenerButton() {
    var element = document.createElement("li");
    var elementNumber = document.getElementsByTagName("li");
    var elementIndex = elementNumber.length;
    element.innerHTML = "item " + elementIndex;
    list.appendChild(element);
});
