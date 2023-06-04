/**
 * Anonumous function
 * sebuah function yang tidak memiliki nama
 * disimpan dalam sebuah variabel
 */

let personDetail = function (name, gender) {
  let result = `Name : ${name}, Gender : ${gender}`;
  return result;
};

console.log(
  personDetail("Ashabul kahfi", "Laki-laki", "Jln.desa Pulau alalak")
);
 
