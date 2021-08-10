export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'loading' as RequestStatusType,
  error: null as null | string
}

type ActionsType = any

export type setAppStatusAT = {
  type: 'APP/SET-STATUS'
  status: RequestStatusType
}

export type setAppErrorAT = {
  type: 'APP/SET-ERROR'
  error: null | string
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {...state, status: action.status}
    case 'APP/SET-ERROR':
      return {...state, error: action.error}
    default:
      return state
  }
}

export const setAppStatusAC = (status: RequestStatusType): setAppStatusAT => {
  return {
    type: 'APP/SET-STATUS',
    status
  }
}

export const setAppErrorAC = (error: null | string): setAppErrorAT => {
  return {
    type: 'APP/SET-ERROR',
    error
  }
}

