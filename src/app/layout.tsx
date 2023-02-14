import { Header } from "../components/client/Header"
import '../styles/globals.css';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
