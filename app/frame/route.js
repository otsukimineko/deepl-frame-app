export async function GET() {
  return new Response("Hello from /frame GET");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const input = body?.untrustedData?.inputText ?? 'No input';
    const targetLang = body?.untrustedData?.targetLang ?? 'EN';

    const res = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
      },
      body: new URLSearchParams({
        text: input,
        target_lang: targetLang,
      }),
    });

    const data = await res.json();

    const translation = data?.translations?.[0]?.text ?? 'Translation failed';

    return new Response(translation);
  } catch (error) {
    console.error('Translation error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
