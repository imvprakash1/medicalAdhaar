const mongoose=require('mongoose')
const personalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
});

const personal=mongoose.model('personal',personalSchema);
module.exports=personal;
