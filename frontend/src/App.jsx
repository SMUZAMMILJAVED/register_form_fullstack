import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Nav from './components/Nav'
import { Routes,Route } from 'react-router-dom'
import Counter from './components/Counter'
import Home from './components/Home'
import 'react-toastify/dist/ReactToastify.css';
import StudentRegistrationForm from './components/Register'
function App() {



  return (
    <>
   <StudentRegistrationForm/>
   {/* <div className='bg-red-500'>hello </div> */}
    </>

//   <>
//   <Nav title={'navbar'}/>
// <Routes>
//   <Route path='/' element={<Home/>}/>
//   <Route path='/counter' element={<Counter/>}/>
// </Routes>
//   </>
  )
}

export default App
