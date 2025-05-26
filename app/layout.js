export const metadata = {
  title: 'DeepL Frame App',
  description: 'A Warpcast Frame using DeepL translation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
