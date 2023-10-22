import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.URI)
    } catch (error) {
        console.log(error);
    }
}