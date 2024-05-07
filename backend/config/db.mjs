import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn; // Return the connection object if successful
    } catch (err) {
        throw new Error(`MongoDB connection error: ${err.message}`);
    }
};

export default connectDB;
