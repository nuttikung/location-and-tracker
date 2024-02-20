import { Routes, Route } from 'react-router-dom'

import './App.css'

import { Login, SignUp, Dashboard } from '@/pages'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  )
}
