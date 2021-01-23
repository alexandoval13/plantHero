require('dotenv').config();
const app = require('./router.js');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connected to this server at port ${port}`);
});