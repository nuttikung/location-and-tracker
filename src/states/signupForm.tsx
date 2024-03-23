import { SignupForm, SignupDispatch, SignupAction } from '@/types'

export const INITIAL_SIGNUP_FORM_STATE: SignupForm = {
  username: '',
  email:'',
  password: '',
}

export const signupFormReducer = (state: SignupForm, action: SignupDispatch) => {
  const { type, payload } = action
  switch (type) {
    case SignupAction.CHANGE_VALUE:
      return {
        ...state,
        [action.field]: payload,
      }
      case SignupAction.SET_ERROR:
      return {
        ...state,
        error: payload, // Set the error message
      }
    default:
      return state
  }
}
