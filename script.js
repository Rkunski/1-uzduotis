var skaicius = prompt("Įveskite skaičių nuo 1 iki 6");
var array = ["Jon Snow","Cersei Lannister","Daenerys Targaryen","Theon Greyjoy","Tyrion Lannister","Arya Stark"];
skaicius = Number(skaicius);
var pirmas = array[0];
var last = array[array.length - 1];
console.log("pirmas elementas: " + pirmas + " paskutinis elementas: " + last);
for (var i = 0; i < skaicius; i++) {
    console.log(array[i]);
  }
