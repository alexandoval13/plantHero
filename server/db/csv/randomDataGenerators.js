// HELPER FUNCTIONS AND DATA
const faker = require('faker');

const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

const convertToValue = (string) => {
  let str = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      str += '-';
    } else {
      str += string[i].toLowerCase();
    }
  }
  return str;
};

const categories = [
  'Chill AF',
  'Succulent',
  'Herb',
  'High-Maintenance',
  'Outdoor',
  'Indoor',
  'Tropical',
  'Flowering',
  'Tree',
  'Variegated',
  'Air plant',
];

const populateCategoriesArr = (total) => {
  var userCategories = [];
  var used = {};

  var i = 0;
  while (i < total) {
    var random = getRandomNum(0, categories.length);
    if (!used[String(random)]) {
      used[String(random)] = true;
      userCategories.push(categories[random]);
      i++;
    }
  }
  return userCategories;
};

// CREATE RANDOM USER
const writeUser = (userId) => {
  userString = `${'user' + userId},plantword,${faker.name.findName()}\n`;

  console.log('USER:', userString);
  return userString;
};

// CREATE RANDOM CATEGORY OBJECT FOR ONE USER
const writeUserCategories = (userId, x) => {
  var resultCats = '';

  if (x === undefined || x > categories.length) {
    var x = getRandomNum(1, categories.length - 1);
  }
  let randomCats = populateCategoriesArr(x);

  randomCats.forEach((cat) => {
    resultCats += `${convertToValue(cat)},${cat},${userId}\n`;
  });
  console.log('CATEGORIES:', resultCats);
  return resultCats;
};

// CREATE A RANDOM USER PLANTS OBJECT FOR ONE USER
const writeUserPlants = (userId, x) => {
  let plants = '';
  if (x === undefined) {
    var x = getRandomNum(0, 6);
  }

  let records = 0;
  while (records < x) {
    plants += `${'Basil'},${'Bae'},${'bright'},${'direct'},${1},${7},${'2021-01-20'},${'low'},${faker.random.image()},${'2021-01-13'},${userId}\n`;

    records++;
  }
  console.log('PLANTS:', plants);
  return plants;
};

writeUser(1);
writeUserCategories(1);
writeUserPlants(1);

module.exports = {
  writeUser,
  writeUserCategories,
  writeUserPlants,
};
