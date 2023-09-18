import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';
import Timeline from './pages/Timeline';

function App() {
  const user = localStorage.getItem("jwtToken");
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/explore" element={<Layout><Explore /></Layout>} />
          <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
          <Route path='/login' element={user ? <Navigate to="/timeline" /> : <Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/timeline' element={user ? <Layout><Timeline /></Layout> : <Navigate to="/login" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
