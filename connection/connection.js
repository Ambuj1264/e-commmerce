const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://vercel-admin-user:AIjN1hlAynYpoXgL@cluster0.j9fakum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log("Could not connect to MongoDB",err))
