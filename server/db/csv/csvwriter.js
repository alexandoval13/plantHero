const writeCSVHeader = (csvfile, header, end) => {
  csvfile.write(header, 'utf8', end);
};
const writeCSV = (csvfile, dataFunc, amount, end) => {
  var i = amount;
  var x = 1;

  const write = () => {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // console.log('writing last row', x);
        csvfile.write(dataFunc(x), 'utf8', end);
      } else {
        if (i % 1000000 === 0) {
          console.log('===');
        }
        // console.log('writing ', x);
        // console.log(i, ' left to go');
        ok = csvfile.write(dataFunc(x), 'utf8');
        x++;
      }
    } while (i > 0 && ok);
    if (i > 0) {
      csvfile.once('drain', write);
    }
  };
  write();
};

module.exports = {
  writeCSVHeader,
  writeCSV,
};
