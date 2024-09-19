const express = require ('express');
const router = require('./AuthFile/controller.js');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()
app.use('/',router)
const PORT = process.env.PORT
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})