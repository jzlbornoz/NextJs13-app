import { Navigation } from "./components/Navigation"
import './styles/globals.css';



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
        <Navigation />
        {children}
      </body>
    </html>
  )
}
