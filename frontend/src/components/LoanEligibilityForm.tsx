import React from 'react';
import './LoanEligibilityForm.css';

const LoanEligibilityForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="loan-eligibility-form">
            <h3>Loan Eligibility Form</h3>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="number" placeholder="Loan Amount" required />
                <button type="submit">Submit</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default LoanEligibilityForm;
export {};