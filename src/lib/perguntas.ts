// Linguagens: A = Palavras de Afirmação, B = Tempo de Qualidade,
//             C = Receber Presentes, D = Atos de Serviço, E = Toque Físico

export type Linguagem = 'A' | 'B' | 'C' | 'D' | 'E'

export interface Opcao {
  texto: string
  linguagem: Linguagem
}

export interface Pergunta {
  id: number
  opcoes: [Opcao, Opcao]
}

export const perguntas: Pergunta[] = [
  {
    id: 1,
    opcoes: [
      { texto: 'Gosto de receber palavras de afirmação', linguagem: 'A' },
      { texto: 'Gosto de receber abraços', linguagem: 'E' },
    ],
  },
  {
    id: 2,
    opcoes: [
      { texto: 'Gosto de passar tempo a sós com alguém especial para mim', linguagem: 'B' },
      { texto: 'Sinto-me amado(a) quando alguém me oferece ajuda prática', linguagem: 'D' },
    ],
  },
  {
    id: 3,
    opcoes: [
      { texto: 'Gosto quando ganho presentes', linguagem: 'C' },
      { texto: 'Gosto de visitas sem pressa com amigos e entes queridos', linguagem: 'B' },
    ],
  },
  {
    id: 4,
    opcoes: [
      { texto: 'Sinto-me amado(a) quando as pessoas fazem coisas para ajudar-me', linguagem: 'D' },
      { texto: 'Sinto-me amado(a) quando as pessoas me tocam', linguagem: 'E' },
    ],
  },
  {
    id: 5,
    opcoes: [
      { texto: 'Sinto-me amado(a) quando alguém que amo me rodeia com o braço', linguagem: 'E' },
      { texto: 'Sinto-me amado(a) quando recebo um presente de alguém que amo', linguagem: 'C' },
    ],
  },
  {
    id: 6,
    opcoes: [
      { texto: 'Gosto de sair com amigos e entes queridos', linguagem: 'B' },
      { texto: 'Gosto de bater palma com palma ou ficar de mãos dadas com pessoas especiais', linguagem: 'E' },
    ],
  },
  {
    id: 7,
    opcoes: [
      { texto: 'Símbolos visíveis de amor (presentes) são importantes para mim', linguagem: 'C' },
      { texto: 'Sinto-me amado(a) quando as pessoas me afirmam', linguagem: 'A' },
    ],
  },
  {
    id: 8,
    opcoes: [
      { texto: 'Gosto de sentar perto das pessoas a quem aprecio', linguagem: 'E' },
      { texto: 'Gosto de que me digam que sou atraente/bonito(a)', linguagem: 'A' },
    ],
  },
  {
    id: 9,
    opcoes: [
      { texto: 'Gosto de passar tempo com amigos e entes queridos', linguagem: 'B' },
      { texto: 'Gosto de receber presentinhos de amigos e entes queridos', linguagem: 'C' },
    ],
  },
  {
    id: 10,
    opcoes: [
      { texto: 'Palavras de aceitação são importantes para mim', linguagem: 'A' },
      { texto: 'Sei que alguém me ama quando ele me ajuda', linguagem: 'D' },
    ],
  },
  {
    id: 11,
    opcoes: [
      { texto: 'Gosto de estar junto e fazer coisas com amigos e entes queridos', linguagem: 'B' },
      { texto: 'Gosto quando me dizem palavras bondosas', linguagem: 'A' },
    ],
  },
  {
    id: 12,
    opcoes: [
      { texto: 'O que a pessoa faz me afeta mais que aquilo que ela diz', linguagem: 'D' },
      { texto: 'Os abraços me fazem sentir participante e apreciado(a)', linguagem: 'E' },
    ],
  },
  {
    id: 13,
    opcoes: [
      { texto: 'Aprecio o louvor e tento evitar as críticas', linguagem: 'A' },
      { texto: 'Vários presentes pequenos significam mais para mim que um grande', linguagem: 'C' },
    ],
  },
  {
    id: 14,
    opcoes: [
      { texto: 'Sinto-me íntimo(a) de alguém quando estamos conversando ou fazendo coisas juntos', linguagem: 'B' },
      { texto: 'Sinto-me mais perto dos amigos e entes queridos quando eles me tocam com frequência', linguagem: 'E' },
    ],
  },
  {
    id: 15,
    opcoes: [
      { texto: 'Gosto que as pessoas elogiem minhas realizações', linguagem: 'A' },
      { texto: 'Sei que as pessoas me amam quando fazem coisas para mim que elas mesmas não apreciam', linguagem: 'D' },
    ],
  },
  {
    id: 16,
    opcoes: [
      { texto: 'Gosto de ser tocado(a) quando amigos e entes queridos passam perto de mim', linguagem: 'E' },
      { texto: 'Gosto quando as pessoas me ouvem e mostram interesse genuíno no que estou dizendo', linguagem: 'B' },
    ],
  },
  {
    id: 17,
    opcoes: [
      { texto: 'Sinto-me amado(a) quando amigos e entes queridos me ajudam nos trabalhos e projetos', linguagem: 'D' },
      { texto: 'Gosto realmente de receber presentes de amigos e entes queridos', linguagem: 'C' },
    ],
  },
  {
    id: 18,
    opcoes: [
      { texto: 'Gosto que as pessoas elogiem minha aparência', linguagem: 'A' },
      { texto: 'Sinto-me amado(a) quando as pessoas tomam tempo para entender meus sentimentos', linguagem: 'B' },
    ],
  },
  {
    id: 19,
    opcoes: [
      { texto: 'Sinto-me seguro(a) quando uma pessoa especial toca em mim', linguagem: 'E' },
      { texto: 'Atos de serviço fazem com que me sinta amado(a)', linguagem: 'D' },
    ],
  },
  {
    id: 20,
    opcoes: [
      { texto: 'Aprecio as muitas coisas que as pessoas especiais fazem para mim', linguagem: 'D' },
      { texto: 'Gosto de receber presentes que pessoas especiais fazem para mim', linguagem: 'C' },
    ],
  },
  {
    id: 21,
    opcoes: [
      { texto: 'Aprecio realmente o sentimento que tenho quando alguém me dá total atenção', linguagem: 'B' },
      { texto: 'Aprecio realmente o sentimento que tenho quando alguém me presta algum ato de serviço', linguagem: 'D' },
    ],
  },
  {
    id: 22,
    opcoes: [
      { texto: 'Sinto-me amado(a) quando uma pessoa comemora meu aniversário com um presente', linguagem: 'C' },
      { texto: 'Sinto-me amado(a) quando uma pessoa comemora meu aniversário com palavras significativas', linguagem: 'A' },
    ],
  },
  {
    id: 23,
    opcoes: [
      { texto: 'Sei o que a pessoa está pensando de mim quando me dá um presente', linguagem: 'C' },
      { texto: 'Sinto-me amado(a) quando a pessoa me ajuda nas tarefas diárias', linguagem: 'D' },
    ],
  },
  {
    id: 24,
    opcoes: [
      { texto: 'Aprecio quando alguém ouve com paciência e não me interrompe', linguagem: 'B' },
      { texto: 'Aprecio quando alguém se lembra de dias especiais com um presente', linguagem: 'C' },
    ],
  },
  {
    id: 25,
    opcoes: [
      { texto: 'Gosto de saber que os entes queridos estão preocupados em ajudar-me nas tarefas diárias', linguagem: 'D' },
      { texto: 'Gosto de fazer viagens longas com alguém que é especial para mim', linguagem: 'B' },
    ],
  },
  {
    id: 26,
    opcoes: [
      { texto: 'Gosto de beijar ou ser beijado(a) por pessoa de minha intimidade', linguagem: 'E' },
      { texto: 'Receber um presente sem qualquer razão especial me deixa contente', linguagem: 'C' },
    ],
  },
  {
    id: 27,
    opcoes: [
      { texto: 'Gosto que me digam que sou querido(a)', linguagem: 'A' },
      { texto: 'Gosto que a pessoa olhe para mim enquanto falamos', linguagem: 'B' },
    ],
  },
  {
    id: 28,
    opcoes: [
      { texto: 'Presentes de um amigo ou ente querido são sempre especiais para mim', linguagem: 'C' },
      { texto: 'Sinto-me bem quando um amigo ou ente querido me toca', linguagem: 'E' },
    ],
  },
  {
    id: 29,
    opcoes: [
      { texto: 'Sinto-me amado(a) quando alguém faz com entusiasmo o que pedi', linguagem: 'D' },
      { texto: 'Sinto-me amado(a) quando dizem quanto me apreciam', linguagem: 'A' },
    ],
  },
  {
    id: 30,
    opcoes: [
      { texto: 'Preciso ser tocado(a) todos os dias', linguagem: 'E' },
      { texto: 'Preciso de palavras de afirmação todos os dias', linguagem: 'A' },
    ],
  },
]

export const nomesLinguagens: Record<Linguagem, string> = {
  A: 'Palavras de Afirmação',
  B: 'Tempo de Qualidade',
  C: 'Receber Presentes',
  D: 'Atos de Serviço',
  E: 'Toque Físico',
}

export const iconsLinguagens: Record<Linguagem, string> = {
  A: '💬',
  B: '⏳',
  C: '🎁',
  D: '🤝',
  E: '🤗',
}