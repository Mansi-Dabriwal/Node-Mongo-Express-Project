const express= require('express');
const mongoose= require('mongoose');
const cors = require('cors')
const app=express();

const url= "mongodb+srv://mansi_dabriwal:Mansi123@cluster0.bbea8f1.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(cors());
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const port=3001;
app.listen(port, () =>{
    console.log('Server started');
})

const studentrouter= require("./routes/students");
app.use('/user',studentrouter)