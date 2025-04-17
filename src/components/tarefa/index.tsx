import { useEffect, useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefas'
import { remove, editar } from '../../store/reducers/Tarefas'
import { Botao, BotaoSalvar } from '../../styles/index'
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
      <label htmlFor={titulo}>
      {/* Adicionar função de marcação do Checkbox para marcar as tarefas concluidas no inicio da aula 
      'Marque uma tarefa como concluída', não estava funcionando a implementação verificar 
      possivel revisão do codigo. */}
        <input type="checkbox" id={titulo} /> 
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
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
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
