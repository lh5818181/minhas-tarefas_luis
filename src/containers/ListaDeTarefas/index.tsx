import Tarefa from '../../components/tarefa'
import { Titulo } from '../../components/tarefa/styles'
import { Container } from './styles'

const tarefas = [
  {
    Titulo: 'Estudar React',
    prioridade: 'importante',
    status: 'Em andamento',
    descricao: 'Estudar React para melhorar minhas habilidades em front-end'
  },
  {
    Titulo: 'pagar fatura ',
    prioridade: 'urgente',
    status: 'concluida',
    descricao: 'baixar fatura'
  },
  {
    Titulo: 'ir para academia',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'fazer treino'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como : &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.Titulo}>
          <Tarefa
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
            titulo={t.Titulo}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
