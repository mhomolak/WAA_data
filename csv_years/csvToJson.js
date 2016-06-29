var jsonfile = require('jsonfile')
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

converter.on("end_parsed", function (jsonArray) {
   console.log(jsonArray);
   // apparently jsonfile is a better way to write to a json file
   // fs.writeFile is better for writing to a .txt file
   jsonfile.writeFile("csv_years/2011-2015/2015.json", jsonArray, function (err) {
     console.error(err)
   })
});

require("fs").createReadStream("csv_years/2011-2015/2015.csv").pipe(converter);
