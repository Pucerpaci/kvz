"use strict";
let szint;

// let kérdés;
// let véletlenk;
// let márvolt = [];

// let válaszok;
// let helyesválasz;
// let válasz1;
// let válasz2;
// let válasz3;
// let válasz4;

let pontok = 0;
let kérdésszámok = 1;
let jóválaszarány;

let kérdések;
let aktválaszok;
let válaszok;
let helyesválasz;
let válasz1;
let válasz2;
let válasz3;
let válasz4;
let véletlenk;
let kérdés;
let daraboltkérdés;
let reqválaszok;
let kérdéskülön;

document.querySelector(".kezdő").addEventListener("click", function () {
  szint = 1;
  document.querySelector(".kezdleír").classList.remove("hidden");
  document.querySelector(".btn-kezdés").classList.remove("hidden");
  document.querySelector(".kezdő").classList.add("hidden");
  document.querySelector(".haladó").classList.add("hidden");
  document.querySelector(".kezdhalad").textContent =
    "Magyarország kvíz - kezdő szint";
});

document.querySelector(".haladó").addEventListener("click", function () {
  szint = 2;
  document.querySelector(".haladleír").classList.remove("hidden");
  document.querySelector(".btn-kezdés").classList.remove("hidden");
  document.querySelector(".kezdő").classList.add("hidden");
  document.querySelector(".haladó").classList.add("hidden");
  document.querySelector(".kezdhalad").textContent =
    "Magyarország kvíz - haladó szint";
});

const reqkérdések = new XMLHttpRequest();

reqkérdések.open("GET", "/Kérdések.txt");
reqkérdések.send();

reqkérdések.addEventListener("load", function () {
  console.log(reqkérdések.responseText);
  kérdések = reqkérdések.responseText.split("\n");
  console.log(kérdések);

  const újkérdés = function () {
    véletlenk = Math.trunc(Math.random() * kérdések.length);

    console.log(véletlenk);

    kérdés = kérdések[véletlenk];
    console.log(kérdés);

    daraboltkérdés = kérdés.split(";");
    console.log(daraboltkérdés);

    [kérdéskülön, ...válaszok] = [...daraboltkérdés];
    console.log(kérdéskülön);
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
      }
    }
  };

  document.querySelector(".btn-kezdés").addEventListener("click", function () {
    újkérdés();
    document.querySelector("#btn-következő").classList.remove("hidden");
    document.querySelector(".kezdleír").classList.add("hidden");
    document.querySelector(".haladleír").classList.add("hidden");
    document.querySelector(".kérdés").classList.remove("hidden");
    document.querySelector(".válaszok").classList.remove("hidden");
    document.querySelector(".btn-kezdés").classList.add("hidden");
    document.querySelector(".kezdőkép").classList.add("hidden");
    document.querySelector(".következő").classList.remove("hidden");
    document.querySelector(".kérdés").textContent = kérdéskülön;
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
      if (pontok === 10) {
        document.querySelector("#btn-következő").classList.add("hidden");
        document.querySelector(".kérdés").classList.add("hidden");
        document.querySelector(".válaszok").classList.add("hidden");
        document.querySelector(".végepont").classList.remove("hidden");
        document.querySelector(".újra").classList.remove("hidden");
      }
    } else {
      document.querySelector(".válasz1label").style.color = "red";
      if (pontok > 0 && szint === 2) pontok = pontok - 1;
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
    document.querySelector("#válasz1").checked = true;
    document.querySelector("#válasz1").disabled = true;
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
      if (pontok === 10) {
        document.querySelector("#btn-következő").classList.add("hidden");
        document.querySelector(".kérdés").classList.add("hidden");
        document.querySelector(".válaszok").classList.add("hidden");
        document.querySelector(".végepont").classList.remove("hidden");
        document.querySelector(".újra").classList.remove("hidden");
      }
    } else {
      document.querySelector(".válasz2label").style.color = "red";
      if (pontok > 0 && szint === 2) pontok = pontok - 1;
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
    document.querySelector("#válasz2").checked = true;
    document.querySelector("#válasz2").disabled = true;
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
      if (pontok === 10) {
        document.querySelector("#btn-következő").classList.add("hidden");
        document.querySelector(".kérdés").classList.add("hidden");
        document.querySelector(".válaszok").classList.add("hidden");
        document.querySelector(".végepont").classList.remove("hidden");
        document.querySelector(".újra").classList.remove("hidden");
      }
    } else {
      document.querySelector(".válasz3label").style.color = "red";
      if (pontok > 0 && szint === 2) pontok = pontok - 1;
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
    document.querySelector("#válasz3").checked = true;
    document.querySelector("#válasz3").disabled = true;
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
      if (pontok === 10) {
        document.querySelector("#btn-következő").classList.add("hidden");
        document.querySelector(".kérdés").classList.add("hidden");
        document.querySelector(".válaszok").classList.add("hidden");
        document.querySelector(".végepont").classList.remove("hidden");
        document.querySelector(".újra").classList.remove("hidden");
      }
    } else {
      document.querySelector(".válasz4label").style.color = "red";
      if (pontok > 0 && szint === 2) pontok = pontok - 1;
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
    document.querySelector("#válasz4").checked = true;
    document.querySelector("#válasz4").disabled = true;
    document.querySelector("#válasz1").disabled = true;
    document.querySelector("#válasz2").disabled = true;
    document.querySelector("#válasz3").disabled = true;
  });

  document
    .querySelector("#btn-következő")
    .addEventListener("click", function () {
      kérdésszámok = kérdésszámok + 1;

      if (kérdések.length > 0) {
        újkérdés();
      } else {
        document.querySelector("#btn-következő").classList.add("hidden");
        document.querySelector(".kérdés").classList.add("hidden");
        document.querySelector(".válaszok").classList.add("hidden");
        document.querySelector(".vége").classList.remove("hidden");
        document.querySelector(".újra").classList.remove("hidden");
      }

      document.querySelector(".kérdés").textContent = kérdéskülön;
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
    kérdések = reqkérdések.responseText.split("\n");
    kérdésszámok = 1;
    pontok = 0;

    document.querySelector(".jóválaszaránya").textContent = `0/0`;
    document.querySelector(".kezdhalad").textContent = "Magyarország kvíz";

    document.querySelector(".kezdő").classList.remove("hidden");
    document.querySelector(".haladó").classList.remove("hidden");
    document.querySelector(".következő").classList.add("hidden");

    // document.querySelector("#btn-következő").classList.remove("hidden");
    // document.querySelector(".kérdés").classList.remove("hidden");
    // document.querySelector(".válaszok").classList.remove("hidden");
    document.querySelector(".végepont").classList.add("hidden");
    document.querySelector(".vége").classList.add("hidden");
    document.querySelector(".újra").classList.add("hidden");

    // kérdések = [
    //   "Mikor volt a mohácsi vész?",
    //   "Mikor koronázták meg Szent Istvánt?",
    //   "Melyik megye székhelye Nyíregyháza?",
    //   "Hány megye van Magyarországon?",
    //   "Melyik Magyarország legnagyobb folyója?",
    //   "Melyik a legmagyarabb folyó?",
    //   "Ki írta a János vitézt?",
    //   "Melyik magyar csapatban játszott Puskás Ferenc?",
    //   "A legenda szerint ki ajándékozta I. Szent Istvánnak a Szent Koronát?",
    //   "Ki volt az első független magyar kormány miniszterelnöke?",
    //   "Kinek az emlékműve található Pécs főterén?",
    //   "Milyen miniszter volt Széchenyi István az első független magyar kormányban?",
    //   "A Duna teljes hossza 2850 km, mennyi ebből a magyarországi szakasz?",
    // ];

    // válaszokgyűjtő = [
    //   [1526, 1980, 1765, 1112],
    //   [1000, 1230, 967, 860],
    //   ["Szabolcs-Szatmár-Bereg", "Borsod-Abaúj-Zemplén", "Békés", "Heves"],
    //   [19, 14, 17, 22],
    //   ["Duna", "Tisza", "Maros", "Dráva"],
    //   ["Tisza", "Duna", "Száva", "Moson"],
    //   ["Petőfi Sándor", "Arany János", "Kosztolányi Dezső", "Ady Endre"],
    //   [
    //     "Kispest Honvéd",
    //     "Ferencvárosi TC",
    //     "Újpesti Dózsa",
    //     "Nyíregyháza Spartacus",
    //   ],
    //   [
    //     "II. Szilveszter pápa",
    //     "X. Benedek pápa",
    //     "VI. János pápa",
    //     "I. Kelemen pápa",
    //   ],
    //   ["Batthyány Lajos", "Kossuth Lajos", "Deák Ferenc", "Széchenyi István"],
    //   ["Hunyadi János", "Dugovics Titusz", "Anonymus", "II. Mehmed"],
    //   [
    //     "közlekedésügyi miniszter",
    //     "népjóléti miniszter",
    //     "pénzügyminiszter",
    //     "belügyminiszter",
    //   ],
    //   ["417 km", "324 km", "528 km", "483 km"],
    // ];

    // console.log(kérdések);

    // if (kérdések.length > 0) {
    //   újkérdés();
    // } else {
    document.querySelector("#btn-következő").classList.add("hidden");

    // }

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
});

// let kérdések = [
//   "Mikor volt a mohácsi vész?",
//   "Mikor koronázták meg Szent Istvánt?",
//   "Melyik megye székhelye Nyíregyháza?",
//   "Hány megye van Magyarországon?",
//   "Melyik Magyarország legnagyobb folyója?",
//   "Melyik a legmagyarabb folyó?",
//   "Ki írta a János vitézt?",
//   "Melyik magyar csapatban játszott Puskás Ferenc?",
//   "A legenda szerint ki ajándékozta I. Szent Istvánnak a Szent Koronát?",
//   "Ki volt az első független magyar kormány miniszterelnöke?",
//   "Kinek az emlékműve található Pécs főterén?",
//   "Milyen miniszter volt Széchenyi István az első független magyar kormányban?",
//   "A Duna teljes hossza 2850 km, mennyi ebből a magyarországi szakasz?",
// ];

// console.log(kérdések);

// let válaszokgyűjtő = [
//   [1526, 1980, 1765, 1112],
//   [1000, 1230, 967, 860],
//   ["Szabolcs-Szatmár-Bereg", "Borsod-Abaúj-Zemplén", "Békés", "Heves"],
//   [19, 14, 17, 22],
//   ["Duna", "Tisza", "Maros", "Dráva"],
//   ["Tisza", "Duna", "Száva", "Moson"],
//   ["Petőfi Sándor", "Arany János", "Kosztolányi Dezső", "Ady Endre"],
//   [
//     "Kispest Honvéd",
//     "Ferencvárosi TC",
//     "Újpesti Dózsa",
//     "Nyíregyháza Spartacus",
//   ],
//   [
//     "II. Szilveszter pápa",
//     "X. Benedek pápa",
//     "VI. János pápa",
//     "I. Kelemen pápa",
//   ],
//   ["Batthyány Lajos", "Kossuth Lajos", "Deák Ferenc", "Széchenyi István"],
//   ["Hunyadi János", "Dugovics Titusz", "Anonymus", "II. Mehmed"],
//   [
//     "közlekedésügyi miniszter",
//     "népjóléti miniszter",
//     "pénzügyminiszter",
//     "belügyminiszter",
//   ],
//   ["417 km", "324 km", "528 km", "483 km"],
// ];

// const újkérdés = function () {
//   véletlenk = Math.trunc(Math.random() * kérdések.length);

//   console.log(véletlenk);

//   kérdés = kérdések[véletlenk];
//   console.log(kérdés);

//   válaszok = válaszokgyűjtő[véletlenk];
//   console.log(válaszok);

//   helyesválasz = válaszok[0];
//   console.log(helyesválasz);

//   // VÁLASZOK BEROTÁLÁSA:

//   let válaszhely1 = Math.trunc(Math.random() * 4);
//   let válaszhely2 = Math.trunc(Math.random() * 4);
//   while (válaszhely2 === válaszhely1)
//     válaszhely2 = Math.trunc(Math.random() * 4);

//   let válaszhely3 = Math.trunc(Math.random() * 4);
//   while (válaszhely3 === válaszhely2 || válaszhely3 === válaszhely1)
//     válaszhely3 = Math.trunc(Math.random() * 4);

//   let válaszhely4 = Math.trunc(Math.random() * 4);
//   while (
//     válaszhely4 === válaszhely3 ||
//     válaszhely4 === válaszhely2 ||
//     válaszhely4 === válaszhely1
//   )
//     válaszhely4 = Math.trunc(Math.random() * 4);

//   console.log(válaszhely1, válaszhely2, válaszhely3, válaszhely4);

//   válasz1 = válaszok[válaszhely1];
//   válasz2 = válaszok[válaszhely2];
//   válasz3 = válaszok[válaszhely3];
//   válasz4 = válaszok[válaszhely4];

//   console.log(válasz1, válasz2, válasz3, válasz4);

//   // ITT DOBOM KI AZOKAT A KÉRDÉSEKET, AMIK MÁR VOLTAK!!!

//   for (let i = 0; i < kérdések.length; i++) {
//     if (kérdések[i] === kérdés) {
//       kérdések.splice(i, 1);
//       válaszokgyűjtő.splice(i, 1);
//     }
//   }
// };

// WEBTARTALOM FELÜLÍRÁSA:

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal"); // Ha egy class több buttonhoz tartozik, akkot a sima qeurySelector parancs csak az első classt választja ki! Ezért kell az All a végére!!!!

// Funciotn-t írunk rá, hogy mit csináljon, ha meg akarjuk nyitni klikkeléssel az ablakot!

const openModal = function () {
  modal.classList.remove("hidden"); //ITT NEM KELL A hidden ELÉ PONT!!!!!!
  overlay.classList.remove("hidden");
};

// Funciotn-t írunk rá, hogy mit csináljon, ha be akarjuk zárni klikkeléssel az ablakot!

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Itt hívjuk meg a fent létrehozott függvényeket a klikk után az eventlistenerbe ágyazva. ITT NEM KELL UTÁNA ZÁRÓJEL, HISZEN AKKOR MAGÁTÓL LEFUTNA, DE MI AZT AKARJUK, HOGY CSAK AKKOR FUSSON LE, HA KLIKKELÜNK ELŐTTE!!!!!

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// ESC billentyű megnyomásával így tudjuk bezárni az ablakot:

// A keydown parancs azt jelenti, hogy lenyomunk egy gombot (bármilyen gombot!). Van még keypress (nyomva tartunk egy gombot) és keyup (felengedük egy gombot) parancs is!!!

// Az IF-el adjuk meg, hogy milyen gomb megnyomására történjen az esemény (itt más feltétel is tartozik hozzá, konkrétan az, hogy ne legyen elrejtve az ablak, vagyis éppen legyen megjelenítve!)

// A function után zárójelbe mindenképpen kell legyen valami, mert itt definiáljuk, hogy tudni akarjuk a lenyomott billyentyűt!!! Itt "e" nevet kapott, de lehetett volna más is.

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
