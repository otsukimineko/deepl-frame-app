export async function GET() {
  return new Response(
    JSON.stringify({
      name: "DeepL Translate",
      icon: "translate",
      description: "Translate text using DeepL API",
      aboutUrl: "https://deepl-frame-app.vercel.app/about",
      action: {
        type: "post",
        postUrl: "https://deepl-frame-app.vercel.app/api/translate" // ← 修正ここ
      }
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
