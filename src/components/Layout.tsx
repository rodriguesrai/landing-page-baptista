import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SocialLinks from './SocialLinks'

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <SocialLinks />
      <Footer />
    </>
  )
}

export default Layout
