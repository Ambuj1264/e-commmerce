const express=require("express")
const app=express();
const db=require("./connection/connection")
const port= 4500
const cors=require("cors")
const router=require("./routes/router")
const fileUpload = require('express-fileupload');
// const passport = require('passport');



app.use(cors())


// app.use(passport.initialize());
// app.use(passport.session());
app.use(fileUpload({
    useTempFiles : true,
}));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.get('/', (req, res) => {
  res.send('Hey this is my API running')
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
}
)

