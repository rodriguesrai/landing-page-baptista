import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Servicos from './pages/Servicos'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route path='/' element={ <Inicio/> } />
          <Route path='/sobre' element={ <Sobre/> } />
          <Route path='/contato' element={ <Contato/> } />
          <Route path='/servicos' element={ <Servicos/> } />
        </Route> 
      </Routes>
    </>
  )
}

export default App
