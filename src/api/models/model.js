const mongoose =require('mongoose');
const studentSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,    
    },
password: {
    type: String,
    required: true,  
},

})
var studentdata=mongoose.model('studentdata',studentSchema);
module.exports= studentdata;