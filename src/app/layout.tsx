import { Header } from "../components/Header"
import '../styles/globals.css';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>MyApp</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
