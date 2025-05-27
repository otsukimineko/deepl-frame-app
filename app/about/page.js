export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DeepL 翻訳 Cast Action の使い方</h1>
      <p className="mb-4">
        この Cast Action を Warpcast で有効化するには、下記のリンクをコピーして、
        <strong>スマートフォンのブラウザで開いてください</strong>：
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 break-all">
        <a
          href="https://warpcast.com/~/add-cast-action?url=https%3A%2F%2Fdeepl-frame-app.vercel.app%2Faction"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cast Action を追加する
        </a>
      </div>

      <h2 className="text-xl font-semibold mb-2">⚠️ 注意点</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>リンクは <strong>スマートフォンのブラウザ</strong> で開いてください。</li>
        <li>PC やアプリ内ブラウザでは正しく動作しないことがあります。</li>
        <li>有効化後、任意の Cast にこのアクションが表示され、翻訳機能が使えるようになります。</li>
      </ul>
    </div>
  );
}
