// src/app/layout.tsx
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'As 5 Linguagens do Amor',
  description: 'Descubra sua linguagem do amor — Pós Encontro Santo Antônio do Pari',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={geist.className}>{children}</body>
    </html>
  )
}

// ─────────────────────────────────────────────
// src/app/globals.css  (substitua o conteúdo)
// ─────────────────────────────────────────────
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
*/