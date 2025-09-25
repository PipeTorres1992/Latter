import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-heading">LT Education Abroad Limited Nº 605302</div>
        <div className="footer-divider"></div>
        <div className="footer-heading">
            <a href="https://elischools.com/wp-content/uploads/2024/05/ELI-Schools-Data-Privacy-Policy-GDPR-1.pdf"
                className="footer-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
        <div className="footer-heading">
            <a href="https://elischools.com//wp-content/uploads/2023/11/ELI-Schools-Terms-and-Conditions-Adult-Programs.pdf"
                className="footer-link" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
        </div>
        <div className="footer-heading">
            <a href="https://elischools.com/policies/" className="footer-link" target="_blank" rel="noopener noreferrer">Student Policy</a>
        </div>
    </footer>
  );
};

export default Footer;
