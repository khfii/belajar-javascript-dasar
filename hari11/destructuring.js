/**
 * Destructuring adalah suatu fitur javascript yaitu membongkar value yang ada pada array atau objek ke dalam variabel variabel
 * Fitur ini mempermudah dalam pengambilan data dari array atau object tanpa harus membongkar value satu persatu
 */

// penggunaan array tanpa destructuring
const fullName = ["Muhammad", "Ashabul", "Kahfi"];

const firstName = fullName[0];
const middleName = fullName[1];
const lastName = fullName[2];

console.log(firstName);
console.log(middleName);
console.log(lastName);

// mengggunakan destructuring pada array
{
    const person = ["kahfi", "zidan", "bambang", "adi"];

const [firstPerson, secondPerson, thirdPerson, fourthPerson, ...others] =
  person;

console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);
console.log(fourthPerson);
console.log(others);
}

// menggunakan descructuring pada object
const people = {
  name: "Ashabul Kahfi",
  gender: "Male",
  city: "Banjarmasin",
  country: "Indonesia",
  addres: {
    street: "Jalan Raya malang",
    komplek: "Buaya Permai",
  },
};

// penggunaan tanpa destructuring
const names = people.name;
const genders = people.gender;
const citys = people.city;
const address = `Jalan ${people.addres.street} Komplek ${people.addres.komplek}`;
console.log(address);

// menggunakan descructuring pada objek
let { name, gender, city, country, addres, ...others } = people;

console.log(addres);
