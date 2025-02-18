import './App.css'
import { Routes } from './routes'
import { GlobalStyle } from './styles/global'
import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </AuthProvider>
  )
}

export default App
