import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-tys0xwn-shard-00-00.ted9ab8.mongodb.net:27017,ac-tys0xwn-shard-00-01.ted9ab8.mongodb.net:27017,ac-tys0xwn-shard-00-02.ted9ab8.mongodb.net:27017/?ssl=true&replicaSet=atlas-7inmtq-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;
