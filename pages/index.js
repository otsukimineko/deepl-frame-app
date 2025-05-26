import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DeepL Frame</title>
        <meta name="description" content="Translate any text using DeepL." />
        <meta property="og:title" content="DeepL Translator Frame" />
        <meta property="og:description" content="Translate text with DeepL from within Warpcast" />
        <meta property="og:image" content="https://deepl-frame-app.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:post_url" content="https://deepl-frame-app.vercel.app/frame" />
        <meta name="fc:frame:button:1" content="Translate" />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>DeepL Translator Frame</h1>
        <p>This app lets you translate text using DeepL API via Warpcast Frames.</p>
      </main>
    </>
  );
}
