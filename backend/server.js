const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const router = require('./routers/egRouters');
const todoRouter = require('./routers/todoRouters');
dotenv.config();
const app = express();
const PORT=3000;
connectDB();
app.use(express.json());
app.use(cors());
app.use(router);
app.use('/todo', todoRouter);
app.listen(PORT, () => {
    console.log(`Server is a running on port http://localhost:${PORT}`);
})