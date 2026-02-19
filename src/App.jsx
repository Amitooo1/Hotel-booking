import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import TermsAndConditions from './pages/Terms&Conditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/Refund&Cancellation'
import About from './pages/About'
import ScrollToTop from './components/ScrolltoTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/terms&conditions' element={<TermsAndConditions/>}></Route>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}></Route>
        <Route path='/refund&cancellation' element={<RefundPolicy/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App