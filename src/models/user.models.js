import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true
    },
    email : { 
        type:String,
        unique:true,
        require:true,
        trim:true
    },
    password:{
        type:String,
       require: true

    }
},{
    timestamps: true // adds createdAt and updateAt fields to the schema
});

export default mongoose.model("User", userSchema );