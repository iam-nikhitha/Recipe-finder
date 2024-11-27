const mongoose = require('mongoose');


const connectDB = async (req,res) => {

    try {

        const connection  = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(`Host-Name : ${connection.connection.host} & Db-Name : ${connection.connection.name}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {connectDB};