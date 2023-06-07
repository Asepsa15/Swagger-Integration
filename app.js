const express = require('express');
const app = express();
const router = require('./src/routes/router');
const database = require('./database/database');
const swaggerApp = require('./src/swagger/swagger');

app.use('/', swaggerApp);

app.use(express.json());

app.use('/', router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
