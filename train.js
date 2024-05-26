// MITASK-C

// Shunday class tuzing uning nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// @MITASK
const moment = require("moment");

class Shop {
  non;
  lagmon;
  cola;
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    console.log(
      `Hozir ${moment().format("h:mm")} da ${this.non} ta non ${
        this.lagmon
      } ta lagmon va ${this.cola} cola mavjud!`
    );
  }

  sotish(product, amount) {
    console.log(`${product}, ${amount}`);
    this.non -= amount;
  }

  qabul(product, amount) {
    console.log(`${product}, ${amount}`);
    this.cola += amount;
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

// B-TASK:
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// @MITASK

// const validator = require("validator");

// let count = 0;
// const countDigits = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//     if (validator.isNumeric(str[i])) {
//       count++;
//     }
//   }
//   return count;
// };

// countDigits("ad2a54y79wet0sfgb9");
// console.log(count);

// A-TASK

/* Shunday 2 parametrlik function tuzing, hamda brinchi parameterdagi letterni |
ikkinchi parametrdagi sozdan qatnashgan sonini return qilishi kerak boldadi.
MASALAN countLetter("e" "engineer") 3ni return qilishi kerak.
*/

// let count = 0;

// const countLetter = (a, b) => {
//   for (let i = 0; i <= b.length - 1; i++) {
//     if (b[i] === a) {
//       count++;
//     }
//   }
//   return count;
// };
// countLetter("e", "engineer");
// console.log(count);

// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xoto qiling", // 20-30
//   "uzingiz ustida ishlang", // 30-40
//   "siz kuchlik bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling",
// ];

// asynchronous function

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 2000);
//     });
//   }
// }
//   setTimeout(() => {
//     resolve(list[5]);
//   }, 3000);

// async await

// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(53);
//   console.log(javob);
// }

// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
// }

// run();

/* 
// then/catch

console.log("passed here 0");
maslahatBering(45)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("Error", err);
  });
  console.log("passed here 1");
  */

//Callback funtion

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xoto qiling", // 20-30
//   "uzingiz ustida ishlang", // 30-40
//   "siz kuchlik bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling",
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(() => {
//       callback(null, list[5]);
//     }, 3000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(77, (err, data) => {
//   if (err) console.log(err);
//   else {
//     console.log(data);
//   }
// });
// console.log("passed here 1");

// maslahatBering(25)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
