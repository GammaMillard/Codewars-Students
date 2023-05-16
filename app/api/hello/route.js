

export async function GET(req) {
    console.log(req);
    return new Response(JSON.stringify({message : 'hello'}))
}


export async function POST(req) {
    console.log(req);
    return new Response(JSON.stringify({message : 'hello'}))
}