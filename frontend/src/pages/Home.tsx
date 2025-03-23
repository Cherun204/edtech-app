// filepath: /Users/saicharanvijayagiri/Documents/edtech-app/frontend/src/pages/Home.tsx
import React, { useState } from 'react';
import SimpleTransition from '../components/SimpleTransition';
import LoanEligibilityForm from '../components/LoanEligibilityForm';
import './Home.css';

const Home: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="home">
            <section id="welcome" className="section welcome-section">
                <SimpleTransition />
                <button onClick={() => setShowPopup(true)}>Check Loan Eligibility</button>
                {showPopup && <LoanEligibilityForm onClose={() => setShowPopup(false)} />}
            </section>
            <section id="info" className="section info-section">
                <h2>Why Choose Us?</h2>
                <p>We provide the best overseas education services...</p>
            </section>
            <section id="services" className="section services-section">
                <h2>Our Services</h2>
                <p>We offer a range of services to help you achieve your educational goals...</p>
            </section>
            <section id="testimonials" className="section testimonials-section">
                <h2>Testimonials</h2>
                <p>Hear from our satisfied students...</p>
            </section>
            <section id="contact" className="section contact-section">
                <h2>Contact Us</h2>
                <p>Get in touch with us for more information...</p>
            </section>
            <section id="cta" className="section cta-section">
                <h2>Join Us Today!</h2>
                <p>Sign up now and take the first step towards your educational journey.</p>
                <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
            </section>
        </div>
    );
};

export default Home;