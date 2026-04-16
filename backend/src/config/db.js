import mongoose from "mongoose"

export const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo db connected successfully")
    } catch (error) {
        console.log("mongo db connection failed",error)
        process.exit(1) // 1 status code is for error
    }
}