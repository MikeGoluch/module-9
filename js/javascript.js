var list = document.getElementById('list');
var addButtonElem = document.getElementById('addElem');

addButtonElem.addEventListener("click" , function listenerButton() {
    var element = document.createElement("li");
    var elementLiArray = document.getElementsByTagName("li");
    var elementIndex = elementLiArray.length;
    element.innerHTML = "item " + elementIndex;
    list.appendChild(element);
});
