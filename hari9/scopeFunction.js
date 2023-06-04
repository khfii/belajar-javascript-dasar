/**
 * Dalam beberapa bahasa pemograman sering sekali mengenal istilah scope atau bagaimana suatu variabel itu diakses
 * Terdapat dua jenis scope yang sering ditemui yaitu global scope dan local scope
 * Global scope terdapat di bagian atas atau di dalam sebuah class
 * Local scope biasanya terdapat di dalam sebuah function
 * Global scope bisa diakses dimana saja sesuai namanya
 * Local scope hanya bisa diakses di dalam sebuah function saja
 */

// contoh penggunaan global scope pada sebuah variabel
let number = 0;
let sentence;

function count() {
  number++;
  console.log(number);
  return number;
}

count();

// contoh penggunaan local scope pada sebuah variabel
function sayHello(name, sentence) {
  console.log(name);
  this.sentence = sentence;
  console.log(sentence);
  return name;
}

// mencoba mengakses variabel di dalam local scope
