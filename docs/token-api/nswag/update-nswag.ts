const fs = require("fs");
const bundler = require("./spec-bundler");
const nswagFileName = "./docs/token-api/nswag/token-api-client.nswag";

bundler.mergeSpec().then((bundle) => {
    let nswagFileContent = fs.readFileSync(nswagFileName);
    const nswagFile = JSON.parse(nswagFileContent.toString());

    nswagFile.documentGenerator.fromDocument.json = bundle.spec;

    fs.writeFile(
        nswagFileName,
        JSON.stringify(nswagFile, null, 2),
        function writeJSON(err) {
            if (err) return console.log(err);
            console.log("writing to " + nswagFileName);
        }
    );

}).catch((error) => {
    console.error(error)
    return process.exit(1)
});

