const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('PROCESS is', process.env);
        const connect = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected ${connect.connection.host}`);
    } catch (error) {
        console.log('error is :', error);
        process.exit(1);
    }
};

module.exports = connectDB;
