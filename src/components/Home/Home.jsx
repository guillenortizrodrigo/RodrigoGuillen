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
                    I'm a machine learning specialist and full-stack web developer with a passion for creating intelligent, end-to-end solutions. 
                    My expertise in deep learning frameworks like TensorFlow helps me transform complex data into innovative AI applications. 
                    I also have extensive experience building robust web applications with React and Django, ensuring seamless and responsive user experiences. 
                    Leveraging Docker for containerization and Azure for cloud infrastructure, I deploy scalable systems and rely on PostgreSQL for reliable data management. My versatile skill set also extends to mobile development on Android and iOS, and I maintain high code quality with Git for version control.
                    I approach each project with a confident, innovative mindset and a career-focused commitment to continuous learning, striving to deliver impactful, cutting-edge solutions.
                </p>
                <div className="btn-box">
                    <a href="/RodrigoGuillenOrtiz.pdf" className="btn" target="_blank" rel="noreferrer">Get my CV</a>
                    <a href="mailto:rodrigoguillenortiz@gmail.com" className="btn">Contact me</a>
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