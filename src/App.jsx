import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage';
import MarksheetGenrator from './pages/MarksheetGenrator';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/mg' Component={MarksheetGenrator} />
        <Route path='/' Component={LoginPage} />
      </Routes>
    </Router>
  )
}

export default App
