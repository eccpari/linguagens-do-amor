'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Linguagem, nomesLinguagens, iconsLinguagens } from '@/lib/perguntas'
import Link from 'next/link'

const descricoes: Record<Linguagem, string> = {
  A: 'Você se sente amado(a) por meio de elogios, encorajamento e palavras de carinho. Palavras gentis e reconhecimento verbal enchem seu tanque emocional.',
  B: 'Você valoriza atenção exclusiva e momentos compartilhados. Estar presente, ouvir com atenção e fazer coisas juntos é o que mais demonstra amor para você.',
  C: 'Presentes são símbolos visíveis de amor e apreço para você. Não é o valor financeiro, mas o gesto de pensar em você que toca seu coração.',
  D: 'Ações falam mais alto que palavras para você. Quando alguém faz algo para facilitar sua vida, você sente que é verdadeiramente amado(a).',
  E: 'Abraços, beijos e afeto físico são sua principal forma de sentir conexão e amor. O contato físico carinhoso nutre seu emocional.',
}

function Resultado() {
  const params = useSearchParams()
  const pontos: Record<Linguagem, number> = {
    A: Number(params.get('A') ?? 0),
    B: Number(params.get('B') ?? 0),
    C: Number(params.get('C') ?? 0),
    D: Number(params.get('D') ?? 0),
    E: Number(params.get('E') ?? 0),
  }
  const ranking = (Object.keys(pontos) as Linguagem[]).sort((a, b) => pontos[b] - pontos[a])
  const principal = ranking[0]
  const bilingue = pontos[ranking[0]] === pontos[ranking[1]]

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #7b1a30 0%, #3d0e1a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 20px',
      fontFamily: 'sans-serif',
    }}>
      <div style={{ width: '100%', maxWidth: 480, textAlign: 'center' }}>

        {/* Ícone principal */}
        <div style={{ fontSize: 56, marginBottom: 16 }}>{iconsLinguagens[principal]}</div>

        {/* Título */}
        <p style={{ fontSize: 14, color: 'rgba(245,230,192,0.5)', margin: '0 0 8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Sua linguagem principal é
        </p>
        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 30,
          fontWeight: 700,
          color: '#d4af37',
          margin: '0 0 6px',
        }}>
          {nomesLinguagens[principal]}
        </h1>

        {/* Linha dourada */}
        <div style={{
          width: 48, height: 2,
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          margin: '16px auto 28px',
          borderRadius: 2,
        }} />

        {/* Bilíngue */}
        {bilingue && (
          <div style={{
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: 12,
            padding: '12px 16px',
            marginBottom: 20,
            fontSize: 13,
            color: '#d4af37',
          }}>
            🌟 Você é <strong>bilíngue</strong> — duas linguagens empataram e são igualmente importantes para você!
          </div>
        )}

        {/* Ranking */}
        <div style={{ marginBottom: 24 }}>
          {ranking.map((lang, i) => (
            <div key={lang} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 18px',
              borderRadius: 14,
              border: i === 0 ? '2px solid rgba(212,175,55,0.6)' : '1px solid rgba(255,255,255,0.08)',
              background: i === 0 ? 'rgba(212,175,55,0.12)' : 'rgba(255,255,255,0.04)',
              marginBottom: 10,
            }}>
              <span style={{ fontSize: 13, color: 'rgba(245,230,192,0.4)', width: 20, textAlign: 'right' }}>{i + 1}.</span>
              <span style={{ fontSize: 24 }}>{iconsLinguagens[lang]}</span>
              <span style={{ flex: 1, textAlign: 'left', fontSize: 15, color: '#f5e6c0' }}>
                {nomesLinguagens[lang]}
              </span>
              <span style={{
                fontSize: 20,
                fontWeight: 700,
                color: i === 0 ? '#d4af37' : 'rgba(245,230,192,0.4)',
              }}>
                {pontos[lang]}
              </span>
            </div>
          ))}
        </div>

        {/* Descrição da linguagem principal */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(212,175,55,0.15)',
          borderRadius: 16,
          padding: '20px 22px',
          marginBottom: 32,
          textAlign: 'left',
          fontSize: 14,
          color: 'rgba(245,230,192,0.7)',
          lineHeight: 1.75,
        }}>
          <strong style={{ color: '#d4af37', display: 'block', marginBottom: 8 }}>
            {iconsLinguagens[principal]} {nomesLinguagens[principal]}
          </strong>
          {descricoes[principal]}
        </div>

        {/* Botão voltar */}
        <Link href="/" style={{
          display: 'inline-block',
          border: '1px solid rgba(212,175,55,0.4)',
          color: '#d4af37',
          fontSize: 14,
          padding: '12px 32px',
          borderRadius: 999,
          textDecoration: 'none',
          letterSpacing: '0.03em',
        }}>
          ← Voltar ao início
        </Link>

      </div>
    </main>
  )
}

export default function MeuResultadoPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #7b1a30 0%, #3d0e1a 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <p style={{ color: '#d4af37', fontFamily: 'sans-serif' }}>Carregando resultado...</p>
      </div>
    }>
      <Resultado />
    </Suspense>
  )
}