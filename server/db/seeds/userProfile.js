const faker = require('faker');

// get random number
var getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min) + min);
  return random ? random : null;
};

// create random user
const writeUser = (total) => {

  var users = [];

  for (var i = 0; i < total; i++) {
    users.push(
      {
        user_id : 'user' + (i + 1),
        user_pw : 'plantword',
        full_name : faker.name.findName()
      }
    )
  }
  console.log(users);
  return users;
}

// create categories for each
const categories = ['Chill AF', 'Succulent', 'Herb', 'High-Maintenance', 'Outdoor', 'Indoor', 'Tropical', 'Flowering', 'Tree', 'Variegated', 'Air plant'];

const writeUserCategories = () => {
  var userCategories = [];

  var total = getRandomNum(1, categories.length - 1)
  console.log(total);
  var used = {};
  var i = 0
  while (i < total) {
    var random = getRandomNum(0, categories.length);
    if (!used[String(random)]) {
      used[String(random)] = true;
      userCategories.push(categories[random]);
      i++;
    }
  }
  console.log(userCategories);
  return userCategories;
}

writeUserCategories(3);

// create plant data for each


