// app/action/route.js

export async function GET() {
  return new Response(
    JSON.stringify({
      name: "DeepL Translate",
      icon: "translate",
      description: "Translate text using DeepL API",
      aboutUrl: "https://deepl-frame-app.vercel.app/about?v=2",
      action: {
        type: "post",
        postUrl: "https://deepl-frame-app.vercel.app/api/translate?v=2"
      }
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
