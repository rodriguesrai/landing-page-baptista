import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Contatos from './pages/Contato'
import Servicos from './pages/Servicos'
import LayoutNoFooter from './components/LayoutNoFooter'
import NotFound from './pages/NotFound'
import Sobre from './pages/Sobre'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='sobre' element={<Sobre />} />
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
