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
//složité řešení :)
console.log(7 * 21 * 265)
console.log(38955 * 0.6)
console.log(38955 - 23373)
console.log(15582 * 0.15)
//jednoduché řešení :)
console.log("Zaplatím daň " + Math.floor(7 * 265 * 21 * (1 - 0.6) * 0.15) + " Kč.")

//cvičení 2 - délka filmu
console.log("Pán prstenů trvá " + Math.floor (223 / 60) + " hodiny " + 223 % 60 + " minut.")

//cvičení 3 - mailovka
console.log("vendula" + "." + "bezakova" + "@mujmail.com")

//webové stránky - pomocí JS lze měnit HTML, validovat data
//html funguje na DOM (document object) - každá část webu je reprezentovaná objektem, který si můžeme odchytit a pracovat s ním, např. body, p, h2

//proměnné - základní stavebí kámen, potřebujeme ukládat různá data v různých datových typech (formátech). Např. buňky v Excelu, vzorec vyvolává buňky, ve kterých jsou hodnoty (= proměnné). V JS je několik cest, jak deklarovat proměnnou: let, var, const. Var se už z bezpečnostních důvodů nepoužívá, je jen ve starších dokumentacích. Konstanta je neměnná. Proměnnou lze kdykoliv v průběhu programu změnit. V rámci JS je žádoucí mít proměnnou jako konstantu, např. odkazy na API, odkazy na HTML prvky - nebudou se měnit. Pokud nad tím nechce programátor přemýšlet, píše všude proměnné. Název proměnných je zažitý mezi programátory v camelCase (malé první písmeno, druhé slovo začíná velkým písmenem). Proměnná by měla odpovídat tomu, co v ní je, ne jen písmenné odznačení. Program se pouští odshora dolů, proto musí být první deklarace a pak proměnnou můžu vypsat (jinak error).

let cislo1 = 100
const cislo2 = 200

cislo1 = 200

console.log(cislo1)
console.log(cislo2)

let hodinovka = 1500
let pocetHodin = 160
let vyplata = hodinovka * pocetHodin

console.log(vyplata)

//cviceni 1 - vypsat random
//document.body.innerHTML = "<p>Random číslo pro dnešní den je " + Math.random() + ".</p>"
console.log("Random číslo pro dnešní den je " + Math.random() + ".")

//cviceni 2 - převod měny
let wageInEur = 20
let exchangeRate = 26.58

wageInCzk = Math.floor(wageInEur * exchangeRate)

console.log("Hodinová mzda v korunách je " + wageInCzk + " Kč.")

//document.body.innerHTML = "<h1>Hodinová mzda v korunách je " + wageInCzk + " Kč</h1>"

//bonus - ultramaraton
let start = 15
let delka = 12

konec = (start + delka) % 24
console.log("Běžec doběhne v " + konec + " hodin.")
document.body.innerHTML = "<p>Běžec doběhne v " + konec + " hodin.</p>"

//Funkce prompt
//prompt("Zadej věk: ")

//cvičení vstup a výstup
let name = prompt("Zadejté své jméno");
let age = Number(prompt("Zadejte svůj věk"));
let info = (name + ", " + "věk: " + age);
document.body.innerHTML = info

