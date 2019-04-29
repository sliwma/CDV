let text = 'CDV - technologie internetowe';

console.log(text);
console.log('Długość: ' + text.length); //29

let dlugosc = text.length;
let first = text.charAt(0);
let second = text[1];
console.log(first);
console.log(second);

let last = text[dlugosc-1];
console.log(last);

//ASCII
console.log(text.charCodeAt(0)); //67

/*Sprawdź, czy zmienna test ma minimum jedną duża*/

let tekst = 'jaNusZ';
let znak = 'Z';
//A=65
//Z=90
//console.log(znak.charCodeAt(0));

for (let i = 0; i < text.length; i++) {
  znak = tekst.charCodeAt(i);
  if (znak >= 65  && znak <= 90){
    document.write('Jest duża litera: ' + tekst[i]);
    break;
  }
}

let capital = tekst.toUpperCase();
let lower = tekst.toLowerCase();
console.log(lower);
