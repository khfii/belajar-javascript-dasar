/**
 * function rest parameter
 * sebuah function dimana kita bisa memasukan parameter sebanyak mungkin tanpa batasan
 *
 */

function sum(name, ...amount) {
  let total = 0;
  for (const item of amount) {
    total += item;
  }

  console.log(`Total ${name} adalah ${total}`);

  return total;
}

sum("Apel", 3, 4, 2);
const values = [20, 30, 40, 50];
// menambahkan data berupa array pada rest parameter
sum("Mangga", ...values);
