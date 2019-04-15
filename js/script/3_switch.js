let elkomunikat = document.getElementById('komunikat');
let x = prompt('Podaj co chcesz oliczyć', 'k - kwadrat, p - prostokąt, t - trójkąt');
let pole, boka, bokb;

switch (x) {
  case 'k':
  boka = prompt('Podaj długość boku a');
  pole = Math.pow(boka, 2)
  elkomunikat.innerHTML = 'Pole kwadratu wynosi: ' + pole + 'cm<sup>2</sup>';
  break;
  case 'p':
  boka = prompt('Podaj długość boku a');
  bokb = prompt('Podaj długość boku b');
  pole = boka*bokb
  elkomunikat.innerHTML = 'Pole prostokąta wynosi: ' +  pole + 'cm<sup>2</sup>';
  break;
  case 't':
  boka = prompt('Podaj długość podstawy');
  bokb = prompt('Podaj wysokość');
  pole = 0.5 * boka * bokb
  elkomunikat.innerHTML = 'Pole trójkąta wynosi: ' +  pole + 'cm<sup>2</sup>';
  break;
  default: elkomunikat.innerHTML = '<span style="color:red">Błędne dane!</span>';

}
