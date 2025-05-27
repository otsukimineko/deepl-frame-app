export async function GET() {
  return new Response(
    JSON.stringify({
      name: "DeepL Translate",
      icon: "translate", // 任意のアイコンに変更可能
      description: "Translate text using DeepL API",
      aboutUrl: "https://deepl-frame-app.vercel.app/about",
      action: {
        type: "post",
        postUrl: "https://deepl-frame-app.vercel.app/frame"
      }
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
