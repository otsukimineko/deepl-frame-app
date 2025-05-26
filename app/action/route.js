// app/action/route.js

export async function GET() {
  return new Response(
    JSON.stringify({
      name: "DeepL Translate",
      icon: "translate", // 好きなアイコンに変更可（例: "globe", "book", "diamond"など）
      description: "Translate text using DeepL API",
      aboutUrl: "https://deepl-frame-app.vercel.app", // 説明ページなど（任意）
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
