/**
 *
 * function as value
 * dalam javascript kita bisa menyimpan value pada function dalam sebuah variabel
 */
function person(name, male) {
  console.log(`Name : ${name} gender : ${male}`);
}

let result = person;
result("Ashabul Kahfi", "Laki-laki");

function faktorial(inputNumber) {
  faktor = 1;
  for (number = 1; number <= inputNumber; number++) {
    faktor = faktor * number;
    console.log(faktor);
  }
  return faktor;
}

console.log(faktorial(5));
