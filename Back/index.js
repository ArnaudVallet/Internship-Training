require('dotenv').config();
const express = require('express');
const app = express();
const errorHandler = require('./middlewares/error');
const path = require('path');
global.appRoot = path.resolve(__dirname);

// Parse the incoming requests with JSON payloads (based on body-parser)
app.use(express.json());

// CORS 
// const cors = require('cors');
// var corsOptions = { origin: 'http://localhost:3000', optionsSuccessStatus: 200 }
// app.use(cors());

// DB connexion 
require('./config/DB')(); //this executes the connectDB() from require

// Routes index
require('./routes')(app);

// Error Handler --> Must be the last middleware called
app.use(errorHandler);

// Application running and listening
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>{
    console.log(`Training app listening at http://localhost:${PORT}`);
});

// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Logged Error: ${err}`);
//   server.close(()=> process.exit(1));
// })
