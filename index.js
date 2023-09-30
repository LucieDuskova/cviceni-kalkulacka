// Kalkulačka
// Oživte kalkulačku.
// Vytvořte si repozitář ze šablony cviceni-kalkulacka se stránkou, která obsahuje číselník a display jednoduché kalkulačky.

// Zařiďte, aby se při kliknutí na libovolné tlačítko na displaji kalkulačky objevila cifra, která je na tlačíku napsaná. Postupujte dle návodu:


// Nejprve vyrobte funkci s názvem handleDigitClick. To bude posluchač, který později navěsíme na všechna tlačítka.
// Váš posluchač bude mít jeden parametr představující událost. Z vlastnosti target tohoto parametru získejte tlačíko, na které bylo kliknuto. Cifru zjístíte z jeho textContent.
// Jakmile znáte cifru, vložte ji jako textContent na displej kalkulačky.
// Pověste váš posluchač na všechna tlačítka s ciframi.
// U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. Zařiďte, aby cifry na displeji přibývaly jako na běžné kalkulačce. Také zaříďte, aby se na displej nedalo vložit delší než devíticiferné číslo.
// Bonus
// Pomocí podmínky if zařiďte, aby číslo na displayi nezačínalo nulou, ledaže je tam nula samotná.

const displayElement = document.querySelector('.display')

const handleDigitClick = (event) =>{
 if (displayElement.textContent === "0"){
  displayElement.textContent = "";
 }

  document.querySelector('.display').textContent += event.target.textContent
  
}

document.querySelector('#btn-0').addEventListener('click', handleDigitClick);
document.querySelector('#btn-1').addEventListener('click', handleDigitClick);
document.querySelector('#btn-2').addEventListener('click', handleDigitClick);
document.querySelector('#btn-3').addEventListener('click', handleDigitClick);
document.querySelector('#btn-4').addEventListener('click', handleDigitClick);
document.querySelector('#btn-5').addEventListener('click', handleDigitClick);
document.querySelector('#btn-6').addEventListener('click', handleDigitClick);
document.querySelector('#btn-7').addEventListener('click', handleDigitClick);
document.querySelector('#btn-8').addEventListener('click', handleDigitClick);
document.querySelector('#btn-9').addEventListener('click', handleDigitClick);

