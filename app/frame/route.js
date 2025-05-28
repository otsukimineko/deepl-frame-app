export async function GET() {
  return new Response(
    JSON.stringify({
      type: 'frame',
      title: 'DeepL 翻訳 Frame',
      image: 'https://deepl-frame-app.vercel.app/og.png',
      icon: 'https://deepl-frame-app.vercel.app/icon.png',
      buttons: [
        { label: '翻訳する', action: 'post' }
      ],
      postUrl: 'https://deepl-frame-app.vercel.app/api/translate?v=2'
    }),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
  );
}
