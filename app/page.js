'use client';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [targetLang, setTargetLang] = useState('EN');
  const [translated, setTranslated] = useState('');
  const [backTranslated, setBackTranslated] = useState('');
  const [showBackTranslation, setShowBackTranslation] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const handleTranslate = async () => {
    const res = await fetch('/frame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        untrustedData: {
          inputText: text,
          targetLang,
        },
      }),
    });

    const result = await res.text();
    setTranslated(result);
    setShowBackTranslation(false);
    setCopySuccess('');

    // 再翻訳（英→日など）
    const backLang = targetLang === 'JA' ? 'EN' : 'JA';
    const backRes = await fetch('/frame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        untrustedData: {
          inputText: result,
          targetLang: backLang,
        },
      }),
    });

    const backResult = await backRes.text();
    setBackTranslated(backResult);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(translated);
      setCopySuccess('Success');
    } catch (err) {
      setCopySuccess('Failed');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>DeepL 翻訳</h1>

      <label htmlFor="inputText">原文（翻訳したい文章）:</label>
      <textarea
        id="inputText"
        rows="5"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="翻訳したい文章を入力"
        style={{ display: 'block', width: '100%', marginTop: '8px' }}
      />

      <label htmlFor="targetLang" style={{ marginTop: '10px', display: 'block' }}>
        翻訳先言語:
      </label>
      <select
        id="targetLang"
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
        style={{ marginTop: '5px' }}
      >
        <option value="EN">英語 (EN)</option>
        <option value="JA">日本語 (JA)</option>
        <option value="ZH">中国語 (ZH)</option>
      </select>

      <br />
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
