import { Toaster } from 'react-hot-toast'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <Toaster />
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
