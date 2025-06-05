import {Route,Routes } from 'react-router-dom'
import LandingPage from './pages/landing_page/landing_page'
import About from './pages/about_page/about_us'
import Works from './pages/works_page/works_page'
import Services from './pages/services_page/services_page'
import NewContact from './pages/contact_page/ContactPage'


const AppRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>

    <Route path='/works' element={<Works/>}/>
    <Route path='/get_quote' element={<NewContact/>}/>

    </Routes>
  )
}

export default AppRoutes