// filepath: /Users/saicharanvijayagiri/Documents/edtech-app/frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;