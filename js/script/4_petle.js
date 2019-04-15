
let i;
for (i = 1; i < 10; i++) {
  document.write(i, ' ');
}

/*
Wyświetl liczby od <20;5> w malejąco.
20, 19..., 5.
*/

document.write('<hr>');

let wynik = '';
for (i = 20; i >=5; i--) {
  if (i==5) {
    wynik += i + '.';
  }
  else {
    wynik += i + ', ';
  }
}
document.write(wynik, '<hr>');

wynik = '';
for (i = 2; i <= 16; i++) {
  if (i % 2 == 0 && i % 4 == 0) {
    wynik += i + ' ';
  }
}
document.write(wynik, '<hr>');

/*
Wyświetl, za pomocą dwóch pętli:
*
**
***
****
*****

*/
/*
for (i = 1; i <= 5; i++) {
  for (let j = 1; j <=i; j++) {
    document.write('*');
  }
  document.write('<br>');
}
document.write('<hr');
*/
/*
Zmodyfikuj, yżytkownik z klawiatury podaje znak do wyświetlania i liczbę znaków
*/

let x = prompt('Podaj wysokość');
let y = prompt('Podaj znak');
for (i = 1; i <= x; i++) {
  for (let j = 1; j <=i; j++) {
    document.write(y);
  }
  document.write('<br>');
}
