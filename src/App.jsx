import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import Pageheader from './components/Pageheader'
import StudentCard from './components/StudentCard'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Breadcrumb className='breadcrumb'/>
      <Pageheader />
      <div className='cardContainer'>
        <StudentCard title="Usaid" id="2480270" major="Networking" year="2028" cgpa="3.67"/>
        <StudentCard title="Shahzeb" id="248053" major="Media Sciences" year="2020" cgpa="4"/>
        <StudentCard title="Hassan" id="2480247" major="Software Engineering" year="2024" cgpa="3.5"/>
        <StudentCard title="Ibrahim" id="2480259" major="Computer Science" year="2026" cgpa="3.4"/>
      </div>
      <Pagination className='pagination'/>
      <Footer className='footer'/>
      <StudentForm />
    </>
  )
}

export default App
