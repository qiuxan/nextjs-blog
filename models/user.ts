import mongoose from "mongoose";
import mongooseUniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            required:true,
            unique:true,
            index:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:[String],
            default:["subscriber"],
        },
        image:String,
        resetCode:{
            data:String,
            expireAt:{
                type:Date,
                default:()=> new Date(Date.now() + 10 * 60 * 1000)
                
            }
        }
    },
    {timestamps:true}
);

userSchema.plugin(mongooseUniqueValidator, {message: "is already taken"});

export default mongoose.models.User || mongoose.model("User",userSchema);