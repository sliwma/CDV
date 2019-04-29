let i = 0;

/*let i=0;
while (i<5)
{
  document.write(i+' ');
}
while (i++<10)
{
  document.write(i+' ');
}
*/

let tab = ['Julia', 'Anna', 'Krystian'];

for (i = 0; i < tab.length; i++) {
  document.write(tab[i] + ' ');
}

document.write('<br>');

function p(a){
  document.write(a + '<br>');
}

tab.forEach(p);

function pokaz(wartosc, indeks){
  document.write(indeks + 1 + ' - element tablicy wynosi: ');
  document.write(wartosc + '<br>');
}

tab.forEach(pokaz);
