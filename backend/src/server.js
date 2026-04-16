import express from "express"
import cors from "cors"
import dotenv from "dotenv"


import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import { rateLimiter } from "./middleware/rateLimiter.js"

// set type as module in package.json so no warning comes while running server otherwise use below command
// const express= require("express")
const app = express()

dotenv.config()
const PORT= process.env.PORT|| 5001

//middleware
app.use(cors({
 origin: "http://localhost:5173",
}
))
app.use(express.json()) // middleware for req.body access
app.use(rateLimiter)
//simple custom middleware
// app.use((req,res,next)=>{
// console.log(`middleware: ${req.method} & ${req.url}`)
// next()
// })

app.use("/api/notes",notesRoutes)



connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("hello from",PORT)   
    })                                                                                                                                                                                            
})

// aWsQjFowmbiTs3mz
// mongodb+srv://surbhipahwa36_db_user:UqgDpL2YA14BU4RA@cluster0.dizexqd.mongodb.net/notes_db?appName=Cluster0