import React from "react";
import "./Skills.css";

function Skills() {
    return (
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills</span><span className="animate scroll"></span></h2>

            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Professional Skills<span className="animate scroll"></span></h3>
                    <div className="skills-box">
                        <div className="skills-content">

                            <div className="progress">
                                <h3>Python <span>95%</span></h3>
                                <div className="bar"><span style={{ width: '95%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Scikit-learn & Tensorflow<span>86%</span></h3>
                                <div className="bar"><span style={{ width: '86%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Pandas & Numpy <span>95%</span></h3>
                                <div className="bar"><span style={{ width: '95%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Neural Networks (ANN, CNN, RNN) <span>85%</span></h3>
                                <div className="bar"><span style={{ width: '85%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Data Analysis & Visualization <span>90%</span></h3>
                                <div className="bar"><span style={{ width: '90%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Azure Machine Learning <span>85%</span></h3>
                                <div className="bar"><span style={{ width: '85%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>React.js <span>92%</span></h3>
                                <div className="bar"><span style={{ width: '92%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Django <span>90%</span></h3>
                                <div className="bar"><span style={{ width: '90%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>JavaScript <span>95%</span></h3>
                                <div className="bar"><span style={{ width: '95%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Docker <span>85%</span></h3>
                                <div className="bar"><span style={{ width: '85%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Node.js / Express <span>85%</span></h3>
                                <div className="bar"><span style={{ width: '85%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>HTML / CSS <span>88%</span></h3>
                                <div className="bar"><span style={{ width: '88%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>PostgreSQL / MySQL <span>90%</span></h3>
                                <div className="bar"><span style={{ width: '90%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Angular / Android / iOS (Swift) <span>75%</span></h3>
                                <div className="bar"><span style={{ width: '75%' }}></span></div>
                            </div>

                            <div className="progress">
                                <h3>Git & Version Control <span>80%</span></h3>
                                <div className="bar"><span style={{ width: '80%' }}></span></div>
                            </div>

                        </div>
                        <span className="animate scroll"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
