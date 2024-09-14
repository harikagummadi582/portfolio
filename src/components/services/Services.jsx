import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Expertise</h2>
        <span className="section__subtitle">What i do best</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Develop and Optimize  <br /> AI Solutions</h3>   
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Develop and Optimize AI Solutions</h3>
                        {/* <p className="services__modal-description">Service with more than 2 years of experience. Providing quality work to clients and companies.</p> */}

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Train and fine-tune neural networks to improve AI model accuracy and performance.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implement object detection systems for real-time analysis and automation.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Apply advanced AI techniques to optimize and enhance application functionalities.</p>
                            </li>

                            {/* <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I can increase your company UX scores.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Build and Enhance <br /> Web Applications</h3>   
                </div>

                <span onClick={() => toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Build and Enhance Web Applications</h3>
                        {/* <p className="services__modal-description">Service with more than 2 years of experience. Providing quality work to clients and companies.</p> */}

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Develop responsive web interfaces using .NET, React, and Django to enhance user experience.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implement robust content management systems to streamline content creation and management.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Optimize web applications for performance and scalability to handle increasing user demands.</p>
                            </li>

                            {/* <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I can increase your company UX scores.</p>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Implement Scalable and  <br /> Secure Systems</h3>   
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Implement Scalable and Secure Systems</h3>
                        {/* <p className="services__modal-description">Service with more than 2 years of experience. Providing quality work to clients and companies.</p> */}

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design scalable backend architectures to handle growing user demands and data volumes.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Ensure application security through robust data protection and access controls.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Optimize database performance for efficient data retrieval and management.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
