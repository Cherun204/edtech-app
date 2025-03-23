import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigationClick = (path: string) => {
        navigate(path);
        window.location.reload();
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <h1>Gradcredit</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/" onClick={() => handleNavigationClick('/')}>Home</Link></li>
                    <li><Link to="/about" onClick={() => handleNavigationClick('/about')}>About</Link></li>
                    <li><Link to="/contact" onClick={() => handleNavigationClick('/contact')}>Contact</Link></li>
                    <li><Link to="/signup" onClick={() => handleNavigationClick('/signup')}>Sign Up</Link></li>
                    <li><Link to="/signin" onClick={() => handleNavigationClick('/signin')}>Sign In</Link></li>
                </ul>
            </nav>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                ☰
            </button>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => { handleNavigationClick('/'); toggleSidebar(); }}>Home</Link></li>
                    <li><Link to="/about" onClick={() => { handleNavigationClick('/about'); toggleSidebar(); }}>About</Link></li>
                    <li><Link to="/contact" onClick={() => { handleNavigationClick('/contact'); toggleSidebar(); }}>Contact</Link></li>
                    <li><Link to="/signup" onClick={() => { handleNavigationClick('/signup'); toggleSidebar(); }}>Sign Up</Link></li>
                    <li><Link to="/signin" onClick={() => { handleNavigationClick('/signin'); toggleSidebar(); }}>Sign In</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;  