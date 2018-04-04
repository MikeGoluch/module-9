var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";

var dinosaurUpperCase = dinosaur.toUpperCase();

console.log(dinosaurUpperCase);

var textReplace = text.replace("Velociraptor" , dinosaurUpperCase);

console.log(textReplace);

var textReplaceLength = (textReplace.length)/2;

console.log(textReplaceLength);

var textReplaceLengthSubString = textReplace.substr(0, textReplaceLength);

console.log(textReplaceLengthSubString);
