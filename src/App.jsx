import { Route, Routes } from 'react-router-dom'
import { AuthForm } from './components/AuthForm'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <>
      <UserProvider>
      <Routes>
        <Route path='/' element={<AuthForm />}></Route>
        <Route path='/login' element={<AuthForm />}></Route>
      </Routes>
      </UserProvider>
    </>
  )
}

export default App
