// app/frame/route.js

export async function GET() {
  return new Response("Hello from /frame GET");
}

export async function POST(req) {
  const body = await req.json();
  const input = body?.untrustedData?.inputText ?? 'No input';

  const res = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
    },
    body: new URLSearchParams({
      text: input,
      target_lang: 'JA', // 日本語へ翻訳
    }),
  });

  const data = await res.json();
  const translation = data.translations?.[0]?.text ?? '翻訳失敗';

  return new Response(translation);
}
