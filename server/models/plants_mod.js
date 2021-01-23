const testModel = (cb) => {
  console.log('model tested');

  cb(null, 'success');
}

module.exports = {
  testModel
}