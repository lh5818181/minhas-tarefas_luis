import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefas'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar React para melhorar minhas habilidades em front-end',
      1
    ),
    new Tarefa(
      'Estudar Typescript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar Typescript para melhorar minhas habilidades em front-end',
      1
    ),
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDA,
      'Estudar JavaScript para melhorar minhas habilidades em front-end',
      1
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.findIndex((t) => t.id === action.payload.id)
      if (indexDaTarefa >= 0) {
        state[indexDaTarefa] = action.payload
      }
    },
    Cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.find(
        (t: Tarefa) =>
          t.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Tarefa já existe com esse título')
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { remove, editar, Cadastrar } = tarefasSlice.actions
export default tarefasSlice.reducer
