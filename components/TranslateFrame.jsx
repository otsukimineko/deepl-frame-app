import { useState } from 'react';

export default function TranslateForm() {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [targetLang, setTargetLang] = useState('JA');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, targetLang }),
    });
    const data = await res.json();
    setTranslated(data.translation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="翻訳したいテキストを入力"
      />
      <br />
      <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
        <option value="JA">英 → 日</option>
        <option value="EN">日 → 英</option>
        <option value="ZH">英 → 中文</option>
        <option value="DE">英 → ドイツ語</option>
        {/* 必要ならもっと追加可 */}
      </select>
      <br />
      <button type="submit">翻訳する</button>
      <div>
        <h3>翻訳結果:</h3>
        <p>{translated}</p>
      </div>
    </form>
  );
}
