const prettyMilliseconds = require('pretty-ms');
const { terminalBanner } = require('terminal-banner');
const readXlsxFile = require('read-excel-file/node');
const pluralize = require('pluralize');
const glob = require('glob');
const fs = require('fs-extra');

// options is optional
glob('**/*.js', null, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  console.log(files);
});

console.log(prettyMilliseconds(1337000000));
terminalBanner('this is good', '~');

pluralize('fox', 5);

// // File path.
// readXlsxFile('/path/to/file').then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
// })

// // Readable Stream.
// readXlsxFile(fs.createReadStream('/path/to/file')).then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
// })
