import { useEffect, useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefas'
import { remove, editar } from '../../store/reducers/Tarefas'
import { BotaoSalvar } from '../../styles/index'
type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setdescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) setdescricao(descricaoOriginal)
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setdescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setdescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                //corrigir o evento de onclick salvar, não esta mudando o estado da aplicação//
                const evento = new CustomEvent('tarefas/editar', {
                  detail: editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id: 1
                  })
                })
                dispatchEvent(evento)
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
