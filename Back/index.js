require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/DB');
const errorHandler = require('./middlewares/error');

// Parse the incoming requests with JSON payloads (based on body-parser)
app.use(express.json());

// CORS 
// const cors = require('cors');
// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// }
// app.use(cors());

// DB connexion
connectDB();

// Basic Home route '/' returning Hello
app.get('/', (req, res) =>{
    res.send('Hello from back api !');
});

// .all works also for app to specify such middleware even if middleware coule be passed in app.use('<my-route>', 'here', '<my-router>')
  // app.all('/products/*', (req, res, next) => {
  //   console.log('I am applied as expected')
  //   next()
  // })

// Import api routers
var products = require('./routes/ProductsRouter')

// Use api routers
app.use('/api/products', products);
app.use('/api/auth', require('./routes/AuthRouter')); // Shortcut
app.use('/api/private', require('./routes/PrivateRouterExample')); // Basics of private

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
