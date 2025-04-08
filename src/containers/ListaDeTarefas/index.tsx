import Tarefa from '../../components/tarefa'
import { useSelector } from 'react-redux'
import { MainContainer, Titulo } from '../../styles/index'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = tarefas
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item: { titulo: string }) =>
          item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }
    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      )
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      )
    }
    return tarefasFiltradas
  }

  const exibeResultadoFiltagem = () => {
    let mensagem = ''
    const quantidade = filtraTarefas().length
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${criterio} = ${valor} ${complementacao}`
    }

    return mensagem
  }

  const tarefasFiltradas = filtraTarefas()
  const mensagem = exibeResultadoFiltagem()

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>

      <ul>
        {tarefasFiltradas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
              titulo={t.titulo}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
