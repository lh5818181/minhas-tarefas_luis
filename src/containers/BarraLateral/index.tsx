import { useDispatch, useSelector } from 'react-redux'
import { FiltroCard } from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefas'
import { Campo } from '../../styles/index'
const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            criterio="status"
            legenda="pendentes"
            valor={enums.Status.PENDENTE}
          />
          <FiltroCard
            criterio="status"
            legenda="concluidas"
            valor={enums.Status.CONCLUIDA}
          />
          <FiltroCard
            criterio="prioridade"
            legenda="urgentes"
            valor={enums.Prioridade.URGENTE}
          />
          <FiltroCard
            criterio="prioridade"
            legenda="importante"
            valor={enums.Prioridade.IMPORTANTE}
          />
          <FiltroCard
            criterio="prioridade"
            legenda="normal"
            valor={enums.Prioridade.NORMAL}
          />
          <FiltroCard criterio="todas" legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
