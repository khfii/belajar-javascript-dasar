const firstName = "Ashabul";
const secondName = "Kahfi";
const thirdName = "Sangat";
const fourthName = "Keren";

console.log(`${firstName} ${secondName} ${thirdName} ${fourthName}`);

const nilai = 40;
const name = "ashabul kahfi";

const keterangan = `nilai : ${nilai} Keterangan lulus ${nilai < 50}`;

const multiLineTemplate = `
Nama saya adalah ${name}
${keterangan}
`;

console.info(multiLineTemplate);

const value1 = 1;
const value2 = "1";
const value3 = 5.3;
// mengkonversi dari string ke number
const sum = Number(value2) + value1;


const sum1 = parseInt(value1) + parseInt(value2);
const sum2 = value1 + parseFloat(value3);

document.writeln(`<p> ${sum}</p>`);
document.writeln(`<p> ${sum1}</p>`);
document.writeln(`<p> ${sum2}</p>`);
