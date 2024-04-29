import KeystaticApp from './keystatic'

export const metadata = {
  title: 'Keystatic Admin UI',
}

export default function RootLayout() {
  return (
    <html>
      <body>
        <KeystaticApp />
      </body>
    </html>
  )
}
