console.clear();

/// 1.

const a = 65;
console.log(a);

const b = 74;
console.log(b);

const c = 38665;
console.log(c);

/// 2.

const one = 'Labas';
console.log(one);

const two = 'tau';
console.log(two);

const three = 'sakau';
console.log(three);

/// 3.

const eile = [1, 2, 3, 4, 5];
console.log(eile);

const pazymiai = [10, 2, 5, 9, 8];
console.log(pazymiai);

const skaiciai = [5631, 265, 433, 443, 555,];
console.log(skaiciai);

/// 4.

const vardai = ['Jonas', 'Maryte', 'Ona'];
console.log(vardai);

const baldai = ['kede', 'stalas', 'lova', 'spinta'];
console.log(baldai);

const geles = ['tulpe', 'roze', 'narcizas'];
console.log(geles);

// veiksmai su kintamaisiais:
// 1. 

let suma = 0;
console.log(suma);

suma += 65;
console.log(suma);

suma += 74;
console.log(suma);

suma += 38665;
console.log(suma);

// 2. 

const words = one + " " + two + " " + three;
console.log(words);

// 3.

const number = [34, 44, 21, 3, 29, 4];
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);
console.log(number[5]);

let ats = 0;
ats += number[1];
console.log(ats);
ats -= number[2];
console.log(ats);
ats += number[3];
console.log(ats);
ats -= number[4];
console.log(ats);
ats += number[5];
console.log(ats);

// 4.

const baldai2 = ['kede', 'stalas', 'lova', 'spinta'];
const word3 = baldai2[3];
console.log(word3);
const word2 = baldai2[2];
console.log(word2);
const word1 = baldai2[1];
console.log(word1);
const word0 = baldai2[0];
console.log(word0);

baldai3 = `${word3}, ${word2}, ${word1}, ${word0}`;
console.log(baldai3);