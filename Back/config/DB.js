const mongoose = require("mongoose");

const connectDB = async() => {
  try {
    await mongoose.connect(process.env.DB_URI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    });
    console.log('MongoDB Connected...')
  } catch (error) {
    console.error('MongoDB connection FAIL');
    process.exit(1);
  }
};

module.exports = connectDB;
    