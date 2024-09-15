import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualificatiion__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Master of Science - Computer Science (MSCS)</h3>
                            <span className="qualification__subtitle">Northeastern University, Seattle</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024 - Present
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech - Computer Science and Engineering</h3>
                            <span className="qualification__subtitle">Gokaraju Rangaraju Institute of Engineering and Technology.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Frontend Developer Intern.</h3>
                            <span className="qualification__subtitle">KAASH - Light Engineers.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022(Oct) - 2022(Dec) 
                            </div>
                        </div>
                    </div> */}

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Senior Secondary</h3>
                            <span className="qualification__subtitle">FITJEE, Hyderabad</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        
                    </div>

                </div>

                

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">AI - ML Intern</h3>
                            <span className="qualification__subtitle">Tech Mahindra, Hyderabad </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2023 – July 2023
                            </div>
                        </div>
                    </div>

                    

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development Intern</h3>
                            <span className="qualification__subtitle">Plant Protection Association of India</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> April 2023 – Aug 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                    <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">App Development Intern</h3>
                            <span className="qualification__subtitle">Tech Era IT Consulting Pvt Ltd</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Aug 2022 – Dec 2022
                            </div>
                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification