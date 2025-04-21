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
                    <p>Email: <a href="mailto:rodrigoguillenortiz@gmail.com">rodrigoguillenortiz@gmail.com</a></p>
                    <p>Teléfono: <a href="https://wa.me/524444926486?text=Hi%20Rodrigo,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch!">+52 444 492 6486</a></p>
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
