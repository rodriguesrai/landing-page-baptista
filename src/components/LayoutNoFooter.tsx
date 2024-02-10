import { Outlet } from 'react-router-dom'
import Header from './Header'

function LayoutNoFooter() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutNoFooter
