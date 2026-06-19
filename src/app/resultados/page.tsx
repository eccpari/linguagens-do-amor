'use client'
import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { nomesLinguagens, iconsLinguagens, Linguagem } from '@/lib/perguntas'

interface Totais { A: number; B: number; C: number; D: number; E: number; total: number }

export default function Resultados() {
  const [totais, setTotais] = useState<Totais | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState<Date | null>(null)

  const buscarDados = useCallback(async () => {
    const { data, error } = await supabase.from('respostas').select('*')
    if (error || !data) return
    const t: Totais = { A: 0, B: 0, C: 0, D: 0, E: 0, total: data.length }
    for (const row of data) {
      // Descobre qual linguagem teve mais pontos (a principal da pessoa)
      const scores: Record<Linguagem, number> = {
        A: row.palavras_afirmacao,
        B: row.tempo_qualidade,
        C: row.receber_presentes,
        D: row.atos_servico,
        E: row.toque_fisico,
      }
      const principal = (Object.keys(scores) as Linguagem[])
        .reduce((a, b) => scores[a] >= scores[b] ? a : b)
      t[principal] += 1
    }
    setTotais(t)
    setUltimaAtualizacao(new Date())
    setCarregando(false)
  }, [])

  useEffect(() => {
    buscarDados()
    const interval = setInterval(buscarDados, 15000)
    return () => clearInterval(interval)
  }, [buscarDados])

  const grandTotal = totais ? totais.total || 1 : 1
  const ranking = totais
    ? (['A', 'B', 'C', 'D', 'E'] as Linguagem[]).sort((a, b) => totais[b] - totais[a])
    : []

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
      <div style={{ width: '100%', maxWidth: 500 }}>

        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📊</div>
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 26,
            fontWeight: 700,
            color: '#f5e6c0',
            margin: '0 0 8px',
          }}>
            Painel dos Apresentadores
          </h1>
          {totais && (
            <p style={{ fontSize: 14, color: 'rgba(245,230,192,0.45)', margin: 0 }}>
              {totais.total} pessoa{totais.total !== 1 ? 's' : ''} responderam
            </p>
          )}
          <div style={{
            width: 48, height: 2,
            background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
            margin: '16px auto 0',
            borderRadius: 2,
          }} />
        </div>

        {/* Loading */}
        {carregando && (
          <p style={{ textAlign: 'center', color: '#d4af37', fontSize: 15 }}>Carregando dados...</p>
        )}

        {/* Sem respostas */}
        {!carregando && totais && totais.total === 0 && (
          <div style={{ textAlign: 'center', color: 'rgba(245,230,192,0.5)', padding: '40px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>💬</div>
            <p style={{ fontSize: 15, lineHeight: 1.6 }}>
              Nenhuma resposta ainda.<br />Compartilhe o link com os participantes!
            </p>
          </div>
        )}

        {/* Ranking */}
        {!carregando && totais && totais.total > 0 && (
          <div style={{ marginBottom: 28 }}>
            {ranking.map((lang, i) => {
              const pct = Math.round((totais[lang] / grandTotal) * 100)
              return (
                <div key={lang} style={{
                  padding: '16px 20px',
                  borderRadius: 16,
                  border: i === 0 ? '2px solid rgba(212,175,55,0.6)' : '1px solid rgba(255,255,255,0.08)',
                  background: i === 0 ? 'rgba(212,175,55,0.12)' : 'rgba(255,255,255,0.04)',
                  marginBottom: 12,
                }}>
                  {/* Linha superior */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 13, color: 'rgba(245,230,192,0.35)', width: 20, textAlign: 'right' }}>
                      {i + 1}.
                    </span>
                    <span style={{ fontSize: 24 }}>{iconsLinguagens[lang]}</span>
                    <span style={{ flex: 1, fontSize: 15, color: '#f5e6c0', fontWeight: 500 }}>
                      {nomesLinguagens[lang]}
                    </span>
                    <span style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: i === 0 ? '#d4af37' : 'rgba(245,230,192,0.4)',
                    }}>
                      {pct}%
                    </span>
                  </div>
                  {/* Barra de progresso */}
                  <div style={{ marginLeft: 44, background: 'rgba(255,255,255,0.08)', borderRadius: 99, height: 6 }}>
                    <div style={{
                      width: `${pct}%`,
                      height: 6,
                      borderRadius: 99,
                      background: i === 0
                        ? 'linear-gradient(90deg, #d4af37, #b8860b)'
                        : 'rgba(245,230,192,0.25)',
                      transition: 'width 0.7s ease',
                    }} />
                  </div>
                  <p style={{ marginLeft: 44, marginTop: 6, fontSize: 12, color: 'rgba(245,230,192,0.3)' }}>
                    {totais[lang]} pessoa{totais[lang] !== 1 ? 's' : ''}
                  </p>
                </div>
              )
            })}
          </div>
        )}

        {/* Rodapé */}
        <div style={{ textAlign: 'center' }}>
          {ultimaAtualizacao && (
            <p style={{ fontSize: 12, color: 'rgba(245,230,192,0.25)', marginBottom: 12 }}>
              Atualizado às {ultimaAtualizacao.toLocaleTimeString('pt-BR')} · Auto-atualiza a cada 15s
            </p>
          )}
          <button onClick={buscarDados} style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(212,175,55,0.3)',
            color: '#d4af37',
            fontSize: 14,
            padding: '10px 24px',
            borderRadius: 999,
            cursor: 'pointer',
            letterSpacing: '0.02em',
          }}>
            🔄 Atualizar agora
          </button>
        </div>

      </div>
    </main>
  )
}