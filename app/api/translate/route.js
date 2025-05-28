// app/api/translate/route.js

export async function POST(req) {
  const body = await req.json();
  const text = body.input || '';
  const targetLang = body.lang || 'EN';

  const res = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
    },
    body: new URLSearchParams({
      text,
      target_lang: targetLang,
    }),
  });

  const data = await res.json();
  const translated = data.translations?.[0]?.text || '翻訳失敗';

  return new Response(
    JSON.stringify({ translatedText: translated }),
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    }
  );
}
