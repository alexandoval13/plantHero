const db = require('../db/postgres.js').pool;

// const testModel = (cb) => {
//   console.log('model tested');

//   db.Pool.query(`SELECT * FROM users`, cb)

// }
const getUser = (id, cb) => {
  console.log('getting user in mod', id);
  db.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
    console.log('line 12res');
    if (err) {
      console.log(err);
      cb(err);
    } else {
      console.log('res', res);
      cb(res.rows);
    }
  });
};

const getPlants = (id, cb) => {
  db.query(`SELECT * FROM userplants WHERE user_id = ${id}`, (err, res) => {
    console.log('in pool blocok...');
    if (err) {
      cb(err);
    } else {
      cb(res.rows);
    }
  });
};

const getCategories = (id, cb) => {
  db.query(`SELECT * FROM usercategories WHERE user_id = ${id}`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(res.rows);
    }
  });
};

module.exports = {
  // testModel,
  getUser,
  getPlants,
  getCategories,
};
