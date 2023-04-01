const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://ambuj:4614@cluster0.j9fakum.mongodb.net/sells")
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log("Could not connect to MongoDB",err))
