import { useReducer } from 'react'
import { LoginFormField, LoginAction } from '@/types'
import { Link, useNavigate } from 'react-router-dom'
import { config } from '@/constant'

import { getAxiosInstance } from '@/helpers'

import { INITIAL_LOGIN_FORM_STATE, loginFormReducer } from '@/states'

// TODO: Missing for loading stack for submit.
export const Login = () => {
  const [formState, dispatch] = useReducer(
    loginFormReducer,
    INITIAL_LOGIN_FORM_STATE,
  )
  const navigate = useNavigate()

  const handleInputChange =
    (field: LoginFormField) => (event: React.FormEvent<HTMLInputElement>) => {
      dispatch({
        type: LoginAction.CHANGE_VALUE,
        payload: event.currentTarget.value,
        field,
      })
    }

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    // COMMENT: validate form don't send to BE if no user or password provide.
    if (formState.password !== '' && formState.username !== '') {
      try {
        const { token } = await getAxiosInstance().post<{ token: string}>(
          '/user/login',
          formState,
        )
        if (token) {
          localStorage.setItem(config.accessToken, token)
          navigate('/home')
        }
      } catch (error) {
        // TODO: handle error like error cause user and password does not match.
      }
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
            <button type="submit" className="m-2 bg-slate-500 active:bg-slate-600 p-2 text-xl">
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
