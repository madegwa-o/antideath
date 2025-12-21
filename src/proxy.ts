import {NextRequest, NextResponse} from "next/server";


export default function Proxy(req: NextRequest){

    return NextResponse.next()
}

