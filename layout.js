import '../styles/globals.css'
import Header from '../components/Header'

export const metadata = { title: 'Zacky Kurniansyah — Portfolio', description: 'IT Testing, System Analysis' }

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
