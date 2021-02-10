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

  // for (var i = 0; i < total; i++) {
  //   let user = {
  //     user_id: 'user' + (i + 1),
  //     user_pw: 'plantword',
  //     full_name: faker.name.findName(),
  //   };
  // }
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

    // catObj = {
    //   category_value: convertToValue(cat),
    //   category_label: cat,
    //   user_id: userId,
    // };
    // resultCats.push(catObj);
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
    plants += `${'Basil'},${'Bae'},${'bright'},${1},${1},${'2020-01-20'},${'low'},${faker.random.image()},${userId}\n`;

    records++;
    // let p = {
    //   plant_name: 'Basil',
    //   nickname: 'Basil',
    //   light: 'bright',
    //   watering_times: 1,
    //   watering_weeks: 1,
    //   last_watered: '2021-01-30',
    //   humidity: 'low',
    //   photoURL: faker.random.image(),
    //   user_id: userId,
    // };
    // plants.push(plantObj);
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
