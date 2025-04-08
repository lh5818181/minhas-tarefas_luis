import * as S from './styles'
import * as enums from '../../utils/enums/Tarefas'
import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

export const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificarAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.length
    if (criterio === 'prioridade') {
      return tarefas.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () =>
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )

  const contador = contarTarefas()
  const ativo = verificarAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}
