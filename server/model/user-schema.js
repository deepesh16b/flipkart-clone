import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        min : 1,
        max : 25
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },
    mobile : {
        type : String,
        required : true,
        unique : true,
        min : 3,
        max : 10
    },
    password : {
        type : String,
        required : true
    }
});

const user = mongoose.model('user', userSchema);

export default user;