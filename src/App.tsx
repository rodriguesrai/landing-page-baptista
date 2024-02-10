import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Contatos from './pages/Contato'
import Servicos from './pages/Servicos'
import Escritorio from './pages/Escritorio'
import LayoutNoFooter from './components/LayoutNoFooter'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Inicio />} />
          <Route path='/escritorio' element={<Escritorio />} />
          <Route path='/servicos' element={<Servicos />} />
        </Route>
        <Route path='/' element={<LayoutNoFooter />}>
          <Route path='/contatos' element={<Contatos />} />
        </Route>
        <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>
    </>
  )
}

export default App
