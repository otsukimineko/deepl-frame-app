// app/frame/route.js

export async function GET() {
  return new Response("Hello from /frame GET");
}

export async function POST(req) {
  const body = await req.json();
  const input = body?.untrustedData?.inputText ?? 'No input';
  return new Response(`You sent: ${input}`);
}
