export async function GET() {
  return new Response(
    JSON.stringify({
      type: 'frame',
      title: 'DeepL 翻訳 Frame',
      image: 'https://deepl-frame-app.vercel.app/og.png', // 好きなOG画像URL
      icon: 'https://deepl-frame-app.vercel.app/icon.png', // 好きなアイコンURL
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
