const path = require('path');
const fs = require('fs');

const { writeCSVHeader, writeCSV } = require('./csvwriter.js');
const {
  writeUser,
  writeUserCategories,
  writeUserPlants,
} = require('./randomDataGenerators.js');

const deleteFileIfExists = (dest) => {
  if (fs.existsSync(dest)) {
    try {
      fs.unlinkSync(dest);
      console.log('CSV file deleted');
    } catch (err) {
      console.error(err);
    }
  } else {
    return;
  }
};

const users = 13;

///////////////
//// USERS ////
const usersCSVDest = path.join(__dirname, 'usersCSV.csv');
deleteFileIfExists(usersCSVDest);
const usersCSV = fs.createWriteStream(usersCSVDest);

var userHeader = 'user_id,user_pw,full_name\n';
writeCSVHeader(usersCSV, userHeader, () => {
  console.log('ending header write');
  usersCSV.end();
});

console.time();
writeCSV(usersCSV, writeUser, users, () => {
  console.log('ending users data write');
  usersCSV.end();
});
console.timeEnd();

////////////////////
//// CATEGORIES ////

const categoriesCSVDest = path.join(__dirname, 'categoriesCSV.csv');
deleteFileIfExists(categoriesCSVDest);
const categoriesCSV = fs.createWriteStream(categoriesCSVDest);

var categoriesHeader = 'category_value,category_label,user_id\n';
writeCSVHeader(categoriesCSV, categoriesHeader, () => {
  categoriesCSV.end();
});

console.time();
writeCSV(categoriesCSV, writeUserCategories, users, () => {
  categoriesCSV.end();
});
console.timeEnd();

////////////////
//// PLANTS ////

const plantsCSVDest = path.join(__dirname, 'plantsCSV.csv');
deleteFileIfExists(plantsCSVDest);
const plantsCSV = fs.createWriteStream(plantsCSVDest);

var plantsHeader =
  'plant_name,nickname,light,exposure,watering_times,watering_weeks,last_watered,humidity,photoURL,added,user_id\n';
writeCSVHeader(plantsCSV, plantsHeader, () => {
  plantsCSV.end();
});

console.time();

writeCSV(plantsCSV, writeUserPlants, users, () => {
  plantsCSV.end();
});

console.timeEnd();
