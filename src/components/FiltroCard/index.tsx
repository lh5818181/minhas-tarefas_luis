import * as S from './styles'

export type Props = {
  ativo?: boolean
}

export const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>3</S.Contador>
    <S.Label>Pendentes</S.Label>
  </S.Card>
)
