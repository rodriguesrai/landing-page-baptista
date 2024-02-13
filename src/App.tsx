import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Contatos from './pages/Contato'
import Servicos from './pages/Servicos'
import Escritorio from './pages/Escritorio'
import LayoutNoFooter from './components/LayoutNoFooter'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='escritorio' element={<Escritorio />} />
          <Route path='servicos' element={<Servicos />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/' element={<LayoutNoFooter />}>
          <Route path='contatos' element={<Contatos />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
