'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #7b1a30 0%, #3d0e1a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      position: 'relative',
      fontFamily: 'Georgia, serif',
    }}>

      {/* Botão Ver Resultados - canto superior direito */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <Link href="/resultados" style={{
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(212,175,55,0.35)',
          color: '#d4af37',
          fontSize: 13,
          padding: '8px 18px',
          borderRadius: 999,
          textDecoration: 'none',
          letterSpacing: '0.03em',
        }}>
          Ver Resultados
        </Link>
      </div>

      {/* Conteúdo central */}
      <div style={{ textAlign: 'center', maxWidth: 360 }}>

        {/* Coração */}
        <div style={{ fontSize: 58, marginBottom: 22 }}>❤️</div>

        {/* Título */}
        <h1 style={{
          fontSize: 32,
          fontWeight: 700,
          color: '#f5e6c0',
          margin: '0 0 8px',
          lineHeight: 1.2,
          letterSpacing: '0.01em',
        }}>
          As 5 Linguagens<br />do Amor
        </h1>

        {/* Autor */}
        <p style={{
          fontSize: 12,
          color: 'rgba(245,230,192,0.4)',
          margin: '0 0 20px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontFamily: 'sans-serif',
        }}>
          Gary Chapman
        </p>

        {/* Linha dourada */}
        <div style={{
          width: 48,
          height: 2,
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          margin: '0 auto 22px',
          borderRadius: 2,
        }} />

        {/* Descrição */}
        <p style={{
          fontSize: 15,
          color: 'rgba(245,230,192,0.65)',
          lineHeight: 1.7,
          margin: '0 0 40px',
          fontFamily: 'sans-serif',
        }}>
          Descubra como você recebe e expressa amor. Responda às 30 perguntas e conheça sua linguagem principal.
        </p>

        {/* Botão Iniciar */}
        <Link href="/quiz" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #d4af37, #b8860b)',
          color: '#2a0a0a',
          fontWeight: 700,
          fontSize: 17,
          padding: '15px 52px',
          borderRadius: 999,
          textDecoration: 'none',
          letterSpacing: '0.04em',
          fontFamily: 'sans-serif',
          boxShadow: '0 6px 28px rgba(212,175,55,0.35)',
        }}>
          Iniciar ✨
        </Link>
      </div>

      {/* Rodapé */}
      <p style={{
        position: 'absolute',
        bottom: 18,
        fontSize: 11,
        color: 'rgba(245,230,192,0.22)',
        letterSpacing: '0.05em',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}>
        Pós Encontro · Paróquia Santo Antônio do Pari
      </p>
    </main>
  )
}