const bilangan = 1;
const huruf = "1";

document.writeln(`${bilangan}`);
document.writeln(typeof bilangan);

document.writeln("<br>");

document.writeln(`${huruf}`);
document.writeln(typeof huruf);

document.writeln("<br>");

// konversi dari string ke number
const hurufPertama = "1";
// tipe data sebelum di konversi
document.writeln(typeof hurufPertama);
document.writeln("<br>");
// tipe data setelah dikonversi
document.writeln(typeof parseInt(hurufPertama));

document.writeln("<br>");
const angka = 1; 
// tiped data sebelum dikonversi 
document.writeln(typeof(angka)); 
// tipe data setelah dikonversi
document.writeln("<br>");
document.writeln(typeof(angka.toString())); 

document.writeln("<br>");
const bilanganBulat = 3.14; 
document.writeln(typeof(bilanganBulat)); 
