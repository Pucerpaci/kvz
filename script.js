"use strict";

let kérdés;
let véletlenk;
let márvolt = [];
// let kiesikkérdés;
// let maradkérdés;
// let kiesikválasz;
// let maradválasz;
let válaszok;
let helyesválasz;
let válasz1;
let válasz2;
let válasz3;
let válasz4;

let kérdések = [
  "Mikor volt a mohácsi vész?",
  "Mikor koronázták meg Szent Istvánt?",
  "Melyik megye székhelye Nyíregyháza?",
  "Hány megye van Magyarországon?",
  "Mi Magyarország legnagyobb folyója?",
  "Melyik a legmagyarabb folyó?",
  "Ki írta a János vitézt?",
  "Melyik magyar csapatban játszott Puskás Ferenc?",
];

console.log(kérdések);

let válaszokgyűjtő = [
  [1526, 1980, 1765, 1112],
  [1000, 1230, 967, 860],
  ["Szabolcs", "Borsod", "Békés", "Heves"],
  [19, 14, 17, 22],
  ["Duna", "Tisza", "Maros", "Dráva"],
  ["Tisza", "Duna", "Száva", "Moson"],
  ["Petőfi", "Arany", "Kosztolányi", "Ady"],
  ["Kispest", "Fradi", "Újpest", "Nyíregyháza"],
];

const újkérdés = function () {
  véletlenk = Math.trunc(Math.random() * kérdések.length);

  console.log(véletlenk);

  kérdés = kérdések[véletlenk];
  console.log(kérdés);

  válaszok = válaszokgyűjtő[véletlenk];
  console.log(válaszok);

  helyesválasz = válaszok[0];
  console.log(helyesválasz);

  // VÁLASZOK BEROTÁLÁSA:

  let válaszhely1 = Math.trunc(Math.random() * 4);
  let válaszhely2 = Math.trunc(Math.random() * 4);
  while (válaszhely2 === válaszhely1)
    válaszhely2 = Math.trunc(Math.random() * 4);

  let válaszhely3 = Math.trunc(Math.random() * 4);
  while (válaszhely3 === válaszhely2 || válaszhely3 === válaszhely1)
    válaszhely3 = Math.trunc(Math.random() * 4);

  let válaszhely4 = Math.trunc(Math.random() * 4);
  while (
    válaszhely4 === válaszhely3 ||
    válaszhely4 === válaszhely2 ||
    válaszhely4 === válaszhely1
  )
    válaszhely4 = Math.trunc(Math.random() * 4);

  console.log(válaszhely1, válaszhely2, válaszhely3, válaszhely4);

  válasz1 = válaszok[válaszhely1];
  válasz2 = válaszok[válaszhely2];
  válasz3 = válaszok[válaszhely3];
  válasz4 = válaszok[válaszhely4];

  console.log(válasz1, válasz2, válasz3, válasz4);

  // ITT DOBOM KI AZOKAT A KÉRDÉSEKET, AMIK MÁR VOLTAK!!!

  for (let i = 0; i < kérdések.length; i++) {
    if (kérdések[i] === kérdés) {
      kérdések.splice(i, 1);
      válaszokgyűjtő.splice(i, 1);
    }
  }
};

// WEBTARTALOM FELÜLÍRÁSA:

document.querySelector("#btn-kezdés").addEventListener("click", function () {
  újkérdés();
  document.querySelector(".kérdés").classList.remove("hidden");
  document.querySelector(".válaszok").classList.remove("hidden");
  document.querySelector("#btn-kezdés").classList.add("hidden");
  document.querySelector(".következő").classList.remove("hidden");
  document.querySelector(".kérdés").textContent = kérdés;
  document.querySelector(".kérdés").classList.add("kérdésszöveg");
  document.querySelector(".válasz1").textContent = válasz1;
  document.querySelector(".válasz2").textContent = válasz2;
  document.querySelector(".válasz3").textContent = válasz3;
  document.querySelector(".válasz4").textContent = válasz4;
});

document.querySelector(".válasz1").addEventListener("click", function () {
  if (válasz1 === helyesválasz) {
    document.querySelector(".válasz1").style.backgroundColor = "green";
    console.log("helyes válasz");
  } else {
    document.querySelector(".válasz1").style.backgroundColor = "red";
    console.log("rossz válasz");
  }
});

document.querySelector(".válasz2").addEventListener("click", function () {
  if (válasz2 === helyesválasz) {
    document.querySelector(".válasz2").style.backgroundColor = "green";
    console.log("helyes válasz");
  } else {
    document.querySelector(".válasz2").style.backgroundColor = "red";
    console.log("rossz válasz");
  }
});

document.querySelector(".válasz3").addEventListener("click", function () {
  if (válasz3 === helyesválasz) {
    document.querySelector(".válasz3").style.backgroundColor = "green";
    console.log("helyes válasz");
  } else {
    document.querySelector(".válasz3").style.backgroundColor = "red";
    console.log("rossz válasz");
  }
});

document.querySelector(".válasz4").addEventListener("click", function () {
  if (válasz4 === helyesválasz) {
    document.querySelector(".válasz4").style.backgroundColor = "green";
    console.log("helyes válasz");
  } else {
    document.querySelector(".válasz4").style.backgroundColor = "red";
    console.log("rossz válasz");
  }
});

document.querySelector("#btn-következő").addEventListener("click", function () {
  if (kérdések.length > 0) {
    újkérdés();
  } else {
    document.querySelector("#btn-következő").classList.add("hidden");
    document.querySelector(".vége").classList.remove("hidden");
    document.querySelector(".újra").classList.remove("hidden");
  }
  document.querySelector(".válasz1").style.backgroundColor =
    "rgba(42, 97, 168, 0.9)";
  document.querySelector(".válasz2").style.backgroundColor =
    "rgba(42, 97, 168, 0.9)";
  document.querySelector(".válasz3").style.backgroundColor =
    "rgba(42, 97, 168, 0.9)";
  document.querySelector(".válasz4").style.backgroundColor =
    "rgba(42, 97, 168, 0.9)";
  document.querySelector(".kérdés").textContent = kérdés;
  document.querySelector(".válasz1").textContent = válasz1;
  document.querySelector(".válasz2").textContent = válasz2;
  document.querySelector(".válasz3").textContent = válasz3;
  document.querySelector(".válasz4").textContent = válasz4;
});

document.querySelector("#btn-újra").addEventListener("click", function () {
  document.querySelector("#btn-következő").classList.remove("hidden");
  document.querySelector(".vége").classList.add("hidden");
  document.querySelector(".újra").classList.add("hidden");

  kérdések = [
    "Mikor volt a mohácsi vész?",
    "Mikor koronázták meg Szent Istvánt?",
    "Melyik megye székhelye Nyíregyháza?",
    "Hány megye van Magyarországon?",
    "Mi Magyarország legnagyobb folyója?",
    "Melyik a legmagyarabb folyó?",
    "Ki írta a János vitézt?",
    "Melyik magyar csapatban játszott Puskás Ferenc?",
  ];

  válaszokgyűjtő = [
    [1526, 1980, 1765, 1112],
    [1000, 1230, 967, 860],
    ["Szabolcs", "Borsod", "Békés", "Heves"],
    [19, 14, 17, 22],
    ["Duna", "Tisza", "Maros", "Dráva"],
    ["Tisza", "Duna", "Száva", "Moson"],
    ["Petőfi", "Arany", "Kosztolányi", "Ady"],
    ["Kispest", "Fradi", "Újpest", "Nyíregyháza"],
  ];

  if (kérdések.length > 0) {
    újkérdés();
  } else {
    document.querySelector("#btn-következő").classList.add("hidden");
    document.querySelector(".vége").classList.remove("hidden");
    document.querySelector(".újra").classList.remove("hidden");
  }

  document.querySelector(".válasz1").style.backgroundColor =
    "rgba(42, 97, 168, 0.9)";
  document.querySelector(".válasz2").style.backgroundColor =
    "rgba(42, 97, 168, 0.9)";
  document.querySelector(".válasz3").style.backgroundColor =
    "rgba(42, 97, 168, 0.9)";
  document.querySelector(".válasz4").style.backgroundColor =
    "rgba(42, 97, 168, 0.9)";
  document.querySelector(".kérdés").textContent = kérdés;
  document.querySelector(".válasz1").textContent = válasz1;
  document.querySelector(".válasz2").textContent = válasz2;
  document.querySelector(".válasz3").textContent = válasz3;
  document.querySelector(".válasz4").textContent = válasz4;
});
