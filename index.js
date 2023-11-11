require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const server = express(); 
const cors = require('cors');
const {router} = require('/Routes/Product');
const {userRouter} = require('/Routes/User');

// db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected');
}




// body parser
server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/users' , userRouter);
server.use('/products' , router);

console.log('env',process.env.DB_PASSWORD)

server.listen(process.env.PORT,() => {
    console.log("server started hello world");
});