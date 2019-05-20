<?php
//boolean
  $prawda = true;
  $falsz = false;

//integer
  $calkowite = 200;
  $hex = 0xA;
  $oct = 010;
  $bin = 0b1010;
  echo "$hex";
  echo '$hex';
  echo "<br>$bin";

//składnia heredoc
    $imie = 'Filip';
    $napis = <<<TEKST
    <br>Mam na imię: $imie
TEKST;

  echo $napis;

    echo<<<X
    <br>mam na imie: $imie<br>
X;

//składnia nowdoc

    echo <<<'X'
      <hr>Mam na imię: $imie<br>
      Mieszkam w Poznaniu<hr>
X;

//konkatenacja
  echo 'Mam na imię: '.$imie;

 ?>
