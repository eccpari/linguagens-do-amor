'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { perguntas, Linguagem } from '@/lib/perguntas'
import { supabase } from '@/lib/supabase'

export default function Quiz() {
  const router = useRouter()
  const [atual, setAtual] = useState(0)
  const [selecionada, setSelecionada] = useState<0 | 1 | null>(null)
  const [pontos, setPontos] = useState<Record<Linguagem, number>>({ A: 0, B: 0, C: 0, D: 0, E: 0 })
  const [enviando, setEnviando] = useState(false)

  const pergunta = perguntas[atual]
  const progresso = Math.round((atual / perguntas.length) * 100)

  async function avancar() {
    if (selecionada === null) return
    const linguagem = pergunta.opcoes[selecionada].linguagem
    const novosPontos = { ...pontos, [linguagem]: pontos[linguagem] + 1 }
    setPontos(novosPontos)

    if (atual < perguntas.length - 1) {
      setAtual(atual + 1)
      setSelecionada(null)
    } else {
      setEnviando(true)
      await supabase.from('respostas').insert({
        palavras_afirmacao: novosPontos.A,
        tempo_qualidade: novosPontos.B,
        receber_presentes: novosPontos.C,
        atos_servico: novosPontos.D,
        toque_fisico: novosPontos.E,
      })
      const params = new URLSearchParams({
        A: String(novosPontos.A), B: String(novosPontos.B),
        C: String(novosPontos.C), D: String(novosPontos.D),
        E: String(novosPontos.E),
      })
      router.push(`/meu-resultado?${params.toString()}`)
    }
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #7b1a30 0%, #3d0e1a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: 'sans-serif',
    }}>
      <div style={{ width: '100%', maxWidth: 480 }}>

        {/* Progresso */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: 'rgba(245,230,192,0.6)' }}>
              Pergunta {atual + 1} de {perguntas.length}
            </span>
            <span style={{ fontSize: 13, color: 'rgba(245,230,192,0.6)' }}>
              {progresso}%
            </span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 99, height: 6 }}>
            <div style={{
              width: `${progresso}%`,
              height: 6,
              borderRadius: 99,
              background: 'linear-gradient(90deg, #d4af37, #b8860b)',
              transition: 'width 0.4s ease',
            }} />
          </div>
        </div>

        {/* Card */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(212,175,55,0.2)',
          borderRadius: 20,
          padding: '28px 24px',
          marginBottom: 20,
        }}>
          <p style={{
            fontSize: 13,
            color: 'rgba(245,230,192,0.45)',
            textAlign: 'center',
            marginBottom: 20,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            Escolha a que mais combina com você
          </p>

          {/* Opções */}
          {pergunta.opcoes.map((opcao, idx) => {
            const selecionado = selecionada === idx
            return (
              <button key={idx} onClick={() => setSelecionada(idx as 0 | 1)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '16px 20px',
                  borderRadius: 14,
                  border: selecionado
                    ? '2px solid #d4af37'
                    : '1px solid rgba(255,255,255,0.12)',
                  background: selecionado
                    ? 'rgba(212,175,55,0.15)'
                    : 'rgba(255,255,255,0.04)',
                  color: '#f5e6c0',
                  fontSize: 15,
                  lineHeight: 1.5,
                  cursor: 'pointer',
                  marginBottom: idx === 0 ? 12 : 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  transition: 'all 0.15s ease',
                }}>
                {/* Bolinha */}
                <div style={{
                  width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                  border: selecionado ? '2px solid #d4af37' : '2px solid rgba(245,230,192,0.3)',
                  background: selecionado ? '#d4af37' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {selecionado && (
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2a0a0a' }} />
                  )}
                </div>
                {opcao.texto}
              </button>
            )
          })}
        </div>

        {/* Botão Próxima */}
        <button onClick={avancar} disabled={selecionada === null || enviando}
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: 999,
            border: 'none',
            fontSize: 16,
            fontWeight: 700,
            cursor: selecionada !== null && !enviando ? 'pointer' : 'not-allowed',
            background: selecionada !== null && !enviando
              ? 'linear-gradient(135deg, #d4af37, #b8860b)'
              : 'rgba(255,255,255,0.08)',
            color: selecionada !== null && !enviando
              ? '#2a0a0a'
              : 'rgba(245,230,192,0.25)',
            letterSpacing: '0.03em',
            transition: 'all 0.2s ease',
            boxShadow: selecionada !== null && !enviando
              ? '0 6px 24px rgba(212,175,55,0.3)'
              : 'none',
          }}>
          {enviando ? 'Salvando...' : atual < perguntas.length - 1 ? 'Próxima →' : 'Ver meu resultado 🎉'}
        </button>

      </div>
    </main>
  )
}