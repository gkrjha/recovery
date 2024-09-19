import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import WorkoutSessions from './Components/WorkoutSessions'
import Gallery from './Components/Gallery'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'
import BMICalculator from './Components/BMICalculator'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App
