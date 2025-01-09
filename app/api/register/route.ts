import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest){
    await dbConnect();
    const {name,email,password} = await req.json();
   
    try{
        await new User({
            name,
            email,
            password:bcrypt.hashSync(password,10),
        }).save();
        return NextResponse.json({message:"User created successfully"});
    }catch(err: unknown){
        
        let message= 'An unknown error occurred';
        const status = 422;

        if (err instanceof Error) {
            message = err.message;
            return NextResponse.json({message},{status});
        }
        return NextResponse.json({message},{status});
    }    
}