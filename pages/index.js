import React, { useState } from 'react';

export default function TranslatePage() {
  const [text, setText] = useState('');
  const [targetLang, setTargetLang] = useState('EN');
  const [translated, setTranslated] = useState('');
  const [backTranslated, setBackTranslated] = useState('');
  const [showBackTranslation, setShowBackTranslation] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  
  const languages = [
    { code: 'JA', label: '日本語 (JA)' },
    { code: 'EN', label: '英語 (EN)' },
    { code: 'ZH', label: '中国語 (ZH)' },
    { code: 'VI', label: 'ベトナム語 (VI)' },
    { code: 'DE', label: 'ドイツ語 (DE)' },
    { code: 'RU', label: 'ロシア語 (RU)' },
    { code: 'KO', label: '韓国語 (KO)' },
  ];

  async function handleTranslate() {
    if (!text.trim()) return;
    
    // 翻訳
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, target_lang: targetLang }),
    });
    const data = await res.json();
    setTranslated(data.translation);
    setCopySuccess('');

    // 再翻訳 (英語のみ or 全言語OKにするかは要検討。ここはtargetLangに応じてEN固定でやる例)
    const backRes = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: data.translation, target_lang: 'JA' }),
    });
    const backData = await backRes.json();
    setBackTranslated(backData.translation);
  }

  function copyToClipboard() {
    if (!translated) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(translated)
        .then(() => {
          setCopySuccess('Success');
          setTimeout(() => setCopySuccess(''), 2000);
        })
        .catch(() => setCopySuccess('Failed'));
    } else {
      setCopySuccess('Clipboard API not supported');
    }
  }

  return (
    <div style={{ fontSize: '16px', maxWidth: '420px', margin: 'auto', padding: '20px' }}>
      <h1>DeepL 翻訳</h1>

      <h2>原文（翻訳したい文章）:</h2>
      <textarea
        placeholder="翻訳したい文章を入力"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        style={{ width: '100%', fontSize: '16px' }}
      />

      <label style={{ marginTop: '10px', display: 'block' }}>
        翻訳先言語:
        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          style={{ marginLeft: '10px' }}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleTranslate} style={{ marginTop: '10px' }}>
        翻訳する
      </button>

      {translated && (
        <>
          <h2>翻訳結果 ({targetLang}):</h2>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              border: '1px solid #ccc',
              padding: '10px',
              minHeight: '50px',
              width: '100%',
              fontSize: '16px',
              backgroundColor: '#f9f9f9',
            }}
          >
            {showBackTranslation ? backTranslated : translated}
          </div>
          <button onClick={copyToClipboard} style={{ marginTop: '8px' }}>
            CLIP
          </button>

          <button
            onClick={() => setShowBackTranslation(!showBackTranslation)}
            style={{ marginLeft: '10px', marginTop: '8px' }}
          >
            {showBackTranslation ? '翻訳結果に戻す' : '再翻訳を表示'}
          </button>
        </>
      )}

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#555' }}>
        <a
          href="https://farcaster.xyz/otsukimineko"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          ≪If you find this translation helpful, please consider sending me a tip(DEGEN, HUNT) on Warpcast!≫
        </a>
      </p>

      {copySuccess && <p style={{ color: copySuccess === 'Success' ? 'green' : 'red' }}>{copySuccess}</p>}
    </div>
  );
}
