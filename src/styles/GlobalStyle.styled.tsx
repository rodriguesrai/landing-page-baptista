import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
    
  body, h1, h2, h3, h4, h5, h6, p, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  color: inherit;
  line-height: normal;
  font-family: inherit;
}  

body {


}
`

export default GlobalStyle
