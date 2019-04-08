/*

// alert('Zewnętrzny skrypt');

let zmienna = 8;
let imie = 'Janusz';
let nazwisko = 'Cebula';
document.write('Twoje imię: ' + imie);
console.log(nazwisko);

let x = 2, y = 10;
let suma = x + y;
document.write('<br> Suma wynosi: ' + suma);
let iloraz = x/y;
console.log(iloraz);

// potęgowanie
let potega = Math.pow(2, 10);
console.log(potega); //1024

// modulo
let modulo = 17 % 5
console.log(modulo);

// type
let a = 8, b = '2';
console.log(typeof(a)); //number
console.log(typeof(b)); //string

let prawda = true;
console.log(typeof(prawda)); //boolean

let pusta;
console.log(typeof(pusta)); //undefined

let nic = null;

console.log(typeof(nic)); //undefined

let liczba1 = prompt('Podaj pierwszą liczbę');
let liczba2 = prompt('Podaj drugą liczbę');
// liczba1 = parseInt(liczba1);
// liczba2 = parseInt(liczba2);

liczba1 = parseFloat(liczba1);
liczba2 = parseFloat(liczba2);

suma=liczba1+liczba2;
document.write('<br> Suma wynosi: ' + suma);
*/

a = parseFloat(prompt('Podaj bok a'));
b = parseFloat(prompt('Podaj bok b'));

let pole=a*b;
wynik = '<hra= ' + a + ' , ';
wynik += 'b = ' + b + ' , ';
wynik += '<div id = "czerwony" pole = ' + pole + 'cm<sup>2</sup>'

document.write(wynik);
/*
  Oblicz pole prostokąta, dane wyświetl w formacie:
  a = ..., b = ..., pole = ... cm2(dwa w indeksie górnym)
  Pole i wartość pola w kolorze czerwonym.
*/
