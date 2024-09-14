import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Harika Gummadi</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                {/* <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li> */}

                /<li>
                    <a href="#services" className="footer__link">Expertise</a>
                </li>
            </ul>

            <div className="footer__social">
                {/* <a href="https://instagram.com/shankar_0810?igshid=Yzg5MTU1MDY=" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-instagram"></i>
                </a> */}

                <a href="https://www.linkedin.com/in/harika-gummadi-5b7926238/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/shankar0810" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">Copyrights &#169; 2023 All rights reserved | Harika Gummadi</span>
        </div>
    </footer>
  )
}

export default Footer
