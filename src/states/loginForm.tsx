import { LoginForm, LoginDispatch, LoginAction } from '@/types'

export const INITIAL_LOGIN_FORM_STATE: LoginForm = {
  username: '',
  password: '',
}

export const loginFormReducer = (state: LoginForm, action: LoginDispatch) => {
  const { type, payload } = action
  switch (type) {
    case LoginAction.CHANGE_VALUE:
      return {
        ...state,
        [action.field]: payload,
      }
    default:
      return state
  }
}
