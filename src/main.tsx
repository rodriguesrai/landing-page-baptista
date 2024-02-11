import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle.styled.tsx'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)

  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </StrictMode>,
  )
} else {
  // eslint-disable-next-line quotes
  console.error("Element with ID 'root' not found.")
}
