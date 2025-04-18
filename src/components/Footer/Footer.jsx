import React from 'react'
import './Footer.css'
import { Linkedin, Github } from "react-bootstrap-icons";
import { FaDocker } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id='contact' className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3>Rodrigo Guillén</h3>
                    <p>Email: <a href="mailto:rodrigo@example.com">rodrigo@example.com</a></p>
                    <p>Teléfono: <a href="tel:+5215555555555">+52 1 555 555 5555</a></p>
                </div>
                <div className="footer-links">
                    <a
                        href="https://www.linkedin.com/in/rodrigo-guillen-ortiz-full-stack-and-machine-learning-developer-79307119a"
                        className="social-btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://github.com/guillenortizrodrigo"
                        className="social-btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github />
                    </a>
                    <a
                        href="https://hub.docker.com/u/guillenortizrodrigo"
                        className="social-btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaDocker />
                    </a>
                </div>
            </div>
        </footer>
    )
}
