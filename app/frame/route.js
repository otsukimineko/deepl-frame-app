// app/frame/route.js

export async function GET() {
  return new Response("Hello from /frame GET");
}

export async function POST(req) {
  const body = await req.json();
  const input = body?.untrustedData?.inputText ?? 'No input';

  try {
    const res = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
      },
      body: new URLSearchParams({
        text: input,
        target_lang: 'EN', // 一時的に言語固定（まずは動作確認）
      }),
    });

    const data = await res.json();

    // DeepLのレスポンスをまるごと返す（デバッグ用）
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}
