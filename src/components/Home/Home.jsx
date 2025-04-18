import React from "react";

import "./Home.css"
import { Linkedin, Github } from "react-bootstrap-icons";
import { FaDocker } from "react-icons/fa";
import { MdMargin } from "react-icons/md";
//import { CiLinkedin } from "react-icons/ci";
//import { FaGithub } from "react-icons/fa";
//import rodrigo2 from "../images/rodrigo2.png"



function Home() {
    return (
        <section className="home" id="home">
            <div className="home-content" style={{ marginTop: "10rem" }}>
                <h1>Hi, I'm <span>Rodrigo Guillen</span></h1>
                <div className="text-animate">
                    <h3>Fullstack and Machine Learning Developer</h3>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centurie
                </p>
                <div className="btn-box">
                    <a href="#about" className="btn">Get my CV</a>
                    <a href="#education" className="btn">Contact me</a>
                </div>

                <div className="home-sci">
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
            <div className="home-img">
                {/*<img src=""/>*/}
            </div>
        </section>
    )
}

export default Home