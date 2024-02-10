import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Contatos from './pages/Contato'
import Servicos from './pages/Servicos'
import Escritorio from './pages/Escritorio'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Inicio />} />
          <Route path='/escritorio' element={<Escritorio />} />
          <Route path='/contatos' element={<Contatos />} />
          <Route path='/servicos' element={<Servicos />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
