const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://ambuj:ambuj@cluster0.ae2f0qd.mongodb.net/e-comm",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log("Could not connect to MongoDB",err))
