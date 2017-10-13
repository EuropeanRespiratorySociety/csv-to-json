const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'JSON', 'file-name.json');
const csvPath = path.join(__dirname, '..', 'CSV', 'source.csv');

let keys = [];
let relations = [];

fs.createReadStream(csvPath)
  .pipe(csv())
  .on('data', data => {
    // prepare data here
    console.log(data)
  })
  // .on('end', () => {

  //   // Saving the file
  //   // save(JSON.stringify(), jsonPath);
  // });  

// Helper function
function save(data, path) {
  if(fs.existsSync(path)){
    console.log('A file in path: ' + path + ' already exists, deleting it...');
    fs.unlink(path, function(err, data){
      if (err){
        console.log(err);
      } else {
        console.log('Output file deleted.');
      }
    });
  }

  fs.writeFile(path, data, {flag: 'w+'}, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('File saved! Ready to import');
  });
}