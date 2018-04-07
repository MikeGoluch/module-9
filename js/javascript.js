var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener("click" , function listenerButton() {
    var element = document.createElement("li");
    element.innerHTML = "item";
    var elementNumber = document.getElementsByTagName("li");
    var elementIndex = elementNumber.length;
    element.innerHTML = "item " + elementIndex;
    list.appendChild(element);
});
