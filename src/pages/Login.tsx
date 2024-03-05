import { useReducer } from 'react'
import {
  type LoginForm,
  LoginFormField,
  LoginAction,
  LoginDispatch,
} from '@/types'
import { Link } from 'react-router-dom'

// TODO: extract to new file ?
const INITIAL_LOGIN_FORM_STATE: LoginForm = {
  username: '',
  password: '',
}

// TODO: extract this to state file ?
function reducer(state: LoginForm, action: LoginDispatch) {
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

export const Login = () => {
  const [formState, dispatch] = useReducer(reducer, INITIAL_LOGIN_FORM_STATE)

  const handleInputChange =
    (field: LoginFormField) => (event: React.FormEvent<HTMLInputElement>) => {
      dispatch({
        type: LoginAction.CHANGE_VALUE,
        payload: event.currentTarget.value,
        field,
      })
    }

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    // TODO: validate form don't send to BE if no user or password provide.
    if (formState.password !== '' && formState.username !== '') {
      // submit to backend.
      console.log('🚀 ~ handleFormSubmit ~ formState:', formState)
    }
  }

  return (
    <main className="flex h-screen justify-center bg-slate-800 text-slate-300">
      <div className=" flex flex-col justify-center p-2">
        <div className="p-2 text-center text-3xl font-bold">Login</div>
        <div className="m-3">
          <form
            onSubmit={handleFormSubmit}
            noValidate
            className="flex flex-col flex-wrap"
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={formState.username}
              onChange={handleInputChange('username')}
              autoComplete="username"
              className="m-1 rounded-lg p-2 text-xl font-bold text-slate-700 outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={formState.password}
              onChange={handleInputChange('password')}
              autoComplete="current-password"
              placeholder="password"
              className="m-1 rounded-lg p-2 text-xl font-bold text-slate-700 outline-none"
            />
            <button type="submit" className="m-2 bg-slate-500 p-2 text-xl">
              Log in
            </button>
          </form>
        </div>
        <div>
          <div className="p-1 text-center text-slate-500">
            <Link to="/" className=" hover:text-slate-400 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div className="p-1 text-center text-slate-500">
            New here?{' '}
            <Link
              to="/signup"
              className=" hover:text-slate-400 hover:underline"
            >
              Sign Up!
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
