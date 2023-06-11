console.log("Hello world")

//aritmetika, fungují přednosti jako v matematice (násobení před sčítáním)
console.log(10 / 10)

//zbytek po dělení
console.log(13 % 2)

//datové typy - formát, ve kterém je hodnota uložena, např. celé či destinné číslo, stringy nebo objekty
console.log(10 / 3)

//JS je dynamicky typovaný jazyk, dokáže si datový typ určit sám, v určitých situacích dat. typy chceme ale změnit

//string (textový řetězec) - lze je spojovat, když budeme spojovat dynamické výstupy z proměnných
console.log("Vendula " + "Bezáková")

//funkce - spousta věcí je už vyřešena a "předprogramována" v knihovnách, některé funkce jsou integrovány, některé knihovny je třeba stáhnout, např. matematická knihovna (math.js). Funkce je potřeba umět najít na Googlu a v dokumentacích, ne si je pamatovat. :) Musím vědět, co od funkce očekávám a co do ní mám vložit (např. bageta a automat - chci bagetu, musím vložit peníze. :)

//zaokrouhlování Math.floor = dolů, Math.ceil = nahoru;
console.log(Math.ceil(3.4))
//náhodné číslo
console.log(Math.random())

//cvičení 1 - výplata (https://kodim.cz/kurzy/uvod-do-js/prvni-krucky/javascript/cv-vyrazy-funkce)

console.log(7 * 21 * 265)
console.log(38955 * 0.6)
console.log(38955 - 23373)
console.log(15582 * 0.15)

console.log("Zaplatím daň " + Math.floor(7 * 265 * 21 * (1 - 0.6) * 0.15) + " Kč.")

//cvičení 2 - délka filmu
console.log("Pán prstenů trvá " + Math.floor (223 / 60) + " hodiny " + 223 % 60 + " minut.")

//cvičení 3 - mailovka
console.log("vendula" + "." + "bezakova" + "@mujmail.com")