import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const formdata = await request.formData();
        const email = formdata.get('email');
        const phone = formdata.get('phone');
        const msg = formdata.get('message');
        console.log(email,phone,msg);
        
        return NextResponse.json({msg:"Done!"})
        
    } catch (error) {
        return NextResponse.json({status:'Submission failed'})
    }
}