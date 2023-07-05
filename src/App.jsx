import { BrowserRouter } from "react-router-dom"
import {About,Contact,Hero,Navbar,Tech,Works,StarsCanvas,Footer} from './components'
const App=()=> {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'> 
          <Navbar/>
          <Hero/>
        </div>
        <About/>        
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className='relative z-0 '>
            <Contact/>
            <StarsCanvas/>
            <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
