const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect(process.env.DB_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
};

module.exports = connectDB;
    