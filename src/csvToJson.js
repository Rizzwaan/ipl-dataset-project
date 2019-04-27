// function to convert csv to json

function convertCsvToJson (filename) {
  const csvToJson = require('convert-csv-to-json');
  let jsonObject = csvToJson.fieldDelimiter(',').getJsonFromCsv(filename);

  return jsonObject;
}

// exporting this function
module.exports = convertCsvToJson;