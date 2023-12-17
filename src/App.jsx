import { Route, Routes } from 'react-router-dom'
import { AuthForm } from './components/AuthForm'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <>
    <p>APP</p>
      <UserProvider>
        <Routes>
          <Route path='/login' element={<AuthForm />}></Route>
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
