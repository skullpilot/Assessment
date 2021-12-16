const csv = require("csv-parser");
const fs = require("fs");
const { open } = require("fs/promises");

async function getSum(file) {
  const fd = await open(file);
  const data = fd.createReadStream();
  console.log(data);
}
getSum("sample.csv");

// function getSum(fileName) {
//   let sum = 0;
//   return new Promise((resolve, reject) => {
//     fs.createReadStream(fileName)
//       .on("error", (error) => {
//         reject(error);
//       })
//       .pipe(csv({}))
//       .on("data", (data) => (sum += parseInt(data.value)))
//       .on("end", () => {
//         resolve(sum);
//       });
//   });
// }

// (async () => {
//   console.log(await getSum("sample.csv"));
// })();
// console.log(getSum("sample.csv"));
