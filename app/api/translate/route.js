// app/api/translate/route.js

export async function POST(req) {
  const body = await req.json();

  // 仮に原文をそのまま返す
  return new Response(
    JSON.stringify({
      translatedText: `仮翻訳結果: ${body.input || '（原文なし）'}`
    }),
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    }
  );
}
