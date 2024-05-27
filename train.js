// D-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala
// string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// @MITASK

const vacant1 = [];
const vacant2 = [];

function checkContent(a, b) {
  for (let value of a) vacant1.push(value);
  for (let value of b) vacant2.push(value);

  if (vacant1.sort().join("") == vacant2.sort().join("")) return true;
  else return false;
}

console.log(checkContent("mitgroup", "gmtiprou"));
console.log(checkContent("hjgfk", "jfgkh"));
