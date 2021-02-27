const db = require('../db/postgres.js').pool;

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

const addPlant = (plant, cb) => {
  let columns = '';
  let values = '';
  for (var key in plant) {
    columns.length ? (columns += `,${key}`) : (columns += key);
    values.length ? (values += `,${plant[key]}`) : (values += plant[key]);
  }

  let query = `
  INSERT INTO userplants(plant_name,nickname,light,exposure,watering_times,watering_days,last_watered,humidity,photourl,added,user_id) VALUES ('${plant['plant_name']}','${plant.nickname}','${plant.light}','${plant.exposure}',${plant['watering_times']},${plant['watering_days']},'${plant['last_watered']}','${plant.humidity}','${plant.photourl}','${plant.added}',${plant['user_id']});
  `;

  db.query(query, (err, res) => {
    if (err) {
      console.log('err');
      cb(err);
    } else {
      console.log('success');
      cb(res);
    }
  });
};

const updateWater = (info, cb) => {
  db.query(
    `UPDATE userplants
    SET last_watered = '${info.date}'
    WHERE id = ${info.id}`,
    (err, res) => {
      if (err) {
        console.log(err);
        cb(err);
      } else {
        console.log(res);
        cb(res);
      }
    }
  );
};

module.exports = {
  getUser,
  getPlants,
  getCategories,
  addPlant,
  updateWater,
};
