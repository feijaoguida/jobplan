import './globals.css'
import { Montserrat } from 'next/font/google'

import { AuthProvider } from '@/contexts/AuthContext'
import { Sidebar } from '@/components/Sidebar'

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <body className={montserrat.className}>
        <AuthProvider>
          <div className="flex flex-1 h-screen ">
            
              <Sidebar />
            
            <div className="h-full overflow-y-auto bg-slate-200" >
              {children}
            </div>
          </div>
        </AuthProvider>
        </body>
    </html>
  )
}
