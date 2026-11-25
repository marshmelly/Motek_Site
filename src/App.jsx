import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Navbar} from './Pages/Navbar'
import { Hero }   from './Pages/Hero'
import { About } from './Pages/About'
import { Services } from './Pages/Services'
import { Portfolio } from './Pages/Portfolio'


function App() {
  

  return (
    <>
    
   <BrowserRouter>
   <Navbar />
      
   <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/portfolio" element={<Portfolio />} />
    
   </Routes>
   <About />
   <Services />
   <Portfolio />
   </BrowserRouter>
   
    </>
  )
}

export default App
