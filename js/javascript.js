var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";

var dinosaurUpperCase = dinosaur.toUpperCase();
var textArray = text.split(" ");

var textReplace = text.replace(textArray[0] , dinosaurUpperCase);

var textReplaceLength = (textReplace.length)/2;

var textReplaceLengthSubString = textReplace.substr(0, textReplaceLength);

console.log(textReplaceLengthSubString);
