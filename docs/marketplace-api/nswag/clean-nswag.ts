const fs = require("fs");

const nswagFileName = "./nswag/marketplace-api-client.nswag";
let nswagFileContent = fs.readFileSync(nswagFileName);
const nswagFile = JSON.parse(nswagFileContent);

nswagFile.documentGenerator.fromDocument.json = "";

fs.writeFile(
  nswagFileName,
  JSON.stringify(nswagFile, null, 2),
  function writeJSON(err) {
    if (err) return console.log(err);
    console.log("writing to " + nswagFileName);
  }
);
