const fs = require("node:fs");
// Зчитування файлу за допомогою FS.
const data = fs.readFile("data.json", (err, data) => {
    if (err === null) {
        console.log(data.toString());
    } else {
        console.log(err);
    }

// Запис файлу за допомогою FS.
const jsonData = JSON.parse(data);

let outputString = '';

// Потрібно пройтись по кожному запису у JSON
jsonData.forEach(record => {
  const stockCode = record.StockCode;
  const valCode = record.ValCode;
  const attraction = record.Attraction;

  // Це додає дані у рядок з результатами
  outputString += `${stockCode}-${valCode}-${attraction}\n`;
});

// Записує рядок з результатами у файл
fs.writeFile("output.txt", outputString, (err) => {
  if (err) {
    console.log("Error!"(err));
    return;
  }
  console.log("Результати були збережені у файлі output.txt");
});
});