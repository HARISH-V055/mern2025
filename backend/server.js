const express = require('express');

const dotenv = require('dotenv');

const connectDB = require('./config/db');

const router = require('./Routers/egRouters');

dotenv.config();

const app = express();

const PORT=3000;

connectDB();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {

    console.log(`Server is running on port http://localhost:${PORT}`);

})