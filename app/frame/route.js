export async function GET() {
  return new Response(
    JSON.stringify({
      type: 'frame',
      title: 'DeepL 翻訳 Frame',
      icon: 'https://deepl-frame-app.vercel.app/icon.png',
      buttons: [
        { label: '翻訳する', action: 'post' }
      ],
      postUrl: 'https://deepl-frame-app.vercel.app/api/translate'
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}
