<?php
  $potega = 2 ** 10;
  $modulo = 11 % 2;


echo $potega;

/*
  operatory bitowe: and &, or /, not ~, xor ^,
  przesunięcia bitowe: << >>
*/
  $x = 0b1010;
  echo "<br>$x"; //10
  $y = $x >> 1; //0b101 -> 5
  $y = $x << 2; // 0b101000 -> 8+32=40
  echo $y;

//operatory logiczne
//and, or, xor, &&, ||, !

$a = 10.0;
$b = 10;

if ($a===$b) {
  echo "Równe";
}else{
  echo "Różne";
}

echo gettype($a); //double
echo gettype($b); //integer

$x = 2;
echo $x++; //
echo ++$x; //
echo $x; //
$y = $x++
echo $y; //
$y = ++$x;
echo $y; //
echo ++$y; //

 ?>
