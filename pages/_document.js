import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true"></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap"
        ></link>
      </Head>
      <body className="bg-gradient-to-b from-transparent via-transparent to-cyan-100 text-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
