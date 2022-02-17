import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage';
import Admin from './pages/AdminPage';
import Projects from './pages/ProjectsPage';
import Signin from './pages/SigninPage';
import Error from './pages/ErrorPage';
import Navbar from './component/shared/Navbar'
import Footer from './component/shared/Footer'

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/Admin" element={<Signin />} />
          <Route path="/AdminPannel" element={<Admin />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
