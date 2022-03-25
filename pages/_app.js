import '../styles/globals.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
