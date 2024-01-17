import {connectMongoDB} from "@/lib/mongodb"
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function POST (req:any){
 await connectMongoDB();

    try{
        console.log("1111111111")
        const{name,email,password,confirmpassword}=await req.json();
        console.log("222222222222")
        const data = await User.create({ name, email, password, confirmpassword })
        console.log("333333333333",data)
        console.log(name,email,password,confirmpassword)
        
        return NextResponse.json({message:"User Registered."},{status:201});
    } catch(error){
        return NextResponse.json({message:"An Error Occured While Registering the User."},{status:500})
    }
}