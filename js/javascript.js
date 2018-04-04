var femaleNames = ["Danusia" , "Helena" , "Grażyna" , "Chytra baba z Radomia"];
var maleNames = ["Jacek" , "Dominik" , "Sławek" , "Wacek"];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = "Marian";

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}

console.log(allNames);