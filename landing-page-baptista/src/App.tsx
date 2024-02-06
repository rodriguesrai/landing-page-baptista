import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Header/> }>
          <Route path='/' element={ <h1>Home</h1> } />
          <Route path='about' element={ <h1>About</h1> } />
          <Route path='services' element={ <h1>Services</h1> } />
          <Route path='contact' element={ <h1>Contact</h1> } />
        </Route> 
      </Routes>
    </>
  )
}

export default App
