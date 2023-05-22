import '@/app/globals.css'
import { Inter } from 'next/font/google'

import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Planeje sua recolocação.',
  description: 'Planeje a forma como você vai buscar uma recoloção no Mercado de Trabalho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}><AuthProvider>{children}</AuthProvider></body>
    </html>
  )
}
