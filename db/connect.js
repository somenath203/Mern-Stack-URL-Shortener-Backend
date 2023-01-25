const mongoose = require('mongoose');


mongoose.set('strictQuery', true);

const connectDB = () => {

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('conenction to mongoDB successful...');
        })
        .catch((err) => {
            console.log(err.message);
        });

};


module.exports = {
    connectDB
};