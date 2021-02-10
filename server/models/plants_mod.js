const db = require('../db/postgres.js');


const testModel = (cb) => {
  console.log('model tested');

  db.Pool.query(`SELECT * FROM users`, cb)

}

module.exports = {
  testModel
}