"use strict";

let kérdés;
let véletlenk;
let márvolt = [];

let válaszok;
let helyesválasz;
let válasz1;
let válasz2;
let válasz3;
let válasz4;

let pontok = 0;
let kérdésszámok = 1;
let jóválaszarány;

let kérdések = [
  "Mikor volt a mohácsi vész?",
  "Mikor koronázták meg Szent Istvánt?",
  "Melyik megye székhelye Nyíregyháza?",
  "Hány megye van Magyarországon?",
  "Melyik Magyarország legnagyobb folyója?",
  "Melyik a legmagyarabb folyó?",
  "Ki írta a János vitézt?",
  "Melyik magyar csapatban játszott Puskás Ferenc?",
  "A legenda szerint ki ajándékozta I. Szent Istvánnak a Szent Koronát?",
  "Ki volt az első független magyar kormány miniszterelnöke?",
  "Kinek az emlékműve található Pécs főterén?",
  "Milyen miniszter volt Széchenyi István az első független magyar kormányban?",
  "A Duna teljes hossza 2850 km, mennyi ebből a magyarországi szakasz?",
];

console.log(kérdések);

let válaszokgyűjtő = [
  [1526, 1980, 1765, 1112],
  [1000, 1230, 967, 860],
  ["Szabolcs-Szatmár-Bereg", "Borsod-Abaúj-Zemplén", "Békés", "Heves"],
  [19, 14, 17, 22],
  ["Duna", "Tisza", "Maros", "Dráva"],
  ["Tisza", "Duna", "Száva", "Moson"],
  ["Petőfi Sándor", "Arany János", "Kosztolányi Dezső", "Ady Endre"],
  [
    "Kispest Honvéd",
    "Ferencvárosi TC",
    "Újpesti Dózsa",
    "Nyíregyháza Spartacus",
  ],
  [
    "II. Szilveszter pápa",
    "X. Benedek pápa",
    "VI. János pápa",
    "I. Kelemen pápa",
  ],
  ["Batthyány Lajos", "Kossuth Lajos", "Deák Ferenc", "Széchenyi István"],
  ["Hunyadi János", "Dugonics Titusz", "Anonymus", "II. Mehmed"],
  [
    "közlekedésügyi miniszter",
    "népjóléti miniszter",
    "pénzügyminiszter",
    "belügyminiszter",
  ],
  ["417 km", "324 km", "528 km", "483 km"],
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
  document.querySelector(".válasz1label").textContent = válasz1;
  document.querySelector(".válasz2label").textContent = válasz2;
  document.querySelector(".válasz3label").textContent = válasz3;
  document.querySelector(".válasz4label").textContent = válasz4;
});

document.querySelector("#válasz1").addEventListener("click", function () {
  if (válasz1 === helyesválasz) {
    document.querySelector(".válasz1label").style.color = "green";
    console.log("helyes válasz");
    pontok = pontok + 1;
    document.querySelector(
      ".jóválaszaránya"
    ).textContent = `${pontok}/${kérdésszámok}`;
  } else {
    document.querySelector(".válasz1label").style.color = "red";
    document.querySelector(
      ".jóválaszaránya"
    ).textContent = `${pontok}/${kérdésszámok}`;
    console.log("rossz válasz");
    if (válasz2 === helyesválasz)
      document.querySelector(".válasz2label").style.color = "green";
    if (válasz3 === helyesválasz)
      document.querySelector(".válasz3label").style.color = "green";
    if (válasz4 === helyesválasz)
      document.querySelector(".válasz4label").style.color = "green";
  }
  document.querySelector("#válasz2").disabled = true;
  document.querySelector("#válasz3").disabled = true;
  document.querySelector("#válasz4").disabled = true;
});

document.querySelector("#válasz2").addEventListener("click", function () {
  if (válasz2 === helyesválasz) {
    document.querySelector(".válasz2label").style.color = "green";
    console.log("helyes válasz");
    pontok = pontok + 1;
    document.querySelector(
      ".jóválaszaránya"
    ).textContent = `${pontok}/${kérdésszámok}`;
    jóválaszarány = (pontok / kérdésszámok) * 100;
  } else {
    document.querySelector(".válasz2label").style.color = "red";
    document.querySelector(
      ".jóválaszaránya"
    ).textContent = `${pontok}/${kérdésszámok}`;
    jóválaszarány = (pontok / kérdésszámok) * 100;
    console.log("rossz válasz");
    if (válasz1 === helyesválasz)
      document.querySelector(".válasz1label").style.color = "green";
    if (válasz3 === helyesválasz)
      document.querySelector(".válasz3label").style.color = "green";
    if (válasz4 === helyesválasz)
      document.querySelector(".válasz4label").style.color = "green";
  }
  document.querySelector("#válasz1").disabled = true;
  document.querySelector("#válasz3").disabled = true;
  document.querySelector("#válasz4").disabled = true;
});

document.querySelector("#válasz3").addEventListener("click", function () {
  if (válasz3 === helyesválasz) {
    document.querySelector(".válasz3label").style.color = "green";
    console.log("helyes válasz");
    pontok = pontok + 1;
    document.querySelector(
      ".jóválaszaránya"
    ).textContent = `${pontok}/${kérdésszámok}`;
    jóválaszarány = (pontok / kérdésszámok) * 100;
  } else {
    document.querySelector(".válasz3label").style.color = "red";
    document.querySelector(
      ".jóválaszaránya"
    ).textContent = `${pontok}/${kérdésszámok}`;
    jóválaszarány = (pontok / kérdésszámok) * 100;
    console.log("rossz válasz");
    if (válasz1 === helyesválasz)
      document.querySelector(".válasz1label").style.color = "green";
    if (válasz2 === helyesválasz)
      document.querySelector(".válasz2label").style.color = "green";
    if (válasz4 === helyesválasz)
      document.querySelector(".válasz4label").style.color = "green";
  }
  document.querySelector("#válasz1").disabled = true;
  document.querySelector("#válasz2").disabled = true;
  document.querySelector("#válasz4").disabled = true;
});

document.querySelector("#válasz4").addEventListener("click", function () {
  if (válasz4 === helyesválasz) {
    document.querySelector(".válasz4label").style.color = "green";
    console.log("helyes válasz");
    pontok = pontok + 1;
    document.querySelector(
      ".jóválaszaránya"
    ).textContent = `${pontok}/${kérdésszámok}`;
    jóválaszarány = (pontok / kérdésszámok) * 100;
  } else {
    document.querySelector(".válasz4label").style.color = "red";
    document.querySelector(
      ".jóválaszaránya"
    ).textContent = `${pontok}/${kérdésszámok}`;
    jóválaszarány = (pontok / kérdésszámok) * 100;
    console.log("rossz válasz");
    if (válasz1 === helyesválasz)
      document.querySelector(".válasz1label").style.color = "green";
    if (válasz2 === helyesválasz)
      document.querySelector(".válasz2label").style.color = "green";
    if (válasz3 === helyesválasz)
      document.querySelector(".válasz3label").style.color = "green";
  }
  document.querySelector("#válasz1").disabled = true;
  document.querySelector("#válasz2").disabled = true;
  document.querySelector("#válasz3").disabled = true;
});

document.querySelector("#btn-következő").addEventListener("click", function () {
  kérdésszámok = kérdésszámok + 1;

  if (kérdések.length > 0) {
    újkérdés();
  } else {
    document.querySelector("#btn-következő").classList.add("hidden");
    document.querySelector(".vége").classList.remove("hidden");
    document.querySelector(".újra").classList.remove("hidden");
  }

  document.querySelector(".kérdés").textContent = kérdés;
  document.querySelector(".válasz1label").textContent = válasz1;
  document.querySelector(".válasz2label").textContent = válasz2;
  document.querySelector(".válasz3label").textContent = válasz3;
  document.querySelector(".válasz4label").textContent = válasz4;
  document.querySelector(".válasz1label").style.color = "white";
  document.querySelector(".válasz2label").style.color = "white";
  document.querySelector(".válasz3label").style.color = "white";
  document.querySelector(".válasz4label").style.color = "white";
  document.querySelector("#válasz1").checked = false;
  document.querySelector("#válasz2").checked = false;
  document.querySelector("#válasz3").checked = false;
  document.querySelector("#válasz4").checked = false;
  document.querySelector("#válasz1").disabled = false;
  document.querySelector("#válasz2").disabled = false;
  document.querySelector("#válasz3").disabled = false;
  document.querySelector("#válasz4").disabled = false;
});

document.querySelector("#btn-újra").addEventListener("click", function () {
  kérdésszámok = 1;
  pontok = 0;

  document.querySelector(
    ".jóválaszaránya"
  ).textContent = `${pontok}/${kérdésszámok}`;

  document.querySelector("#btn-következő").classList.remove("hidden");
  document.querySelector(".vége").classList.add("hidden");
  document.querySelector(".újra").classList.add("hidden");

  kérdések = [
    "Mikor volt a mohácsi vész?",
    "Mikor koronázták meg Szent Istvánt?",
    "Melyik megye székhelye Nyíregyháza?",
    "Hány megye van Magyarországon?",
    "Melyik Magyarország legnagyobb folyója?",
    "Melyik a legmagyarabb folyó?",
    "Ki írta a János vitézt?",
    "Melyik magyar csapatban játszott Puskás Ferenc?",
    "A legenda szerint ki ajándékozta I. Szent Istvánnak a Szent Koronát?",
    "Ki volt az első független magyar kormány miniszterelnöke?",
    "Kinek az emlékműve található Pécs főterén?",
    "Milyen miniszter volt Széchenyi István az első független magyar kormányban?",
    "A Duna teljes hossza 2850 km, mennyi ebből a magyarországi szakasz?",
  ];

  válaszokgyűjtő = [
    [1526, 1980, 1765, 1112],
    [1000, 1230, 967, 860],
    ["Szabolcs-Szatmár-Bereg", "Borsod-Abaúj-Zemplén", "Békés", "Heves"],
    [19, 14, 17, 22],
    ["Duna", "Tisza", "Maros", "Dráva"],
    ["Tisza", "Duna", "Száva", "Moson"],
    ["Petőfi Sándor", "Arany János", "Kosztolányi Dezső", "Ady Endre"],
    [
      "Kispest Honvéd",
      "Ferencvárosi TC",
      "Újpesti Dózsa",
      "Nyíregyháza Spartacus",
    ],
    [
      "II. Szilveszter pápa",
      "X. Benedek pápa",
      "VI. János pápa",
      "I. Kelemen pápa",
    ],
    ["Batthyány Lajos", "Kossuth Lajos", "Deák Ferenc", "Széchenyi István"],
    ["Hunyadi János", "Dugonics Titusz", "Anonymus", "II. Mehmed"],
    [
      "közlekedésügyi miniszter",
      "népjóléti miniszter",
      "pénzügyminiszter",
      "belügyminiszter",
    ],
    ["417 km", "324 km", "528 km", "483 km"],
  ];

  if (kérdések.length > 0) {
    újkérdés();
  } else {
    document.querySelector("#btn-következő").classList.add("hidden");
    document.querySelector(".vége").classList.remove("hidden");
    document.querySelector(".újra").classList.remove("hidden");
  }

  document.querySelector(".kérdés").textContent = kérdés;
  document.querySelector(".válasz1label").textContent = válasz1;
  document.querySelector(".válasz2label").textContent = válasz2;
  document.querySelector(".válasz3label").textContent = válasz3;
  document.querySelector(".válasz4label").textContent = válasz4;
});
